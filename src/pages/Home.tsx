import Header from '@src/components/Header';
import Layout from '@src/components/Layout';

export default function Home() {
  return (
    <Layout classProps='flex items-center justify-center'>
      <Header />
      <p className='text-bold text-[2.5rem] font-bold leading-[56px]'>
        안녕하세요
      </p>
    </Layout>
  );
}