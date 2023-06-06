import './globals.css';
import { Inter } from 'next/font/google';
import StyledRegistry from '@/lib/StyledRegistry';
import LNB from '@/components/LNB';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Log',
  description: 'Blog Project with Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex w-screen h-screen`}>
        <StyledRegistry>
          <LNB />
          <div className="absolute inset-0 ml-80">{children}</div>
        </StyledRegistry>
      </body>
    </html>
  );
}
