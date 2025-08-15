import { Link as RouterLink } from 'react-router-dom';
import { Image, Link } from '@chakra-ui/react';

const Logo: React.FC = () => {
  return (
    <Link
      as={RouterLink}
      to="/"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      overflow="hidden"
    >
      <Image src="/logo.svg" alt="Logo" h="auto" w="220px" minW="220px" />
    </Link>
  );
};

export default Logo;
