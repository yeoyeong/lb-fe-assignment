import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSearchParams } from 'react-router-dom';

interface ToastProps {
  duration?: number; // 지속 시간 (ms)
}

export default function Toast({ duration = 3000 }: ToastProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const isOpen = searchParams.get('toast');

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        searchParams.delete('toast');
        setSearchParams(searchParams);
      }, duration);

      return () => clearTimeout(timer);
    }
    return () => {};
  }, [isOpen, duration, searchParams, setSearchParams]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className='fixed bottom-10 left-1/2 z-10 -translate-x-1/2 transform rounded bg-red-500 px-4 py-2 text-white shadow-lg'>
      {isOpen}
    </div>,
    document.getElementById('toast') as HTMLElement
  );
}