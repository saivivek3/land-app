import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import cardOneImg from './images/CardOneImg.jpg';
import CardSecondImg from './images/CardSecondImg.jpg';
import CardThirdImg from './images/CardThirdImg.jpg';
import CardFourthImg from './images/CardFourthImg.jpg';
import CardFifthImg from './images/CardFifthImg.jpg';
import CardSixthImg from './images/CardSixthImg.jpg';
import starImg from './images/emptyStar.svg';
import leftArrow from './images/leftArrow.svg';
import rightArrow from './images/rightArrow.svg';

// function EachCard({ cards }) {
//   const [activeCard, setActiveCard] = useState(0);
//   const [direction, setDirection] = useState('next');

//   const handleNext = () => {
//     setDirection('next');
//     setActiveCard(prevCard => (prevCard + 1) % cards.length);
//   };

//   const handlePrevious = () => {
//     setDirection('previous');
//     setActiveCard(prevCard =>
//       prevCard === 0 ? cards.length - 1 : prevCard - 1,
//     );
//   };

//   const cardStyle = {
//     transform:
//       direction === 'next'
//         ? `translateX(-${activeCard * 10}%)`
//         : `translateX(${(cards.length - activeCard - 1) * 10}%)`,
//     transition: 'transform 0.3s ease-in-out',
//   };

//   return (
//     <div className="flex flex-col space-y-6 ml-5 sm:ml-20 overflow-hidden">
//       <div className="mr-auto">
//         <div className="font-semibold text-2xl">Top Regional Partners</div>
//         <p className="text-sm text-gray-600 mt-2">
//           Dorem ipsum dolor sit amet, consectetur adipiscing elit.
//         </p>
//       </div>
//       {/* Card Display */}
//       <div
//         className="flex space-x-4 max-w-7xl overflow-hidden"
//         style={cardStyle}
//       >
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className="rounded-lg shadow-lg mt-3 bg-white transition-transform duration-300 w-80 sm:w-96 relative"
//           >
//             <img
//               src={card.image}
//               alt="Card"
//               loading="lazy"
//               className="w-full h-56 sm:h-72 object-cover rounded-lg"
//             />
//             {/* Transparent Content */}
//             <div className="mx-4 rounded-md absolute inset-x-0 bottom-0 px-6 py-2 backdrop-blur-sm bg-white/30 mb-5">
//               {/* Stars */}
//               <div className="flex gap-1 mb-1">
//                 {Array.from({ length: card.stars }).map((_, starIndex) => (
//                   <img
//                     key={starIndex}
//                     src={starImg}
//                     alt="Star"
//                     className="w-3 h-3"
//                     loading="lazy"
//                   />
//                 ))}
//               </div>
//               {/* Card Details */}
//               <div className="text-lg font-semibold text-white">
//                 {card.name}
//               </div>
//               <div className="text-white text-xs">{card.region}</div>
//               <div className="text-white text-sm">
//                 Listings: {card.listings}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* Navigation Buttons */}
//       <div className="flex space-x-4 mr-auto">
//         <button
//           onClick={handlePrevious}
//           className="px-3 py-3 rounded-full border border-gray-300 text-white flex items-center justify-center"
//         >
//           <img src={leftArrow} alt="leftArrow" className="w-3 h-3" />
//         </button>
//         <button
//           onClick={handleNext}
//           className="px-3 py-3 rounded-full border border-gray-300 text-white flex items-center justify-center"
//         >
//           <img src={rightArrow} alt="rightArrow" className="w-3 h-3" />
//         </button>
//       </div>
//       <button className="py-2 px-4 w-full sm:w-1/5 rounded-lg bg-black text-white whitespace-nowrap">
//         View all Regional Partners
//       </button>
//     </div>
//   );
// }

