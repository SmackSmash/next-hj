import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className='flex gap-4'>
      <div>
        <h1 className='text-5xl font-semibold'>Get in touch</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quia. Odio, nisi esse
          delectus eius ad fugiat quasi, dolore distinctio eaque voluptates quis perspiciatis illum
          numquam a nulla reprehenderit sit.
        </p>
      </div>
      <ContactForm />
    </div>
  );
}
