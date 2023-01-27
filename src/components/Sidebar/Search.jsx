import { useEffect } from 'react';
import { Form, useSubmit } from 'react-router-dom';

function Search({ query }) {
  useEffect(() => {
    document.getElementById('q').value = query;
  }, [query]);

  const submit = useSubmit();

  return (
    <Form id="search-form" role="search" className="w-full">
      <input
        id="q"
        aria-label="Search notes"
        placeholder="Search"
        type="search"
        name="q"
        className="block w-full px-4 py-2 text-gray-900 rounded-lg bg-gray-100"
        defaultValue={query}
        onChange={(e) => submit(e.currentTarget.form)}
      />
    </Form>
  );
}
export default Search;
