import { useQuery } from '@tanstack/react-query';

const BASE_URL =
  'https://syncapi.co/api/Land/GetAllLands?pageNumber=1&pageSize=10';

const fetchLands = async () => {
  const response = await fetch(BASE_URL, {
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    console.error('API Fetch Failed:', response.status, response.statusText);
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  console.log('Fetched Data:', data);
  return data;
};

export const useLands = () => {
  return useQuery({
    queryKey: ['lands'],
    queryFn: fetchLands,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });
};
