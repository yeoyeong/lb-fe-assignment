import ReactDOM from 'react-dom';
import { useSearchParams } from 'react-router-dom';

export default function ModalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchParams] = useSearchParams();
  const isOpen = searchParams.get('modal') === 'open'; // 쿼리 파라미터 확인

  if (!isOpen) return null;

  return (
    <>
      {ReactDOM.createPortal(
        <div className='fixed left-0 top-0 h-screen w-screen'>{children}</div>,
        document.getElementById('modal') as HTMLElement
      )}
    </>
  );
}