import Image from 'next/image';
import Link from 'next/link';
import { FiFacebook } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import logoSVG from '@/../public/logo.svg';
import HomeSlider from '@/components/home-slider';

export default function Home() {
  return (
    <div className='absolute flex h-screen w-screen items-center justify-center'>
      <HomeSlider />
      <div className='absolute inset-0 z-10 flex flex-col justify-between bg-linear-to-r from-black/50 to-transparent p-20'>
        <Image src={logoSVG} alt='Harrison Jack Photography Logo' className='w-40 invert' />
        <div>
          <div className='mb-8 text-8xl font-light text-white'>
            SOME
            <br />
            MARKETING
            <br />
            BOLLOCKS
          </div>
          <div className='flex gap-4'>
            <Link href='' className='bg-white px-6 py-1 text-black uppercase'>
              About
            </Link>
            <Link href='' className='bg-white px-6 py-1 text-black uppercase'>
              Folios
            </Link>
            <Link href='' className='bg-white px-6 py-1 text-black uppercase'>
              Contact
            </Link>
          </div>
        </div>
        <div className='flex gap-4'>
          <FiFacebook className='size-8' />
          <FiInstagram className='size-8' />
        </div>
      </div>
    </div>
  );
}
