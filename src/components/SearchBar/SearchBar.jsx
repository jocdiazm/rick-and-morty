/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Loader, Text, TextInput } from '@mantine/core';
import { useDebouncedValue } from '@mantine/hooks';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import axios from 'axios';

import { useEffect, useState } from 'react';

const SearchBar = (props) => {
  const {
    setcharacters: setCharacters,
    activepage: activePage,
    setactivepage: setActivePage,
    info,
    setinfo: setInfo,
  } = props;
  const [searchName, setSearchName] = useState('');
  const [searchError, setSearchError] = useState(null);

  const [loading, setLoading] = useState(false);
  const [debouncedSearchName] = useDebouncedValue(searchName, 300);

  const handleChange = ({ currentTarget }) => {
    setActivePage(1);
    setSearchName(currentTarget.value); // use debounced value instead
  };
  useEffect(() => {
    const searchCharacters = async () => {
      setLoading(true);
      const url = new URL('https://rickandmortyapi.com/api/character');
      const params = { page: activePage };
      if (searchName?.length) {
        params.name = searchName?.toLowerCase();
      }
      url.search = new URLSearchParams(params).toString();
      try {
        const res = await fetch(url, { method: 'GET' });
        if (!res.ok) {
          throw new Error(res.status);
        }
        setSearchError(null);
        const data = await res.json();
        setInfo(data.info);
        setCharacters(data.results);
      } catch (error) {
        setSearchError(`No character found with name "${searchName}" `);
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };
    searchCharacters();
  }, [debouncedSearchName, activePage]);

  return (
    <div className='Searchbar'>
      <TextInput
        icon={<MagnifyingGlassIcon />}
        onChange={handleChange}
        placeholder='By name, ex: morty'
        rightSection={loading ? <Loader size='xs' /> : null}
      />
      {searchError && <Text color='red'> {searchError} </Text>}
      {debouncedSearchName?.length && !searchError ? (
        <Text color='dimmed'>{`Found ${info?.count} characters for ${searchName}.`}</Text>
      ) : null}
    </div>
  );
};

export default SearchBar;
