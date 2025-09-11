'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logoSVG from '@/../public/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import ModeSwitch from './mode-switch';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

export default function NavBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className='mb-12 flex items-start gap-4'>
      <Link href='/'>
        <Image src={logoSVG} alt='Harrison Jack Logo' className='mr-4 w-40 dark:invert' />
      </Link>
      <div
        className={`${isMobileOpen ? 'visible' : 'invisible'} fixed inset-0 z-10 flex size-full flex-col items-center justify-center gap-4 bg-zinc-200 md:visible md:relative md:size-auto md:flex-row md:bg-transparent dark:bg-zinc-800 md:dark:bg-transparent`}
      >
        <Link
          href='/about'
          onClick={() => setIsMobileOpen(false)}
          className={`border-zinc-800 pb-2 text-2xl font-light md:text-base dark:border-zinc-100 [&.active]:border-b-2 ${pathname === '/about' ? 'active' : ''}`}
        >
          About
        </Link>
        <Link
          href='/folios'
          onClick={() => setIsMobileOpen(false)}
          className={`border-zinc-800 pb-2 text-2xl font-light md:text-base dark:border-zinc-100 [&.active]:border-b-2 ${pathname.includes('/folios') ? 'active' : ''}`}
        >
          Folios
        </Link>
        <Link
          href='/contact'
          onClick={() => setIsMobileOpen(false)}
          className={`border-zinc-800 pb-2 text-2xl font-light md:text-base dark:border-zinc-100 [&.active]:border-b-2 ${pathname === '/contact' ? 'active' : ''}`}
        >
          Contact
        </Link>
        <button
          onClick={() => setIsMobileOpen(false)}
          className='absolute top-10 right-10 md:invisible'
        >
          <IoMdClose className='size-12' />
        </button>
      </div>
      <div className='ml-auto flex'>
        <ModeSwitch />
        <button onClick={() => setIsMobileOpen(true)} className='ml-4 size-6 md:hidden'>
          <GiHamburgerMenu className='size-full' />
        </button>
      </div>
    </nav>
  );
}
