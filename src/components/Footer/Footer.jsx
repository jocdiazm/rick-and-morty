import { Center, Text } from '@mantine/core';

const Footer = () => {
  return (
    <Center style={{ marginBottom: 10 }}>
      <Text color='dimmed'>
        <Text component='span'>
          {'Made with ❤️ by  '}
          <Text
            variant='link'
            component='a'
            inherit
            href='https://www.linkedin.com/in/jocdiazm/'
            style={{ textDecoration: 'none' }}
            color='cyan'
          >
            {'@jocdiazm '}
          </Text>
        </Text>
      </Text>
    </Center>
  );
};

export default Footer;
