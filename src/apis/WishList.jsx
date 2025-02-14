import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// Initialize Axios
const api = axios.create({
  baseURL: 'https://syncapi.co/api/Wishlist',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fetch wishlisted lands by user
export function useGetWishlist(userId) {
  return useQuery({
    queryKey: ['wishlist', userId],
    queryFn: async () => {
      const { data } = await api.get(`/GetWishlistedLands?userId=${userId}`);
      console.log(data); // Check if the data is what you expect

      return data;
    },

    staleTime: 300000, // 5 minutes
  });
}

// Check if a property is wishlisted
export function useIsWishlisted(userId, landId) {
  return useQuery({
    queryKey: ['isWishlisted', userId, landId],
    queryFn: async () => {
      const { data } = await api.get(
        `/IsLandWishlistedByUser?userId=${userId}&landId=${landId}`,
      );
      console.log(data); // Check if it returns true/false correctly
      return data; // Should return true/false
    },
  });
}

// Add to wishlist
export function useAddToWishlist() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ userId, landId }) => {
      return await api.post(`/AddToWishlist`, { userId, landId });
    },
    onSuccess: (_, { userId }) => {
      console.log('Item added to wishlist');
      queryClient.invalidateQueries({ queryKey: ['wishlist', userId] });
      queryClient.invalidateQueries({ queryKey: ['isWishlisted', userId] });
    },
  });
}

// Remove from wishlist
export function useRemoveFromWishlist() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ userId, landId }) => {
      return await api.delete(
        `/RemoveFromWishlist?userId=${userId}&landId=${landId}`,
      );
    },
    onSuccess: (_, { userId }) => {
      console.log('Item removed from wishlist');
      queryClient.invalidateQueries({ queryKey: ['wishlist', userId] });
      queryClient.invalidateQueries({ queryKey: ['isWishlisted', userId] });
    },
  });
}