// const RegionalPartnersCarousel = () => {
//   const cards = [
//     {
//       image: cardOneImg,
//       name: 'Manikanta',
//       region: 'Vikarabad Region',
//       listings: 140,
//       stars: 5,
//     },
//     {
//       image: CardSecondImg,
//       name: 'Manikanta',
//       region: 'Vikarabad Region',
//       listings: 140,
//       stars: 5,
//     },
//     {
//       image: CardThirdImg,
//       name: 'Manikanta',
//       region: 'Vikarabad Region',
//       listings: 140,
//       stars: 5,
//     },
//     {
//       image: CardFourthImg,
//       name: 'Manikanta',
//       region: 'Vikarabad Region',
//       listings: 140,
//       stars: 5,
//     },
//     {
//       image: CardFifthImg,
//       name: 'Manikanta',
//       region: 'Vikarabad Region',
//       listings: 140,
//       stars: 5,
//     },
//     {
//       image: CardSixthImg,
//       name: 'Manikanta',
//       region: 'Vikarabad Region',
//       listings: 140,
//       stars: 5,
//     },
//   ];

//   return (
//     <div className="mt-20 flex items-center overflow-hidden">
//       <EachCard cards={cards} />
//     </div>
//   );
// };

// export default RegionalPartnersCarousel;

import { useVirtualizer } from '@tanstack/react-virtual';

const RegionalPartnersCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const cards = [
    {
      image: cardOneImg,
      name: 'Manikanta',
      region: 'Vikarabad Region',
      listings: 140,
      stars: 5,
    },
    {
      image: CardSecondImg,
      name: 'Manikanta',
      region: 'Vikarabad Region',
      listings: 140,
      stars: 5,
    },
    {
      image: CardThirdImg,
      name: 'Manikanta',
      region: 'Vikarabad Region',
      listings: 140,
      stars: 5,
    },
    {
      image: CardFourthImg,
      name: 'Manikanta',
      region: 'Vikarabad Region',
      listings: 140,
      stars: 5,
    },
    {
      image: CardFifthImg,
      name: 'Manikanta',
      region: 'Vikarabad Region',
      listings: 140,
      stars: 5,
    },
    {
      image: CardSixthImg,
      name: 'Manikanta',
      region: 'Vikarabad Region',
      listings: 140,
      stars: 5,
    },
  ];

  const nextSlide = useCallback(() => {
    if (currentSlide < cards.length - 3) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, cards.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  return (
    <div className="flex flex-col space-y-6 mx-5 sm:mx-20">
      <div>
        <h2 className="font-semibold text-2xl">Top Regional Partners</h2>
        <p className="text-sm text-gray-600">Dorem ipsum dolor sit amet</p>
      </div>

      <div className="relative overflow-hidden">
        <div
          style={{
            transform: `translate3d(-${currentSlide * 33.333}%, 0, 0)`,
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-1/3 flex-shrink-0 px-2"
              style={{
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <div className="rounded-lg shadow-lg bg-white">
                <div className="relative">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-56 sm:h-72 object-cover rounded-t-lg"
                    style={{ transform: 'translateZ(0)' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-6 py-4 backdrop-blur-sm bg-white/30">
                    <div className="text-yellow-400">
                      {'★'.repeat(card.stars)}
                    </div>
                    <div className="text-lg font-semibold text-white">
                      {card.name}
                    </div>
                    <div className="text-white text-xs">{card.region}</div>
                    <div className="text-white text-sm">
                      Listings: {card.listings}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-3 py-3 rounded-full border border-gray-300 disabled:opacity-50"
        >
          <img src={leftArrow} alt="Previous" className="w-3 h-3" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === cards.length - 3}
          className="px-3 py-3 rounded-full border border-gray-300 disabled:opacity-50"
        >
          <img src={rightArrow} alt="Next" className="w-3 h-3" />
        </button>
      </div>

      <button className="py-2 px-4 w-full sm:w-1/5 rounded-lg bg-black text-white">
        View all Regional Partners
      </button>
    </div>
  );
};

export default RegionalPartnersCarousel;
