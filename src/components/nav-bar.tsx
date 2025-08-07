'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SiFacebook } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import logoSVG from '@/../public/logo.svg';

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className='flex items-start gap-4'>
      <Link href='/'>
        <Image src={logoSVG} alt='Harrison Jack Logo' className='mr-4 w-40 dark:invert' />
      </Link>
      <Link
        href='/about'
        className={`pb-2 [&.active]:border-b-1 ${pathname === '/about' ? 'active' : ''}`}
      >
        About
      </Link>
      <Link
        href='/folios'
        className={`pb-2 [&.active]:border-b-1 ${pathname === '/folios' ? 'active' : ''}`}
      >
        Folios
      </Link>
      <Link
        href='/contact'
        className={`pb-2 [&.active]:border-b-1 ${pathname === '/contact' ? 'active' : ''}`}
      >
        Contact
      </Link>
      <Link href='' className='ml-auto opacity-90 hover:opacity-100'>
        <SiFacebook className='size-5' />
      </Link>
      <Link href='' className='opacity-90 hover:opacity-100'>
        <SiInstagram className='size-5' />
      </Link>
    </nav>
  );
}
