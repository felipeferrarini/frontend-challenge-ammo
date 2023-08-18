import { Providers } from '@/config/providers';
import { inter } from '@/config/theme/fonts';
import '@/config/theme/globals.css';

import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'Ammo Ecommerce',
  description: 'Ammo Ecommerce'
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="pt" className="light">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
