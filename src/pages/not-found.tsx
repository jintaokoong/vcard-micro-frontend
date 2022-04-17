import { Link } from 'solid-app-router';

const NotFound = () => {
  return (
    <>
      <div class={'mt-15 mb-5 tracking-wider font-bold text-6xl text-center'}>
        404
      </div>
      <div class={'text-center'}>
        The resource you are looking for is not found
      </div>
    </>
  );
};

export default NotFound;
