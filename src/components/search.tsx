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
        className="block w-full rounded-md border border-gray-200 bg-white px-4 py-2 text-gray-900 placeholder:text-gray-500 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
        value={value}
        onChange={(event) => {
          const nextValue = event.currentTarget.value;
          setValue(nextValue);

          void navigate({
            to: '.',
            search: (prev) => ({
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
