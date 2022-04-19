import DownloadButtonContainer from '../atoms/download-button-container';
import { IoDownload } from 'solid-icons/io';
import { invoker } from 'ramda';

interface Props {
  id: string; // card id
}

const DownloadButton = (p: Props) => {
  return (
    <DownloadButtonContainer>
      <button
        onClick={() =>
          invoker(1, 'open')(
            `${import.meta.env.VITE_APP_API_BASE_URL}/cards/export/${p.id}`,
            window,
          )
        }
        class={
          'text-lg h-11 w-full rounded-lg bg-gray-800 hover:bg-gray-700 active:bg-gray-900 shadow-lg'
        }
      >
        <IoDownload class={'mr-1'} /> Download
      </button>
    </DownloadButtonContainer>
  );
};

export default DownloadButton;
