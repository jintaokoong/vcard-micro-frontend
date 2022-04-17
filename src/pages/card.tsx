import { IoDownload, IoPersonCircle } from 'solid-icons/io';
import FieldEntry from '../components/field-entry';

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
      <div>
        <h4 class={'mb-2 font-medium'}>Personal Info</h4>
        <FieldEntry label={'email'} value={'john.doe@mail.net'} />
        <FieldEntry label={'contact'} value={'0123456789'} />
        <FieldEntry label={'address'} value={'some address'} />
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
