import Link from 'next/link';
import { SiFacebook, SiInstagram } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className='mt-auto flex flex-col items-center pt-16 text-center text-sm italic'>
      <div className='mb-4 flex gap-4'>
        <Link
          href='https://www.facebook.com/harrisonjack.05'
          target='_blank'
          className='opacity-90 hover:opacity-100'
        >
          <SiFacebook className='size-5' />
        </Link>
        <Link
          href='https://www.instagram.com/harrisonjackphotography/'
          target='_blank'
          className='opacity-90 hover:opacity-100'
        >
          <SiInstagram className='size-5' />
        </Link>
      </div>
      Copyright © Harrison Jack Photography {new Date().getFullYear()}
    </footer>
  );
}
