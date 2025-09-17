import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { apiRequest } from '../config/apiRequest';

export const useLanguages = () => {
  const fetchLanguages = async () => {
    const res = await apiRequest({
      endpoint: 'language',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res) throw new Error('Dont fetched languages');
    return res;
  };

  const {
    data: languages,
    isLoading,
    isError,
    refetch,
  } = useQuery<string[]>({
    queryKey: ['languageData'],
    queryFn: fetchLanguages,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
  });

  const [activeLang, setActiveLang] = React.useState('');

  React.useEffect(() => {
    if (languages?.length) setActiveLang(languages[0]);
  }, [languages]);

  return {
    languages: languages ?? [],
    isLoading,
    isError,
    refetch,
    setActiveLang,
    activeLang,
  };
};
