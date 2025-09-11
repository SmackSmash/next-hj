import aboutImage from '@/../public/about.jpg';
import Image from 'next/image';
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Harrison Jack Photography'
};

export default function AboutPage() {
  return (
    <>
      <div className='flex flex-grow flex-col justify-center'>
        <div className='mx-auto flex max-w-2xl flex-col gap-8 md:flex-row'>
          <div className='md:w-2/3'>
            <h1 className='mb-4 max-w-fit border-b-1 border-zinc-900 pb-4 text-4xl font-semibold dark:border-zinc-50'>
              Who we are
            </h1>
            <p className='mb-4'>
              A collaboration of more than 30 years, Christine (Harrison) and Iain (Jack) work
              locally and internationally from both the UK and the French Alps.
            </p>
            <p>
              Originating as a partnership during the heyday of the Manchester advertising scene
              Christine and Iain went on to build a loyal portfolio of direct clients in the
              commercial and editorial arena. Iain now heads up the UK side of the business,
              however, Christine, although now living for most of the year in the French alps, is a
              frequent flyer with Easyjet.
            </p>
          </div>
          <div className='md:w-1/3'>
            <Image src={aboutImage} alt='A photo of Chris Harrison and Iain Jack' />
          </div>
        </div>
      </div>
      <h3 className='mx-auto mt-20 mb-2 text-xl font-light'>Our clients</h3>
      <ul className='container mx-auto flex max-w-2xl flex-wrap text-zinc-400 italic dark:text-zinc-600'>
        <div className='basis-full sm:basis-1/2 md:basis-1/3'>
          <li>Argos</li>
          <li>Berghaus </li>
          <li>Barbour</li>
          <li>Bave</li>
          <li>Booths Supermarkets</li>
          <li>Iceland frozen foods</li>
          <li>Habitat</li>
          <li>Regatta</li>
          <li>Rohan</li>
        </div>
        <div className='basis-full sm:basis-1/2 md:basis-1/3'>
          <li>Crag Hoppers</li>
          <li>BASF</li>
          <li>Dulux</li>
          <li>Brittania Cookers</li>
          <li>Woolmaster Carpets</li>
          <li>Solvite </li>
          <li>MUTV</li>
          <li>Mowbray Hall Cottages</li>
          <li>Sainsburys</li>
        </div>
        <div className='basis-full sm:basis-1/2 md:basis-1/3'>
          <li>The Sainte Foy Chalet Company</li>
          <li>Union Restaurant </li>
          <li>Sainte Foy Office du Tourisme</li>
          <li>Premiere Niege</li>
          <li>Ski Beat</li>
          <li>Alpine Culture</li>
          <li>Hu.ski</li>
          <li>Savilles </li>
        </div>
      </ul>
    </>
  );
}
