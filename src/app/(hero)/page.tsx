import Image from 'next/image';
import Link from 'next/link';
import { SiFacebook } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import logoSVG from '@/../public/logo.svg';
import HomeSlider from '@/components/home-slider';

export default function Home() {
  return (
    <div className='absolute flex h-screen w-screen items-center justify-center'>
      <HomeSlider />
      <div className='absolute inset-0 z-10 bg-linear-to-r from-black/50 to-transparent p-20'>
        <div className='flex h-full flex-col justify-between'>
          <Image src={logoSVG} alt='Harrison Jack Photography Logo' className='w-40 invert' />
          <div className='max-w-fit'>
            <div className='mb-4 border-b-1 border-zinc-50 pb-4 text-5xl leading-13 font-semibold text-zinc-50 text-shadow-sm'>
              How we
              <br />
              see things
            </div>
            <div className='flex justify-between'>
              <Link
                href='/about'
                className='py-1 text-center text-lg font-light tracking-wider text-zinc-50 opacity-90 text-shadow-sm hover:opacity-100'
              >
                About
              </Link>
              <Link
                href='/folios'
                className='py-1 text-center text-lg font-light tracking-wider text-zinc-50 opacity-90 text-shadow-sm hover:opacity-100'
              >
                Folios
              </Link>
              <Link
                href='contact'
                className='py-1 text-center text-lg font-light tracking-wider text-zinc-50 opacity-90 text-shadow-sm hover:opacity-100'
              >
                Contact
              </Link>
            </div>
          </div>
          <div className='flex gap-4'>
            <Link
              href='https://www.facebook.com/harrisonjack.05'
              target='_blank'
              className='opacity-90 hover:opacity-100'
            >
              <SiFacebook className='size-5 fill-white opacity-90 hover:opacity-100' />
            </Link>
            <Link
              href='https://www.instagram.com/harrisonjackphotography/'
              target='_blank'
              className='opacity-90 hover:opacity-100'
            >
              <SiInstagram className='size-5 fill-white opacity-90 hover:opacity-100' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
