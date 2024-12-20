import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import '@/styles/globals.css';

import FloatingButton from '@/components/FloatingButton';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

import {
  gothicA1,
  nanumGothic,
  notosans,
  poppins,
  roboto,
} from '@/styles/fonts';

dayjs.extend(utc);

// eslint-disable-next-line react-refresh/only-export-components
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
        className={`min-h-screen bg-background text-foreground ${notosans.className} ${poppins.variable} ${roboto.variable} ${nanumGothic.variable} ${gothicA1.variable} antialiased`}>
        <ThemeProvider attribute="class">
          <Header />
          <main className="min-h-screen px-6 pt-24 overflow-x-hidden pb-14 md:px-10 lg:pt-28 lg:py-20 ">
            {children}
          </main>
          <FloatingButton />
          <Sidebar />
        </ThemeProvider>
      </body>
    </html>
  );
}
