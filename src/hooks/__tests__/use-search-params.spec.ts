import { renderHook } from '@testing-library/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRouteParams } from '../use-search-params';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
  useSearchParams: jest.fn().mockReturnValue(new URLSearchParams())
}));

let mockedUseRouter = useRouter as jest.Mock;
let mockedUsePathname = usePathname as jest.Mock;
let mockedUseSearchParams = useSearchParams as jest.Mock;

const mockRouter = (pathName: string, params: {} = {}) => {
  const pushMock = jest.fn();
  const urlParams = new URLSearchParams(params);
  mockedUseSearchParams.mockReturnValue(urlParams);
  mockedUsePathname.mockReturnValue(pathName);
  mockedUseRouter.mockReturnValue({
    push: pushMock
  });

  return {
    pushMock,
    params,
    pathName
  };
};

describe('useRouteParams', () => {
  beforeEach(() => {
    mockedUsePathname.mockClear();
    mockedUseSearchParams.mockClear();
    mockedUseRouter.mockClear();
  });

  it('should set query parameter', () => {
    const { pushMock } = mockRouter('/test-path');
    const { result } = renderHook(() => useRouteParams());

    result.current.setParam('newKey', 'newValue');

    expect(pushMock).toHaveBeenCalledWith('/test-path?newKey=newValue');
  });

  it('should delete query parameter', () => {
    const { pushMock } = mockRouter('/test-path', { toDelete: 'value' });
    const { result } = renderHook(() => useRouteParams());

    result.current.deleteParam('toDelete');

    expect(pushMock).toHaveBeenCalledWith('/test-path?');
  });

  it('should get query parameter', () => {
    mockRouter('/test-path', { existingKey: 'existingValue' });
    const { result } = renderHook(() => useRouteParams());

    const value = result.current.getParam('existingKey');

    expect(value).toBe('existingValue');
  });
});
