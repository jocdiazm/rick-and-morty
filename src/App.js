/* eslint-disable no-unused-vars */
import { SimpleGrid } from '@mantine/core';
import { useEffect, useState } from 'react';
import CharacterCard from './components/CharacterCard';

import './App.css';
import CharacterGrid from './components/CharacterGrid';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [pages, setPages] = useState();

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      const currentPageUrl = `https://rickandmortyapi.com/api/character?page=${activePage}`;
      const res = await fetch(currentPageUrl, { method: 'GET' });
      const data = await res.json();
      setCharacters(data.results);
      setPages(data.info.pages);
      setLoading(false);
    };
    getCharacters();
  }, [activePage]);
  return (
    <div className='App'>
      <CharacterGrid characters={characters} />
    </div>
  );
};

export default App;
