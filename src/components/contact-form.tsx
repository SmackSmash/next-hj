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

  console.log(errors);
  const onSubmit = async (data: FieldValues) => {
    await new Promise(res => setTimeout(res, 1000));
    console.log(data);
  };

  if (isSubmitSuccessful) return <p>We&aposll be in touch soon!</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2'>
      <label htmlFor='name'>Name</label>
      <input
        {...register('name', { required: 'Please enter a name' })}
        type='text'
        name='name'
        id='name'
        className='border border-zinc-300 p-2 outline-0 focus:border-zinc-600 dark:border-zinc-600 focus:dark:border-zinc-400'
      />
      {errors.name && <p>{`${errors.name.message}`}</p>}
      <label htmlFor='email' className='mt-2'>
        Email
      </label>
      <input
        {...register('email', { required: 'Please enter a valid email address' })}
        type='email'
        name='email'
        id='email'
        className='border border-zinc-300 p-2 outline-0 focus:border-zinc-600 dark:border-zinc-600 focus:dark:border-zinc-400'
      />
      {errors.email && <p>{`${errors.email.message}`}</p>}
      <label htmlFor='message' className='mt-2'>
        Message
      </label>
      <textarea
        {...register('message', { required: 'Please enter a message' })}
        name='message'
        id='message'
        className='border border-zinc-300 p-2 outline-0 focus:border-zinc-600 dark:border-zinc-600 focus:dark:border-zinc-400'
      />
      {errors.message && <p>{`${errors.message.message}`}</p>}
      <button
        disabled={isSubmitting}
        type='submit'
        className='mt-2 w-full cursor-pointer bg-zinc-200 p-2 text-zinc-900 disabled:opacity-50'
      >
        Send
      </button>
    </form>
  );
}
