/* eslint-disable no-unused-vars */
import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  useMantineTheme,
} from '@mantine/core';

import propTypes from 'prop-types';

const CharacterCard = ({ character }) => {
  const { id, name, status, species, type, gender, origin, image } = character;

  const theme = useMantineTheme();

  const badgeColor = {
    Alive: 'green',
    Dead: 'red',
  };

  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <Card
      shadow='md'
      padding='xs'
      radius='md'
      style={{ height: 400, maxWidth: 250 }}
    >
      <Card.Section>
        <Badge
          color={badgeColor[status] || 'gray'}
          size='lg'
          variant='filled'
          style={{ position: 'absolute', right: 5, top: 220, zIndex: 10 }}
        >
          {`${status}`}
        </Badge>
        <Badge
          color='dark'
          size='lg'
          variant='filled'
          style={{
            borderRadius: 5,
            position: 'absolute',
            left: 0,
            top: 0,
            zIndex: 10,
          }}
        >
          {`#${id}`}
        </Badge>
        <Image src={image} width={250} height='auto' alt={name} fit='contain' />
      </Card.Section>
      <Group
        position='apart'
        style={{ marginBottom: 5, marginTop: theme.spacing.xs }}
      >
        <Text size='lg' weight={700}>
          {name}
        </Text>
      </Group>
      <Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
        <Text size='sm' component='span' weight={700}>
          Species: {species}
        </Text>
      </Text>
      <Text size='sm' style={{ color: secondaryColor, lineHeight: 1.5 }}>
        <Text size='sm' component='span' weight={700}>
          Gender:
        </Text>{' '}
        {gender}
      </Text>
      <Text
        size='sm'
        style={{ color: secondaryColor, lineHeight: 1.5 }}
        lineClamp={2}
      >
        <Text size='sm' component='span' weight={700}>
          Origin:
        </Text>{' '}
        {origin.name}
      </Text>
    </Card>
  );
};

CharacterCard.propTypes = {
  character: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    status: propTypes.string,
    species: propTypes.string,
    type: propTypes.string,
    gender: propTypes.string,
    origin: propTypes.shape({ name: propTypes.string }),
    location: propTypes.shape({ name: propTypes.string }),
    created: propTypes.string,
    image: propTypes.string,
  }).isRequired,
};

export default CharacterCard;
