'use client';

// TODO: Send the emeail
// import sendMail from '@/actions/send-mail';
import { type FieldValues, useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm();

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-4'>
      <div className='flex items-center gap-2'>
        <label htmlFor='name'>Name</label>
        <input
          {...register('name', { required: 'Please enter a name' })}
          type='text'
          name='name'
          id='name'
          className='border border-zinc-300 p-2 outline-0 focus:border-2 dark:border-zinc-50'
        />
      </div>
      <div className='flex items-center gap-2'>
        <label htmlFor='email'>Email</label>
        <input
          {...register('email', { required: 'Please enter a valid email address' })}
          type='email'
          name='email'
          id='email'
          className='border border-zinc-300 p-2 outline-0 focus:border-2 dark:border-zinc-50'
        />
      </div>
      <div className='flex gap-2'>
        <label htmlFor='message' className='pt-2'>
          Message
        </label>
        <textarea
          {...register('message', { required: 'Please enter a message' })}
          name='message'
          id='message'
          className='border border-zinc-300 p-2 outline-0 focus:border-2 dark:border-zinc-50'
        />
      </div>
      <button type='submit' className='width-full bg-zinc-200 p-2 text-zinc-900'>
        Send
      </button>
    </form>
  );
}
