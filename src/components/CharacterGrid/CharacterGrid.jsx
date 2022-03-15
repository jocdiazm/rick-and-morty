import { SimpleGrid } from '@mantine/core';
import propTypes from 'prop-types';
import CharacterCard from '../CharacterCard';

import './CharactersGrid.modules.scss';

const CharacterGrid = ({ characters }) => {
  return (
    <div className='Characters-grid'>
      <SimpleGrid
        cols={4}
        spacing='md'
        breakpoints={[
          { maxWidth: 'md', cols: 3, spacing: 'md' },
          { maxWidth: 'sm', cols: 2, spacing: 'sm' },
          { maxWidth: 'xs', cols: 1, spacing: 'sm' },
        ]}
      >
        {characters.map((character) => (
          <CharacterCard
            key={`charactercard-${character.id}`}
            character={character}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

CharacterGrid.propTypes = {
  characters: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      status: propTypes.string,
      species: propTypes.string,
      gender: propTypes.string,
      origin: propTypes.shape({ name: propTypes.string }),
      image: propTypes.string,
    }),
  ).isRequired,
};

export default CharacterGrid;
