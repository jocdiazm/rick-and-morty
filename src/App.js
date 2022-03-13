/* eslint-disable no-unused-vars */
import { Pagination } from '@mantine/core';
import { useState } from 'react';

import './App.css';
import CharacterGrid from './components/CharacterGrid';
import SearchBar from './components/SearchBar';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [info, setInfo] = useState({});

  return (
    <div className='App'>
      <SearchBar
        characters={characters}
        setcharacters={setCharacters}
        activepage={activePage}
        setactivepage={setActivePage}
        info={info}
        setinfo={setInfo}
      />
      {characters?.length ? (
        <>
          <Pagination
            style={{ marginBottom: 20, marginTop: 20 }}
            total={info.pages}
            page={activePage}
            onChange={setActivePage}
            size='sm'
            noWrap
          />
          <CharacterGrid characters={characters} />
        </>
      ) : (
        'Nothing to show here'
      )}
    </div>
  );
};

export default App;
