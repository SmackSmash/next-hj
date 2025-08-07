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
            <div className='mb-8 text-7xl leading-20 font-semibold text-white'>
              How We
              <br />
              See Things
            </div>
            <div className='flex gap-4'>
              <Link
                href=''
                className='grow bg-white py-1 text-center tracking-wider text-black uppercase opacity-90 hover:opacity-100'
              >
                About
              </Link>
              <Link
                href=''
                className='grow bg-white py-1 text-center tracking-wider text-black uppercase opacity-90 hover:opacity-100'
              >
                Folios
              </Link>
              <Link
                href=''
                className='grow bg-white py-1 text-center tracking-wider text-black uppercase opacity-90 hover:opacity-100'
              >
                Contact
              </Link>
            </div>
          </div>
          <div className='flex gap-4'>
            <SiFacebook className='size-7 opacity-90 hover:opacity-100' />
            <SiInstagram className='size-7 opacity-90 hover:opacity-100' />
          </div>
        </div>
      </div>
    </div>
  );
}
