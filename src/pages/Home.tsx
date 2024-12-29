import Header from '@src/components/Header';

export default function Home() {
  return (
    <div className='flex h-full items-center justify-center'>
      <Header />
      <p className='text-bold text-[2.5rem] font-bold leading-[56px]'>
        안녕하세요
      </p>
    </div>
  );
}