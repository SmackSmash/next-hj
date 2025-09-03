'use client';

// TODO: Send the emeail
// import sendMail from '@/actions/send-mail';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm();

  return (
    <form
      onSubmit={handleSubmit(data => console.log(data))}
      className='flex flex-col items-center gap-4'
    >
      <div className='flex items-center gap-2'>
        <label htmlFor='name'>Name</label>
        <input
          {...register('name')}
          type='text'
          name='name'
          id='name'
          className='bg-zinc-100 p-2 text-zinc-950'
        />
      </div>
      <div className='flex items-center gap-2'>
        <label htmlFor='email'>Email</label>
        <input
          {...register('email')}
          type='email'
          name='email'
          id='email'
          className='bg-zinc-100 p-2 text-zinc-950'
        />
      </div>
      <div className='flex items-center gap-2'>
        <label htmlFor='message'>Message</label>
        <textarea
          {...register('message')}
          name='message'
          id='message'
          className='bg-zinc-100 p-2 text-zinc-950'
        />
      </div>
      <button type='submit' className='width-full bg-zinc-100 p-2 text-zinc-900'>
        Send
      </button>
    </form>
  );
}
