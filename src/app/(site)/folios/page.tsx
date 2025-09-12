import Link from 'next/link';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Folios | Harrison Jack Photography'
};

export default function FoliosPage() {
  return (
    <div className='container mx-auto flex max-w-2xl flex-grow flex-col items-center justify-center gap-5 md:flex-row'>
      <div className='flex flex-col items-center justify-center gap-5 md:flex-grow'>
        <Link href='/folios/interiors' className='text-2xl font-light'>
          Interiors
        </Link>
        <Link href='/folios/food' className='text-2xl font-light'>
          Food
        </Link>
        <Link href='/folios/travel' className='text-2xl font-light'>
          Travel
        </Link>
      </div>
      <div className='flex flex-col items-center justify-center gap-5 md:flex-grow'>
        <Link href='/folios/lifestyle' className='text-2xl font-light'>
          Lifestyle
        </Link>
        <Link href='/folios/advertising' className='text-2xl font-light'>
          Advertising
        </Link>
        <Link href='/folios/social' className='text-2xl font-light'>
          Social
        </Link>
      </div>
    </div>
  );
}
