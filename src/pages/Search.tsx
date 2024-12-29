import Button from '@src/components/Button';
import Header from '@src/components/Header';
import SearchInput from '@src/components/search.Input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  // prettier-ignore
  const [query, setQuery] = useState <string>("");
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/');
  };

  return (
    <div className='h-full'>
      <Header>
        <SearchInput query={query} setQuery={setQuery} />
      </Header>
      <div className='flex h-full w-full flex-col items-center justify-center gap-8'>
        <p className='text-bold text-[2.5rem] font-bold leading-[56px]'>
          검색페이지입니다
        </p>
        <Button size='large' onClick={handleNavigation}>
          메인 페이지 가기
        </Button>
      </div>
      {/* <SearchList data={filteredData} /> */}
    </div>
  );
}