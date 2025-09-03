import aboutImage from '@/../public/about.jpg';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <>
      <div className='flex items-start justify-center'>
        <div className='mr-20 pt-12'>
          <div className='mb-4 max-w-fit border-b-1 border-zinc-900 pb-4 text-5xl leading-17 font-semibold text-zinc-900 dark:border-zinc-50 dark:text-zinc-50'>
            Who
            <br />
            we are
          </div>
        </div>
        <div className='sticky max-w-80'>
          <Image src={aboutImage} alt='A photo of Chris Harrison and Iain Jack' className='mb-6' />
          <p className='my-4 text-lg/8 tracking-wide'>
            A collaboration of more than 30 years, Christine (Harrison) and Iain (Jack) work locally
            and internationally from both the UK and the French Alps.
          </p>
          <p className='my-4 text-lg/8 tracking-wide'>
            Originating as a partnership during the heyday of the Manchester advertising scene
            Christine and Iain went on to build a loyal portfolio of direct clients in the
            commercial and editorial arena. Iain now heads up the UK side of the business, however,
            Christine, although now living for most of the year in the French alps, is a frequent
            flyer with Easyjet.
          </p>
        </div>
      </div>
      <ul className='container mx-auto mt-20 text-center text-2xl text-zinc-400 italic dark:text-zinc-600'>
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
