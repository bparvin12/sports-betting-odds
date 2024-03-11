import React from 'react';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa';

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex h-[3rem] w-[8rem] items-center justify-center gap-2 rounded-full bg-gray-900 text-white outline-none transition-all hover:scale-110 hover:bg-gray-950 focus:scale-110 active:scale-105 disabled:scale-100 disabled:bg-white/10 dark:bg-white/10"
      disabled={pending}
    >
      {pending ? (
        <div className="size-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:-translate-y-1 group-hover:translate-x-1" />{' '}
        </>
      )}
    </button>
  );
}
