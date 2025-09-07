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
import Image14 from '@/../public/travel/14.webp';
import Image15 from '@/../public/travel/15.webp';
import Image16 from '@/../public/travel/16.webp';
import Image17 from '@/../public/travel/17.webp';
import Image18 from '@/../public/travel/18.webp';
import Image19 from '@/../public/travel/19.webp';
import Image20 from '@/../public/travel/20.webp';
import Image21 from '@/../public/travel/21.webp';
import Image22 from '@/../public/travel/22.webp';
import Image23 from '@/../public/travel/23.webp';
import Image24 from '@/../public/travel/24.webp';
import Image25 from '@/../public/travel/25.webp';
import Image26 from '@/../public/travel/26.webp';
import Image27 from '@/../public/travel/27.webp';
import Image28 from '@/../public/travel/28.webp';
import Image29 from '@/../public/travel/29.webp';
import Image30 from '@/../public/travel/30.webp';
import Image31 from '@/../public/travel/31.webp';
import Image32 from '@/../public/travel/32.webp';
import Image33 from '@/../public/travel/33.webp';
import Image34 from '@/../public/travel/34.webp';
import Image35 from '@/../public/travel/35.webp';
import Image36 from '@/../public/travel/36.webp';
import Image37 from '@/../public/travel/37.webp';
import Image38 from '@/../public/travel/38.webp';
import Image39 from '@/../public/travel/39.webp';
import Image40 from '@/../public/travel/40.webp';
import Image41 from '@/../public/travel/41.webp';
import Image42 from '@/../public/travel/42.webp';
import Image43 from '@/../public/travel/43.webp';
import Image44 from '@/../public/travel/44.webp';
import Image45 from '@/../public/travel/45.webp';
import Image46 from '@/../public/travel/46.webp';
import Image47 from '@/../public/travel/47.webp';
import Image48 from '@/../public/travel/48.webp';

export default function FoliosPage() {
  const images1 = [
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
    Image13
  ];

  const images2 = [
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
    Image26
  ];

  return (
    <div className='flex flex-col gap-10 md:flex-row'>
      <div className='flex w-full flex-col items-center gap-10 md:w-1/2'>
        {images1.map((src, i) => (
          <div key={i} className='relative aspect-[4/3] w-full max-w-2xl'>
            <Image
              src={src}
              alt={`Image ${i + 1}`}
              fill
              className='object-contain'
              sizes='(max-width: 768px) 100vw, 50vw'
              priority={i < 2} // preload first couple for perf
            />
          </div>
        ))}
      </div>

      <div className='flex w-full flex-col items-center gap-10 md:w-1/2'>
        {images2.map((src, i) => (
          <div key={i} className='relative aspect-[4/3] w-full max-w-2xl'>
            <Image
              src={src}
              alt={`Image ${i + 14}`}
              fill
              className='object-contain'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
