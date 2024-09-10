import React, { useEffect, useState } from 'react';
import SearchInut from './SearchInut';
import ResultList from './ResultList';




const useDebounce = (value, delay) => {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const handle = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => {
      clearTimeout(handle);
    };
  }, [value, delay]);

  return debounce;
};



const apiCall = (query) => {
  const result = ['apple', 'apricot', 'banana', 'application'];
  return new Promise((res) => {
    setTimeout(() => {
      res(result.filter((i) => i.includes(query)));
    }, 1000);
  });
};

const SearchList = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const debounce = useDebounce(query, 500);

  useEffect(() => {
    if (debounce) {
      apiCall(debounce).then((data) => {
        setResult(data);
      });
    } else {
      setResult([]);
    }
  }, [debounce]);

  return (
    <div>
      <SearchInut value={query} onChange={(e) => setQuery(e.target.value)} />
     <ResultList result={result}/>
    </div>
  );
};

export default SearchList;
