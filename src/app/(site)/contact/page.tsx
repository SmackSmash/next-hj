import { type Metadata } from 'next';
import ContactForm from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact | Harrison Jack Photography'
};

export default function ContactPage() {
  return (
    <div className='flex flex-grow flex-col justify-center'>
      <div className='mx-auto flex max-w-2xl flex-col gap-8 md:flex-row'>
        <div className='flex flex-row items-center justify-between md:order-1 md:max-w-fit md:flex-col md:items-start'>
          <h1 className='mb-4 border-b-1 border-zinc-900 pb-4 text-4xl font-semibold text-zinc-900 dark:border-zinc-50 dark:text-zinc-50'>
            Contact
          </h1>
        </div>
        <ContactForm />
        <div>
          <h2 className='mb-2 font-bold'>Phone</h2>
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
          <h2 className='my-2 font-bold'>Email</h2>
          <p>
            <a href='enquiries@harrisonjackphoto.com' className='underline'>
              enquiries@harrisonjackphoto.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
