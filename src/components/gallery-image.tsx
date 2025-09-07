import Image, { type StaticImageData } from 'next/image';

export default function GalleryImage({ src, alt }: { src: StaticImageData; alt: string }) {
  return (
    <div className='flex flex-col items-center gap-5'>
      <Image
        src={src}
        alt={alt}
        loading='lazy'
        className='max-h-screen w-fit'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
      />
    </div>
  );
}
