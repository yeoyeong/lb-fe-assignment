import Button from '@src/components/Button';
import Header from '@src/components/Header';
import Layout from '@src/components/Layout';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };

  return (
    <Layout>
      <Header>
        <div>
          <input className='mr-3 h-14 w-[151px] rounded-[10px] border border-solid border-black py-2 text-sm' />
          <Button size='large' onClick={handleNavigation}>
            검색하기
          </Button>
        </div>
      </Header>
      검색페이지입니다
      {/* <Button size='large' onClick={handleNavigation}>
        메인 페이지 가기
      </Button> */}
    </Layout>
  );
}