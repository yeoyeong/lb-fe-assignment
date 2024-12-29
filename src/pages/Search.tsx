import Header from '@src/components/Header';
import SearchInput from '@src/components/search.Input';
import SearchList from '@src/components/search.List';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query_params = searchParams.get('query') || ''; // 쿼리 파라미터에서 검색어 가져오기
  // prettier-ignore
  const [query, setQuery] = useState <string>(query_params ?? "");

  return (
    <div className='h-full'>
      <Header>
        <SearchInput query={query} setQuery={setQuery} />
      </Header>
      <SearchList />
    </div>
  );
}