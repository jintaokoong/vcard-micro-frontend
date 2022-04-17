import { IoDownload, IoPersonCircle } from 'solid-icons/io';

export const Card = () => {
  return (
    <>
      <div class={'flex flex-col items-center px-8 pt-8'}>
        <div class={'mb-2'}>
          <IoPersonCircle size={80} />
        </div>
        <div class={'text-2xl font-medium'}>John Doe</div>
      </div>
      <hr class={'my-8'} />
      <div
        class={'w-inherit w-max-inherit fixed bottom-3 active:bottom-2 px-2'}
      >
        <button
          class={
            'text-lg h-13 w-full rounded-lg bg-gray-800 hover:bg-gray-700 active:bg-gray-900 shadow-lg'
          }
        >
          <IoDownload class={'mr-1'} /> Download
        </button>
      </div>
    </>
  );
};
