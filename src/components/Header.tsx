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
    <header className='max-mobile:h-[70px] fixed top-0 flex h-[150px] w-full items-center justify-between border-b-4 border-solid border-black bg-white pl-[7.71%] pr-[6.88%]'>
      <Logo />
      {!children ? (
        <>
          <div className='max-mobile:block hidden'>
            <Button size='small' onClick={handleNavigation}>
              검색 페이지 가기
            </Button>
          </div>
          <div className='max-mobile:hidden block'>
            <Button size='large' onClick={handleNavigation}>
              검색 페이지 가기
            </Button>
          </div>
        </>
      ) : (
        children
      )}
    </header>
  );
}