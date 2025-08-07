import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Providers } from '@/components/providers';
import NavBar from '@/components/nav-bar';
import '@/app/globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Harrison Jack Photography',
  description:
    'A collaboration of more than 30 years, Christine (Harrison) and Iain (Jack) work locally and internationally from both the UK and the French Alps.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <div className='bg-zinc-100 p-20 font-sans dark:bg-zinc-900'>
            <NavBar />
            {children}
            <footer className='text-center text-sm italic'>
              Copyright © Harrison Jack Photography {new Date().getFullYear()}
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
