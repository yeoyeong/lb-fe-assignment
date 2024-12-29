import { Search } from '@src/shared/types/searchTypes';

interface Props {
  data: Search[];
}

export default function SearchList({ data }: Props) {
  if (data.length === 0) {
    return <p className='text-gray-500'>No results found.</p>;
  }

  return (
    <ul className='mt-4 space-y-2'>
      {data.map(searchItem => (
        <li key={searchItem.id} className='rounded border p-2 shadow'>
          {searchItem.name}
        </li>
      ))}
    </ul>
  );
}