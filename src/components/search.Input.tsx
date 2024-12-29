import { searchSchema } from '@src/schemas';
import { useSearchParams } from 'react-router-dom';
import Button from './Button';

interface Props {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({ query, setQuery }: Props) {
  const [, setSearchParams] = useSearchParams();

  const handleSearch = async (
    event: React.FormEvent<HTMLFormElement>,
    payload: string
  ) => {
    event.preventDefault();
    const result = searchSchema.safeParse({ query: payload });

    if (!result.success) {
      setSearchParams({ toast: result.error.errors[0].message });
      return;
    }

    // 유효한 경우 서버 요청
    // const response = await fetch(`/api/search?query=${payload}`);
    // const data = await response.json();
    console.log('통과');
  };

  return (
    <form onSubmit={event => handleSearch(event, query)}>
      <input
        className='mr-3 h-14 w-[151px] rounded-[10px] border border-solid border-black py-2 pl-4 text-sm'
        placeholder='입력...'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <Button size='large' type='submit'>
        검색하기
      </Button>
    </form>
  );
}