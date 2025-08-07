'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SiFacebook } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import logoSVG from '@/../public/logo.svg';
import ModeSwitch from './mode-switch';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className='mb-12 flex items-start gap-4'>
      <Link href='/'>
        <Image src={logoSVG} alt='Harrison Jack Logo' className='mr-4 w-40 dark:invert' />
      </Link>
      <Link
        href='/about'
        className={`border-zinc-800 pb-2 dark:border-zinc-100 [&.active]:border-b-2 ${pathname === '/about' ? 'active' : ''}`}
      >
        About
      </Link>
      <Link
        href='/folios'
        className={`border-zinc-800 pb-2 dark:border-zinc-100 [&.active]:border-b-2 ${pathname === '/folios' ? 'active' : ''}`}
      >
        Folios
      </Link>
      <Link
        href='/contact'
        className={`border-zinc-800 pb-2 dark:border-zinc-100 [&.active]:border-b-2 ${pathname === '/contact' ? 'active' : ''}`}
      >
        Contact
      </Link>
      <ModeSwitch />
    </nav>
  );
}
