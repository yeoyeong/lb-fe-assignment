import Button from '@src/components/Button';
import Header from '@src/components/Header';
import Logo from '@src/components/Logo';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };

  return (
    <div>
      <Header />
      검색페이지입니다
      <Button size='small' onClick={handleNavigation}>
        메인 페이지 가기
      </Button>
    </div>
  );
}