import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import { NavBar } from '@/components/navigation/NavBar';
import { TRPCReactProvider } from '@/trpc/react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata = {
  title: 'ShadCN Component Demo',
  description: 'Basic Demo of ShadCN Components',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} dark`}>
        <TRPCReactProvider>
          <div className="p-4">
            <NavBar />
            {children}
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
