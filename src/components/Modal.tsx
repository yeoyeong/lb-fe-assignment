import ReactDOM from 'react-dom';
import { useSearchParams } from 'react-router-dom';
// import { useSearchParams } from 'react-router-dom';

export default function ModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const onClose = () => {
    searchParams.delete('query');
    setSearchParams(searchParams);
  };

  return (
    <>
      {ReactDOM.createPortal(
        // <div className='fixed left-0 top-0 z-10 h-screen w-screen'>
        <div>
          <div className='max-mobile:px-8 fixed left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[10px] border border-solid border-black bg-white px-16 py-60'>
            <button
              type='button'
              className='absolute right-7 top-8 cursor-pointer'
              onClick={onClose}>
              <img src='/img/icon/icon_close.svg' alt='close button' />
            </button>
            {children}
          </div>
        </div>,
        document.getElementById('modal') as HTMLElement
      )}
    </>
  );
}