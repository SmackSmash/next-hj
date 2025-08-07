'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import logoSVG from '@/../public/logo.svg';

export default function NavBar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className='flex gap-4'>
      <Image src={logoSVG} alt='Harrison Jack Logo' className='w-40 dark:invert' />
      <Link href='/'>Home</Link>
      <Link
        href='/about'
        className={`[&.active]:border-b-1 ${pathname === '/about' ? 'active' : ''}`}
      >
        About
      </Link>
      <Link
        href='/folios'
        className={`[&.active]:border-b-1 ${pathname === '/folios' ? 'active' : ''}`}
      >
        Folios
      </Link>
      <Link
        href='/contact'
        className={`[&.active]:border-b-1 ${pathname === '/contact' ? 'active' : ''}`}
      >
        Contact
      </Link>
    </nav>
  );
}
