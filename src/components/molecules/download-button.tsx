import DownloadButtonContainer from '../atoms/download-button-container';
import { IoDownload } from 'solid-icons/io';

interface Props {
  id: string; // card id
}

const DownloadButton = (p: Props) => {
  return (
    <DownloadButtonContainer>
      <a href={`${import.meta.env.VITE_APP_API_BASE_URL}/cards/export/${p.id}`}>
        <button
          type={'button'}
          class={
            'text-lg h-11 w-full rounded-lg bg-gray-800 hover:bg-gray-700 active:bg-gray-900 shadow-lg'
          }
        >
          <IoDownload class={'mr-1'} /> Download
        </button>
      </a>
    </DownloadButtonContainer>
  );
};

export default DownloadButton;
