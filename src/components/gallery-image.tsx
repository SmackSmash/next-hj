'use client';

import Image, { type StaticImageData } from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';
import { IoMdClose } from 'react-icons/io';

export default function GalleryImage({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
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
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className='data-[state=open]:animate-overlayShow fixed inset-0 bg-black' />
        <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-1/2 left-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-zinc-500 p-[25px] shadow-[var(--shadow-6)] focus:outline-none'>
          <Dialog.Title className='m-0 font-medium'>Swipe to navigate</Dialog.Title>
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
