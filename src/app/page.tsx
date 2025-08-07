import Image from 'next/image';
import logoSVG from '@/../public/logo.svg';
import HomeSlider from '@/components/home-slider';

export default function Home() {
  return (
    <div className='absolute flex h-screen w-screen items-center justify-center'>
      <HomeSlider />
      <div className='absolute inset-0 z-10 flex flex-col justify-between bg-linear-to-r from-black/50 to-transparent p-20'>
        <Image src={logoSVG} alt='Harrison Jack Photography Logo' className='w-50 invert' />
        <div className='text-6xl font-semibold text-white'>
          SOME
          <br />
          MARKETING
          <br />
          BOLLOCKS
        </div>
        <div>Socials</div>
      </div>
    </div>
  );
}
