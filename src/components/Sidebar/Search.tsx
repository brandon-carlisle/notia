import { useEffect, useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

interface SearchProps {
  query?: string;
}

function Search({ query = '' }: SearchProps) {
  const navigate = useNavigate({ from: '/' });
  const [value, setValue] = useState(query);

  useEffect(() => {
    setValue(query);
  }, [query]);

  return (
    <form id="search-form" role="search" className="w-full">
      <input
        id="q"
        aria-label="Search notes"
        placeholder="Search"
        type="search"
        name="q"
        className="block w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-900"
        value={value}
        onChange={(event) => {
          const nextValue = event.currentTarget.value;
          setValue(nextValue);

          void navigate({
            to: '.',
            search: (prev: { q?: string }) => ({
              ...prev,
              q: nextValue.trim() ? nextValue : undefined,
            }),
            replace: true,
          });
        }}
      />
    </form>
  );
}

export default Search;
