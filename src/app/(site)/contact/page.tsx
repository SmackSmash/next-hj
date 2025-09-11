import { type Metadata } from 'next';
import ContactForm from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact | Harrison Jack Photography'
};

export default function ContactPage() {
  return (
    <div className='flex flex-grow flex-col justify-center'>
      <div className='mx-auto flex max-w-2xl flex-col gap-8 md:flex-row'>
        <div>
          <h1 className='mb-4 max-w-fit border-b-1 border-zinc-900 pb-4 text-4xl font-semibold dark:border-zinc-50'>
            Get in touch
          </h1>
          <h2 className='font-bold'>Phone</h2>
          <p className='pb-2'>
            <span>Chris:</span>{' '}
            <a href='tel:+33771264365' className='underline'>
              +33 771 264 365
            </a>
            <br />
            <span>Iain:</span>{' '}
            <a href='tel:+447795615945' className='underline'>
              +44 7795 615 945
            </a>
          </p>
          <h2 className='font-bold'>Email</h2>
          <p>
            <a href='chris@harrisonjackphoto.com' className='underline'>
              chris@harrisonjackphoto.com
            </a>
            <br />
            <a href='iain@harrisonjackphoto.com' className='underline'>
              iain@harrisonjackphoto.com
            </a>
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
