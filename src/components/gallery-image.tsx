'use client';

import Image, { type StaticImageData } from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

type GalleryImageProps = {
  src: StaticImageData;
  alt: string;
  images?: StaticImageData[];
};

export default function GalleryImage({ src, alt, images }: GalleryImageProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className='group relative'>
          <div className='absolute top-0 left-0 z-10 flex size-full cursor-pointer items-center justify-center bg-zinc-950/75 opacity-0 backdrop-blur-xs backdrop-saturate-25 transition-opacity duration-300 ease-out group-hover:opacity-100'>
            <p className='border-b-2 border-zinc-50 py-4 font-light tracking-wide'>
              View fullscreen
            </p>
          </div>
          <Image
            src={src}
            alt={alt}
            quality={80}
            loading='lazy'
            style={{
              opacity: 0,
              transition: 'all 1s',
              transform: 'translateY(15px)'
            }}
            onLoad={e => {
              if (e.target instanceof HTMLElement) {
                e.target.style.opacity = '1';
                e.target.style.transform = 'translateY(0px)';
              }
            }}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
          />
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='data-[state=open]:animate-overlayShow fixed inset-0 z-20 bg-zinc-950' />
        <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 z-30 flex size-full -translate-x-1/2 -translate-y-1/2 flex-col justify-center p-[25px] shadow-[var(--shadow-6)] focus:outline-none'>
          <Dialog.Title className='m-0 font-medium'>Swipe or use arrows to navigate</Dialog.Title>
          <Swiper
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            navigation={true}
            modules={[Navigation]}
            spaceBetween={30}
            className='size-full'
          >
            {images?.map((image, index) => (
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
          <Dialog.Close asChild>
            <button
              className='text-violet11 bg-gray3 hover:bg-violet4 focus:shadow-violet7 absolute top-2.5 right-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none'
              aria-label='Close'
            >
              <IoMdClose />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
