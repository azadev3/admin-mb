import React from 'react';
import {
  Tabs,
  TabList,
  Tab,
  Box,
  Button,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useLanguages } from '../../hooks/useLanguages';
import Loader from '../../ui/Loader';

interface LanguageTabsProps {
  languages: string[];
  activeLang?: string;
  setActiveLang: (lang: string) => void;
}

const LanguageTabs: React.FC<LanguageTabsProps> = ({
  languages,
  setActiveLang,
}) => {
  const { isLoading, isError, refetch } = useLanguages();

  return (
    <Box
      bg="white"
      shadow="md"
      rounded="2xl"
      p={4}
      mt={8}
      border="1px solid"
      borderColor="gray.100"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <VStack spacing={3}>
          <Text color="red.500" fontWeight="semibold">
            Dil seçimlərinin gəlməsi zamanı xəta baş verdi
          </Text>
          <Button colorScheme="blue" size="sm" onClick={() => refetch()}>
            Yenidən yoxlayın
          </Button>
        </VStack>
      ) : languages.length === 0 ? (
        <Text color="gray.500">Heç bir dil tapılmadı</Text>
      ) : (
        <Tabs
          variant="enclosed"
          colorScheme="blue"
          borderBottom="0px solid transparent"
          w="full"
          onChange={index => setActiveLang(languages[index])}
        >
          <TabList gap={2}>
            {languages.map(lang => (
              <Tab
                key={lang}
                px={5}
                py={2}
                fontWeight="bold"
                rounded="xl"
                _selected={{
                  bg: 'blue.500',
                  color: 'white',
                  shadow: 'sm',
                  cursor: 'default',
                  _hover: {
                    backgroundColor: 'blue.500',
                    color: 'white',
                    shadow: 'sm',
                  },
                }}
                _hover={{
                  bg: 'blue.100',
                }}
              >
                {lang.toUpperCase()}
              </Tab>
            ))}
          </TabList>
        </Tabs>
      )}
    </Box>
  );
};

export default LanguageTabs;
