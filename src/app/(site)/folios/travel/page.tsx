import Image from 'next/image';
import Image01 from '@/../public/travel/01.webp';
import Image02 from '@/../public/travel/02.webp';
import Image03 from '@/../public/travel/03.webp';
import Image04 from '@/../public/travel/04.webp';
import Image05 from '@/../public/travel/05.webp';
import Image06 from '@/../public/travel/06.webp';
import Image07 from '@/../public/travel/07.webp';
import Image08 from '@/../public/travel/08.webp';
import Image09 from '@/../public/travel/09.webp';
import Image10 from '@/../public/travel/10.webp';
import Image11 from '@/../public/travel/11.webp';
import Image12 from '@/../public/travel/12.webp';
import Image13 from '@/../public/travel/13.webp';

export default function FoliosPage() {
  return (
    <div className='flex flex-col items-center gap-3'>
      <Image src={Image01} alt='Image 1' className='max-h-screen w-fit' />
      <Image src={Image02} alt='Image 2' className='max-h-screen w-fit' />
      <Image src={Image03} alt='Image 3' className='max-h-screen w-fit' />
      <Image src={Image04} alt='Image 4' className='max-h-screen w-fit' />
      <Image src={Image05} alt='Image 5' className='max-h-screen w-fit' />
      <Image src={Image06} alt='Image 6' className='max-h-screen w-fit' />
      <Image src={Image07} alt='Image 7' className='max-h-screen w-fit' />
      <Image src={Image08} alt='Image 8' className='max-h-screen w-fit' />
      <Image src={Image09} alt='Image 9' className='max-h-screen w-fit' />
      <Image src={Image10} alt='Image 10' className='max-h-screen w-fit' />
      <Image src={Image11} alt='Image 11' className='max-h-screen w-fit' />
      <Image src={Image12} alt='Image 12' className='max-h-screen w-fit' />
      <Image src={Image13} alt='Image 13' className='max-h-screen w-fit' />
    </div>
  );
}
