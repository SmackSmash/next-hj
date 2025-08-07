import aboutImage from '@/../public/about.jpg';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className='flex items-start justify-center'>
      <div className='mr-20 mb-4 max-w-fit border-b-1 border-zinc-900 pt-12 pb-4 text-6xl leading-17 font-semibold text-zinc-900 dark:border-zinc-50 dark:text-zinc-50'>
        Who
        <br />
        we are
      </div>
      <div className='max-w-80'>
        <Image src={aboutImage} alt='A photo of Chris Harrison and Iain Jack' className='mb-6' />
        <p className='my-4 text-lg/8 tracking-wide'>
          A collaboration of more than 30 years, Christine (Harrison) and Iain (Jack) work locally
          and internationally from both the UK and the French Alps.
        </p>
        <p className='my-4 text-lg/8 tracking-wide'>
          Originating as a partnership during the heyday of the Manchester advertising scene
          Christine and Iain went on to build a loyal portfolio of direct clients in the commercial
          and editorial arena. Iain now heads up the UK side of the business, however, Christine,
          although now living for most of the year in the French alps, is a frequent flyer with
          Easyjet.
        </p>
      </div>
    </div>
  );
}
