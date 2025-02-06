/* eslint-disable react-refresh/only-export-components */
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import '@/styles/globals.css';
import { gothicA1, poppins } from '@/styles/fonts';

import { FloatingButton } from '@/components/floating-button';
import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { classNames } from '@/utils';

dayjs.extend(utc);

export const metadata: Metadata = {
  title: 'My Log',
  description: "Hello, This is Nuuuri's Blog!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <link href="/icon.png" rel="icon" />
      <body
        className={classNames(
          'min-h-screen bg-background text-foreground antialiased',
          gothicA1.className,
          poppins.variable
        )}>
        <ThemeProvider attribute="class">
          <Header />
          <main
            className={classNames(
              'min-h-screen px-6 pt-24 overflow-x-hidden pb-14',
              'md:px-10 lg:pt-28 lg:py-20'
            )}>
            {children}
          </main>
          <FloatingButton />
          <Sidebar />
        </ThemeProvider>
      </body>
    </html>
  );
}
