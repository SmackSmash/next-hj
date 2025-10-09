'use client';

// TODO: Send the emeail
import sendMail from '@/actions/send-mail';
import { type FieldValues, useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful }
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await sendMail(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='relative flex flex-col gap-2'>
      {isSubmitSuccessful && (
        <div className='absolute flex h-full w-full items-center justify-center bg-zinc-100 dark:bg-zinc-950'>
          <p>We&apos;ll be in touch soon!</p>
        </div>
      )}
      <label htmlFor='name' className='mb-2'>
        Name
      </label>
      <input
        {...register('name', { required: 'Please enter a name' })}
        type='text'
        name='name'
        id='name'
        className='rounded border border-zinc-400 p-2 outline-0 focus:border-zinc-600 dark:border-zinc-600 focus:dark:border-zinc-400'
      />
      {errors.name && <p>{`${errors.name.message}`}</p>}
      <label htmlFor='email' className='my-2'>
        Email
      </label>
      <input
        {...register('email', { required: 'Please enter a valid email address' })}
        type='email'
        name='email'
        id='email'
        className='rounded border border-zinc-400 p-2 outline-0 focus:border-zinc-600 dark:border-zinc-600 focus:dark:border-zinc-400'
      />
      {errors.email && <p>{`${errors.email.message}`}</p>}
      <label htmlFor='message' className='my-2'>
        Message
      </label>
      <textarea
        {...register('message', { required: 'Please enter a message' })}
        name='message'
        id='message'
        className='rounded border border-zinc-400 p-2 outline-0 focus:border-zinc-600 dark:border-zinc-600 focus:dark:border-zinc-400'
      />
      {errors.message && <p>{`${errors.message.message}`}</p>}
      <button
        disabled={isSubmitting}
        type='submit'
        className='mt-2 w-full cursor-pointer rounded bg-zinc-900 p-2 text-zinc-50 disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900'
      >
        {isSubmitting ? 'Sending Message' : 'Send Message'}
      </button>
    </form>
  );
}
