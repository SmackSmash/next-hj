'use client';

import Image, { type StaticImageData } from 'next/image';

export default function GalleryImage({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      layout='responsive'
      loading='lazy'
      style={{
        width: '100%',
        height: 'auto',
        maxHeight: '100vh',
        opacity: 0,
        transition: 'opacity 1s'
      }}
      onLoad={e => {
        if (e.target instanceof HTMLElement) e.target.style.opacity = '1';
      }}
      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw'
    />
  );
}
