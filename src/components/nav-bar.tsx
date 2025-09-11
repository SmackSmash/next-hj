'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logoSVG from '@/../public/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import ModeSwitch from './mode-switch';
import { useState } from 'react';

export default function NavBar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className='mb-12 flex items-start gap-4'>
      <Link href='/'>
        <Image src={logoSVG} alt='Harrison Jack Logo' className='mr-4 w-40 dark:invert' />
      </Link>
      <div
        className={`${isMobileOpen ? 'visible' : 'invisible'} fixed inset-0 z-10 flex size-full flex-col items-center justify-center gap-4 bg-zinc-200 md:visible md:relative md:flex-row`}
      >
        <Link
          href='/about'
          onClick={() => setIsMobileOpen(false)}
          className={`border-zinc-800 pb-2 dark:border-zinc-100 [&.active]:border-b-2 ${pathname === '/about' ? 'active' : ''}`}
        >
          About
        </Link>
        <Link
          href='/folios'
          onClick={() => setIsMobileOpen(false)}
          className={`border-zinc-800 pb-2 dark:border-zinc-100 [&.active]:border-b-2 ${pathname.includes('/folios') ? 'active' : ''}`}
        >
          Folios
        </Link>
        <Link
          href='/contact'
          onClick={() => setIsMobileOpen(false)}
          className={`border-zinc-800 pb-2 dark:border-zinc-100 [&.active]:border-b-2 ${pathname === '/contact' ? 'active' : ''}`}
        >
          Contact
        </Link>
      </div>
      <ModeSwitch />
      <button onClick={() => setIsMobileOpen(!isMobileOpen)} className='ml-2 size-6 md:hidden'>
        <GiHamburgerMenu className='size-full' />
      </button>
    </nav>
  );
}
