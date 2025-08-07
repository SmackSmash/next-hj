import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className='p-20 font-sans'>
          <NavBar />
          {children}
        </div>
        <footer className='text-center text-sm italic'>
          Copyright © Harrison Jack Photography {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}
