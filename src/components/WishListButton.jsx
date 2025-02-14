import { useState } from 'react';
import {
  useIsWishlisted,
  useAddToWishlist,
  useRemoveFromWishlist,
} from '@/apis/WishList';

const WishlistButton = ({ userId, landId, border }) => {
  const { data: isWishlisted, isLoading } = useIsWishlisted(userId, landId);
  const addToWishlist = useAddToWishlist();
  const removeFromWishlist = useRemoveFromWishlist();
  const [liked, setLiked] = useState(isWishlisted);

  const handleWishlistToggle = async e => {
    e.preventDefault();
    setLiked(!liked);

    console.log('Toggle wishlist for land:', landId);
    console.log('Current status:', liked);

    if (liked) {
      // Ensure userId is correctly passed to the remove mutation
      console.log('Removing from wishlist');
      await removeFromWishlist.mutateAsync({ userId, landId });
    } else {
      // Ensure userId is correctly passed to the add mutation
      console.log('Adding to wishlist');
      await addToWishlist.mutateAsync({ userId, landId });
    }
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <svg
      onClick={handleWishlistToggle}
      xmlns="http://www.w3.org/2000/svg"
      className={`w-8 h-8 cursor-pointer p-1 ${border} border-gray-300 rounded-md`} // Corrected the border class
      viewBox="0 0 24 24"
      fill={liked ? 'red' : 'transparent'}
      stroke={liked ? 'white' : 'gray'}
      strokeWidth="2"
    >
      <path
        fill={liked ? 'red' : 'transparent'}
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  );
};

export default WishlistButton;
