import { Link as RouterLink } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { Box, Heading, Link, Text, Icon } from '@chakra-ui/react';

interface Props {
  title: string;
  backRoute: string;
}

const RouteComponentTitle: React.FC<Props> = ({ title, backRoute }) => {
  return (
    <Box
      display="flex"
      width="100%"
      alignItems="center"
      justifyContent="space-between"
    >
      <Heading fontSize="xl" fontWeight="bold" color="blue.600">
        {title}
      </Heading>
      <Link
        as={RouterLink}
        to={backRoute ?? '/'}
        display="flex"
        alignItems="center"
        gap={2}
        px={2}
        py={1}
        fontWeight="bold"
        fontSize="sm"
        color="blue.600"
        _hover={{ textDecoration: 'none', bg: 'blue.50', borderRadius: 'md' }}
      >
        <Icon as={IoIosArrowBack} w={5} h={5} />
        <Text>Geri Qayıt</Text>
      </Link>
    </Box>
  );
};

export default RouteComponentTitle;
