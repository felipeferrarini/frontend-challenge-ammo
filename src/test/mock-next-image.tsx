import { forwardRef, type ComponentProps } from 'react';

jest.mock('next/image', () =>
  forwardRef<HTMLImageElement, ComponentProps<'img'>>(({ src, alt }, ref) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} ref={ref} />
  ))
);
