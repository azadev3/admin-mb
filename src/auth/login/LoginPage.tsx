import React, { type ChangeEvent } from 'react';
import {
  Box,
  VStack,
  Image,
  Heading,
  Text,
  Input,
  Button,
} from '@chakra-ui/react';
import {
  handleLogin,
} from '../api/handleLogin';
import Loader from '../../ui/Loader';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { setLoading } from '../../store/features/uiSlice';
import type { LoginPayloadInterface } from '../api/model';

const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.ui.loading);
  const [data, setData] = React.useState<LoginPayloadInterface | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loadingKey = 'login_loading';

    try {
      dispatch(setLoading({ key: loadingKey, value: true }));
      await handleLogin(data || null);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading({ key: loadingKey, value: false }));
    }
  };

  return (
    <Box
      as="main"
      w="100%"
      minH="100vh"
      bg="primaryOnSite"
      p={{ base: 8, md: 12 }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="100%"
        maxW="500px"
        bg="white"
        p={6}
        borderRadius="12px"
        display="flex"
        flexDirection="column"
        gap={6}
      >
        {/* Logo */}
        <Box display="flex" alignItems="center" mb={4}>
          <Image src="/logo.svg" alt="logo" h="50px" />
        </Box>

        {/* Text */}
        <VStack align="start" spacing={1} mb={4}>
          <Heading as="h1" fontSize="21px" color="primaryOnSite">
            Daxil olun
          </Heading>
          <Text
            fontSize="14px"
            fontWeight={500}
            lineHeight={1.5}
            color="primaryOnSite"
          >
            Zəhmət olmasa uyğun məlumatları daxil edin
          </Text>
        </VStack>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <VStack spacing={3}>
            {/* Email */}
            <VStack align="start" spacing={1} w="100%">
              <Text fontSize="14px" color="primaryOnSite">
                Email
              </Text>
              <Input
                required
                type="email"
                placeholder="Email"
                value={data?.email || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setData(prev => ({ ...prev, email: e.target.value }))
                }
                borderRadius="8px"
                border="1px solid #ccc"
                _focus={{
                  borderColor: 'primaryOnSite',
                  boxShadow: '0 0 0 2px rgba(0,0,0,0.1)',
                }}
                p="12px 16px"
              />
            </VStack>

            {/* Password */}
            <VStack align="start" spacing={1} w="100%">
              <Text fontSize="14px" color="primaryOnSite">
                Şifrə
              </Text>
              <Input
                required
                type="password"
                placeholder="Password"
                value={data?.password || ''}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setData(prev => ({ ...prev, password: e.target.value }))
                }
                borderRadius="8px"
                border="1px solid #ccc"
                _focus={{
                  borderColor: 'primaryOnSite',
                  boxShadow: '0 0 0 2px rgba(0,0,0,0.1)',
                }}
                p="12px 16px"
              />
            </VStack>

            {/* Button */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="100%"
              pt={3}
            >
              {loading['login_loading'] ? (
                <Loader />
              ) : (
                <Button
                  type="submit"
                  w="100%"
                  bg="primaryOnSite"
                  color="white"
                  fontWeight={600}
                  fontSize="16px"
                  borderRadius="8px"
                  _hover={{
                    bg: 'primary',
                    color: 'primaryOnSite',
                    border: '1px solid',
                  }}
                >
                  Daxil ol
                </Button>
              )}
            </Box>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
