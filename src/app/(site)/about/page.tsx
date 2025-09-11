import aboutImage from '@/../public/about.jpg';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <div className='flex flex-grow flex-col justify-center'>
        <div className='mx-auto flex max-w-2xl gap-8'>
          <div className='w-2/3'>
            <h1 className='mb-4 max-w-fit border-b-1 border-zinc-900 pb-4 text-5xl font-semibold dark:border-zinc-50'>
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
          <div className='w-1/3'>
            <Image src={aboutImage} alt='A photo of Chris Harrison and Iain Jack' />
          </div>
        </div>
      </div>
      <ul className='container mx-auto mt-20 text-center text-zinc-400 italic dark:text-zinc-600'>
        <li className='inline-block px-2'>Argos</li>
        <li className='inline-block px-2'>Berghaus </li>
        <li className='inline-block px-2'>Barbour </li>
        <li className='inline-block px-2'>Bave</li>
        <li className='inline-block px-2'>Booths Supermarkets</li>
        <li className='inline-block px-2'>Iceland frozen foods</li>
        <li className='inline-block px-2'>Habitat</li>
        <li className='inline-block px-2'>Regatta</li>
        <li className='inline-block px-2'>Rohan</li>
        <li className='inline-block px-2'>Crag Hoppers</li>
        <li className='inline-block px-2'>BASF</li>
        <li className='inline-block px-2'>Dulux</li>
        <li className='inline-block px-2'>Brittania Cookers</li>
        <li className='inline-block px-2'>Woolmaster Carpets</li>
        <li className='inline-block px-2'>Solvite </li>
        <li className='inline-block px-2'>MUTV</li>
        <li className='inline-block px-2'>Mowbray Hall Cottages</li>
        <li className='inline-block px-2'>Sainsburys</li>
        <li className='inline-block px-2'>The Sainte Foy Chalet Company</li>
        <li className='inline-block px-2'>Union Restaurant </li>
        <li className='inline-block px-2'>Sainte Foy Office du Tourisme</li>
        <li className='inline-block px-2'>Premiere Niege</li>
        <li className='inline-block px-2'>Ski Beat</li>
        <li className='inline-block px-2'>Alpine Culture</li>
        <li className='inline-block px-2'>Hu.ski</li>
        <li className='inline-block px-2'>Savilles </li>
      </ul>
    </>
  );
}
