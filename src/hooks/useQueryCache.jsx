import { useQueryClient } from '@tanstack/react-query';

export function useQueryCache(queryKey) {
  const queryClient = useQueryClient();
  return queryClient.getQueryData(queryKey);
}
