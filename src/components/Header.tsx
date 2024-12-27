import Button from '@src/components/Button';
import Logo from '@src/components/Logo';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/search'); // 이동할 경로
  };

  return (
    <header className='flex w-full justify-between border-b-4 border-solid border-black bg-white px-[5%] py-11'>
      <Logo />
      <Button size='small' onClick={handleNavigation}>
        검색 페이지 가기
      </Button>
    </header>
  );
}