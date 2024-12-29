import useGetSearchData from '@src/query/search/useGetSearchData';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Button from './Button';
import ModalLayout from './Modal';

export default function SearchList() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || ''; // 쿼리 파라미터에서 검색어 가져오기
  const { data, isLoading, isError } = useGetSearchData({ payload: query });

  const handleNavigation = () => {
    navigate('/');
  };

  // if (data.length === 0) {
  //   return <p className='text-gray-500'>No results found.</p>;
  // }
  if (!query) {
    return (
      <div className='max-mobile:gap-2 flex h-full w-full flex-col items-center justify-center gap-8'>
        <p className='text'>검색페이지입니다</p>
        <div className='max-mobile:block hidden'>
          <Button size='small' onClick={handleNavigation}>
            홈으로 가기
          </Button>
        </div>
        <div className='max-mobile:hidden block'>
          <Button size='large' onClick={handleNavigation}>
            메인 페이지 가기
          </Button>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className='flex h-full w-full items-center justify-center'>
        <p className='text'>{`${query}(를) 검색 중입니다...`}</p>
      </div>
    );
  }
  if (isError) {
    return (
      <ModalLayout>
        <p className='min-w-60 text-center text-base font-bold'>
          오류가 발생했습니다.
          <br /> 나중에 다시 시도해 주세요.
        </p>
      </ModalLayout>
    );
  }

  if (data && data.length === 0)
    return (
      <ModalLayout>
        <p className='text min-w-60'>검색 결과가 없습니다.</p>
      </ModalLayout>
    );

  return (
    <div className='flex w-full justify-center'>
      <ul
        className='mobile:grid-cols-3 max-mobile:px-12 grid h-full w-[1230px] grid-cols-1 py-8'
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {data?.map(searchItem => (
          <li
            key={searchItem.id}
            className='flex aspect-square items-center justify-center border border-solid border-black text-center'>
            {searchItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}