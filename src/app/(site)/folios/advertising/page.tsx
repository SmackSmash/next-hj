import Link from 'next/link';
import { type Metadata } from 'next';
import GalleryImage from '@/components/gallery-image';
import Image01 from '@/../public/advertising/01.webp';
import Image02 from '@/../public/advertising/02.webp';
import Image03 from '@/../public/advertising/03.webp';
import Image04 from '@/../public/advertising/04.webp';
import Image05 from '@/../public/advertising/05.webp';
import Image06 from '@/../public/advertising/06.webp';
import Image07 from '@/../public/advertising/07.webp';
import Image08 from '@/../public/advertising/08.webp';
import Image09 from '@/../public/advertising/09.webp';
import Image10 from '@/../public/advertising/10.webp';
import Image11 from '@/../public/advertising/11.webp';
import Image12 from '@/../public/advertising/12.webp';
import Image13 from '@/../public/advertising/13.webp';
import Image14 from '@/../public/advertising/14.webp';
import Image15 from '@/../public/advertising/15.webp';
import Image16 from '@/../public/advertising/16.webp';

const images = [
  Image01,
  Image02,
  Image03,
  Image04,
  Image05,
  Image06,
  Image07,
  Image08,
  Image09,
  Image10,
  Image11,
  Image12,
  Image13,
  Image14,
  Image15,
  Image16
];

export const metadata: Metadata = {
  title: 'Folios / Advertising | Harrison Jack Photography'
};

export default function TravelPage() {
  return (
    <div className='mx-auto flex max-w-4xl flex-col gap-5 md:flex-row md:items-start'>
      <div className='flex flex-row items-center justify-between md:sticky md:top-20 md:order-1 md:max-w-fit md:flex-col md:items-start'>
        <h1 className='mb-4 border-b-1 border-zinc-900 pb-4 text-4xl font-semibold text-zinc-900 dark:border-zinc-50 dark:text-zinc-50'>
          Advertising
        </h1>
        <Link href='/folios'>← Go back</Link>
      </div>
      <div className='flex flex-col items-center gap-5'>
        <GalleryImage src={Image01} alt='Image 1' images={images} />
        <GalleryImage src={Image02} alt='Image 2' images={images} />
        <GalleryImage src={Image03} alt='Image 3' images={images} />
        <GalleryImage src={Image04} alt='Image 4' images={images} />
        <GalleryImage src={Image05} alt='Image 5' images={images} />
        <GalleryImage src={Image06} alt='Image 6' images={images} />
        <GalleryImage src={Image07} alt='Image 7' images={images} />
        <GalleryImage src={Image08} alt='Image 8' images={images} />
      </div>
      <div className='flex flex-col items-center gap-5'>
        <GalleryImage src={Image09} alt='Image 9' images={images} />
        <GalleryImage src={Image10} alt='Image 10' images={images} />
        <GalleryImage src={Image11} alt='Image 11' images={images} />
        <GalleryImage src={Image12} alt='Image 12' images={images} />
        <GalleryImage src={Image13} alt='Image 13' images={images} />
        <GalleryImage src={Image14} alt='Image 14' images={images} />
        <GalleryImage src={Image15} alt='Image 15' images={images} />
        <GalleryImage src={Image16} alt='Image 16' images={images} />
      </div>
    </div>
  );
}
