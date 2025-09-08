'use client';

import Image, { type StaticImageData } from 'next/image';

export default function GalleryImage({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
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
  );
}
