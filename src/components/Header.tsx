import Button from '@src/components/Button';
import Logo from '@src/components/Logo';
import { useNavigate } from 'react-router-dom';

interface Props {
  children?: React.ReactNode;
}
export default function Header({ children }: Props) {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/search'); // 이동할 경로
  };

  return (
    <header className='flex w-full justify-between border-b-4 border-solid border-black bg-white px-[5%] py-11'>
      <Logo />
      <div>
        {!children ? (
          <Button size='small' onClick={handleNavigation}>
            검색 페이지 가기
          </Button>
        ) : (
          children
        )}
      </div>
    </header>
  );
}