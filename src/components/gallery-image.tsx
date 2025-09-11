'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io';
import { IoExpandSharp } from 'react-icons/io5';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import './gallery-image.css';
import 'swiper/css/bundle';

type GalleryImageProps = {
  src: StaticImageData;
  alt: string;
  images: StaticImageData[];
};

export default function GalleryImage({ src, alt, images }: GalleryImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div
          className={`group relative overflow-hidden rounded transition-all duration-1000 ${isLoaded ? 'translate-y-[0px] opacity-100' : 'translate-y-[15px] opacity-0'}`}
        >
          <div className='absolute top-0 left-0 z-10 flex size-full cursor-pointer items-center justify-center bg-zinc-950/25 opacity-0 backdrop-blur-xs backdrop-saturate-25 transition-opacity duration-300 ease-out group-hover:opacity-100'>
            <p className='flex translate-y-[15px] items-center gap-2 font-light tracking-wide text-zinc-50 transition-all group-hover:translate-y-[0px]'>
              <IoExpandSharp className='inline-block' />
              Expand
            </p>
          </div>
          <Image
            src={src}
            alt={alt}
            quality={80}
            loading='lazy'
            onLoad={() => setIsLoaded(true)}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
          />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='data-[state=open]:animate-overlayShow fixed inset-0 z-20 bg-zinc-50 dark:bg-zinc-950' />
        <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 z-30 flex size-full -translate-x-1/2 -translate-y-1/2 flex-col justify-center p-[25px] shadow-[var(--shadow-6)] focus:outline-none'>
          <div className='px- flex w-full justify-between bg-zinc-50 pb-4 dark:bg-zinc-950'>
            <Dialog.Title>
              {images.length > 1 && 'Swipe or use arrows to navigate between slides'}
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className='cursor-pointer' aria-label='Close'>
                ← Go back
              </button>
            </Dialog.Close>
          </div>
          <Swiper
            initialSlide={images.indexOf(src)}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            navigation={true}
            modules={[Navigation]}
            spaceBetween={30}
            className='size-full'
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className='flex size-full items-center justify-center'>
                <Image
                  src={image}
                  alt={`Gallery Image ${index}`}
                  quality={80}
                  loading='lazy'
                  fill
                  objectFit='contain'
                  style={{
                    opacity: 0,
                    transition: 'opacity 1s'
                  }}
                  onLoad={e => {
                    if (e.target instanceof HTMLElement) {
                      e.target.style.opacity = '1';
                    }
                  }}
                  className='h-max-full'
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
