import Link from 'next/link';
import { type Metadata } from 'next';
import GalleryImage from '@/components/gallery-image';
import Image01 from '@/../public/food/01.webp';
import Image02 from '@/../public/food/02.webp';
import Image03 from '@/../public/food/03.webp';
import Image04 from '@/../public/food/04.webp';
import Image05 from '@/../public/food/05.webp';
import Image06 from '@/../public/food/06.webp';
import Image07 from '@/../public/food/07.webp';
import Image08 from '@/../public/food/08.webp';
import Image09 from '@/../public/food/09.webp';
import Image10 from '@/../public/food/10.webp';
import Image11 from '@/../public/food/11.webp';
import Image12 from '@/../public/food/12.webp';
import Image13 from '@/../public/food/13.webp';
import Image14 from '@/../public/food/14.webp';
import Image15 from '@/../public/food/15.webp';
import Image16 from '@/../public/food/16.webp';
import Image17 from '@/../public/food/17.webp';
import Image18 from '@/../public/food/18.webp';
import Image19 from '@/../public/food/19.webp';
import Image20 from '@/../public/food/20.webp';
import Image21 from '@/../public/food/21.webp';
import Image22 from '@/../public/food/22.webp';
import Image23 from '@/../public/food/23.webp';
import Image24 from '@/../public/food/24.webp';
import Image25 from '@/../public/food/25.webp';
import Image26 from '@/../public/food/26.webp';
import Image27 from '@/../public/food/27.webp';
import Image28 from '@/../public/food/28.webp';
import Image29 from '@/../public/food/29.webp';
import Image30 from '@/../public/food/30.webp';
import Image31 from '@/../public/food/31.webp';
import Image32 from '@/../public/food/32.webp';
import Image33 from '@/../public/food/33.webp';
import Image34 from '@/../public/food/34.webp';
import Image35 from '@/../public/food/35.webp';
import Image36 from '@/../public/food/36.webp';
import Image37 from '@/../public/food/37.webp';
import Image38 from '@/../public/food/38.webp';
import Image39 from '@/../public/food/39.webp';
import Image40 from '@/../public/food/40.webp';
import Image41 from '@/../public/food/41.webp';
import Image42 from '@/../public/food/42.webp';
import Image43 from '@/../public/food/43.webp';
import Image44 from '@/../public/food/44.webp';
import Image45 from '@/../public/food/45.webp';
import Image46 from '@/../public/food/46.webp';
import Image47 from '@/../public/food/47.webp';
import Image48 from '@/../public/food/48.webp';
import Image49 from '@/../public/food/49.webp';
import Image50 from '@/../public/food/50.webp';
import Image51 from '@/../public/food/51.webp';
import Image52 from '@/../public/food/52.webp';
import Image53 from '@/../public/food/53.webp';
import Image54 from '@/../public/food/54.webp';
import Image55 from '@/../public/food/55.webp';

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
  Image16,
  Image17,
  Image18,
  Image19,
  Image20,
  Image21,
  Image22,
  Image23,
  Image24,
  Image25,
  Image26,
  Image27,
  Image28,
  Image29,
  Image30,
  Image31,
  Image32,
  Image33,
  Image34,
  Image35,
  Image36,
  Image37,
  Image38,
  Image39,
  Image40,
  Image41,
  Image42,
  Image43,
  Image44,
  Image45,
  Image46,
  Image47,
  Image48,
  Image49,
  Image50,
  Image51,
  Image52,
  Image53,
  Image54,
  Image55
];

export const metadata: Metadata = {
  title: 'Folios / Food | Harrison Jack Photography'
};

export default function TravelPage() {
  return (
    <div className='mx-auto flex max-w-4xl flex-col gap-5 md:flex-row md:items-start'>
      <div className='flex flex-row items-center justify-between md:sticky md:top-20 md:order-1 md:max-w-fit md:flex-col md:items-start'>
        <h1 className='mb-4 border-b-1 border-zinc-900 pb-4 text-4xl font-semibold text-zinc-900 dark:border-zinc-50 dark:text-zinc-50'>
          Food
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
        <GalleryImage src={Image09} alt='Image 9' images={images} />
        <GalleryImage src={Image10} alt='Image 10' images={images} />
        <GalleryImage src={Image11} alt='Image 11' images={images} />
        <GalleryImage src={Image12} alt='Image 12' images={images} />
        <GalleryImage src={Image13} alt='Image 13' images={images} />
        <GalleryImage src={Image14} alt='Image 14' images={images} />
        <GalleryImage src={Image15} alt='Image 15' images={images} />
        <GalleryImage src={Image16} alt='Image 16' images={images} />
        <GalleryImage src={Image17} alt='Image 17' images={images} />
        <GalleryImage src={Image18} alt='Image 18' images={images} />
        <GalleryImage src={Image19} alt='Image 19' images={images} />
        <GalleryImage src={Image20} alt='Image 20' images={images} />
        <GalleryImage src={Image21} alt='Image 21' images={images} />
        <GalleryImage src={Image22} alt='Image 22' images={images} />
        <GalleryImage src={Image23} alt='Image 23' images={images} />
        <GalleryImage src={Image24} alt='Image 24' images={images} />
        <GalleryImage src={Image25} alt='Image 25' images={images} />
        <GalleryImage src={Image26} alt='Image 26' images={images} />
        <GalleryImage src={Image27} alt='Image 27' images={images} />
      </div>
      <div className='flex flex-col items-center gap-5'>
        <GalleryImage src={Image28} alt='Image 28' images={images} />
        <GalleryImage src={Image29} alt='Image 29' images={images} />
        <GalleryImage src={Image30} alt='Image 30' images={images} />
        <GalleryImage src={Image31} alt='Image 31' images={images} />
        <GalleryImage src={Image32} alt='Image 32' images={images} />
        <GalleryImage src={Image33} alt='Image 33' images={images} />
        <GalleryImage src={Image34} alt='Image 34' images={images} />
        <GalleryImage src={Image35} alt='Image 35' images={images} />
        <GalleryImage src={Image36} alt='Image 36' images={images} />
        <GalleryImage src={Image37} alt='Image 37' images={images} />
        <GalleryImage src={Image38} alt='Image 38' images={images} />
        <GalleryImage src={Image39} alt='Image 39' images={images} />
        <GalleryImage src={Image40} alt='Image 40' images={images} />
        <GalleryImage src={Image41} alt='Image 41' images={images} />
        <GalleryImage src={Image42} alt='Image 42' images={images} />
        <GalleryImage src={Image43} alt='Image 43' images={images} />
        <GalleryImage src={Image44} alt='Image 44' images={images} />
        <GalleryImage src={Image45} alt='Image 45' images={images} />
        <GalleryImage src={Image46} alt='Image 46' images={images} />
        <GalleryImage src={Image47} alt='Image 47' images={images} />
        <GalleryImage src={Image48} alt='Image 48' images={images} />
        <GalleryImage src={Image49} alt='Image 49' images={images} />
        <GalleryImage src={Image50} alt='Image 50' images={images} />
        <GalleryImage src={Image51} alt='Image 51' images={images} />
        <GalleryImage src={Image52} alt='Image 52' images={images} />
        <GalleryImage src={Image53} alt='Image 53' images={images} />
        <GalleryImage src={Image54} alt='Image 54' images={images} />
        <GalleryImage src={Image55} alt='Image 55' images={images} />
      </div>
    </div>
  );
}
