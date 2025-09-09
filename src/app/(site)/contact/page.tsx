import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className='flex flex-grow flex-col justify-center'>
      <div className='mx-auto flex max-w-2xl gap-8'>
        <div>
          <h1 className='mb-4 max-w-fit border-b-1 pb-4 text-5xl font-semibold dark:border-zinc-50 dark:text-zinc-50'>
            Get in touch
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quia. Odio, nisi esse
            delectus eius ad fugiat quasi, dolore distinctio eaque voluptates quis perspiciatis
            illum numquam a nulla reprehenderit sit.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
