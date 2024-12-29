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

    setSearchParams({ query: payload }); // URL 쿼리 파라미터 업데이트
  };

  return (
    <form
      onSubmit={event => handleSearch(event, query)}
      className='flex items-center'>
      <input
        className='max-mobile:h-7 max-mobile:w-[120px] mr-2 h-14 w-[231px] rounded-[10px] border border-solid border-black py-2 pl-4 text-sm text-[#5C6370] max-sm:w-[100px]'
        placeholder='입력...'
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className='max-mobile:block hidden'>
        <Button size='small' type='submit'>
          검색하기
        </Button>
      </div>
      <div className='max-mobile:hidden block'>
        <Button size='large' type='submit'>
          검색하기
        </Button>
      </div>
    </form>
  );
}