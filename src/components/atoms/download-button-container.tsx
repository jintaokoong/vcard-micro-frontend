import { PropsWithChildren } from 'solid-js';

const DownloadButtonContainer = (p: PropsWithChildren) => {
  return (
    <div
      class={'w-inherit w-max-inherit fixed bottom-3 active:bottom-2.5 px-2'}
    >
      {p.children}
    </div>
  );
};

export default DownloadButtonContainer;
