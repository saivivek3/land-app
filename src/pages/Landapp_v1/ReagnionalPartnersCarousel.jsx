import { useState, useMemo } from 'react';
import cardOneImg from './images/CardOneImg.jpg';
import CardSecondImg from './images/CardSecondImg.jpg';
import CardThirdImg from './images/CardThirdImg.jpg';
import CardFourthImg from './images/CardFourthImg.jpg';
import CardFifthImg from './images/CardFifthImg.jpg';
import CardSixthImg from './images/CardSixthImg.jpg';
import starImg from './images/emptyStar.svg';
import leftArrow from './images/leftArrow.svg';
import rightArrow from './images/rightArrow.svg';

function EachCard({ cards }) {
  const [activeCard, setActiveCard] = useState(0);

  const visibleCards = useMemo(() => {
    const visibleRange = 5;
    return cards.slice(
      activeCard,
      Math.min(activeCard + visibleRange, cards.length),
    );
  }, [activeCard, cards]);

  const handleNext = () => {
    setActiveCard(prevCard => Math.min(prevCard + 1, cards.length - 5));
  };

  const handlePrevious = () => {
    setActiveCard(prevCard => Math.max(prevCard - 1, 0));
  };

  return (
    <div className="flex flex-col space-y-6 ml-5 sm:ml-20 overflow-hidden">
      <div className="mr-auto">
        <div className="font-semibold text-2xl">Top Regional Partners</div>
        <p className="text-sm text-gray-600 mt-2">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="flex space-x-4 max-w-7xl overflow-hidden">
        {visibleCards.map((card, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg mt-3 bg-white w-80 sm:w-96 relative transition-transform transform-gpu will-change-transform"
          >
            <img
              src={card.image}
              alt="Card"
              loading="lazy"
              className="w-full h-56 sm:h-72 object-cover rounded-lg"
            />
            <div className="mx-4 rounded-md absolute inset-x-0 bottom-0 px-6 py-2 backdrop-blur-sm bg-white/30 mb-5">
              <div className="flex gap-1 mb-1">
                {Array.from({ length: card.stars }).map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={starImg}
                    alt="Star"
                    className="w-3 h-3"
                    loading="lazy"
                  />
                ))}
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
        ))}
      </div>
      <div className="flex space-x-4 mr-auto">
        <button
          onClick={handlePrevious}
          className="px-3 py-3 rounded-full border border-gray-300 text-white flex items-center justify-center"
          disabled={activeCard === 0}
        >
          <img src={leftArrow} alt="leftArrow" className="w-3 h-3" />
        </button>
        <button
          onClick={handleNext}
          className="px-3 py-3 rounded-full border border-gray-300 text-white flex items-center justify-center"
          disabled={activeCard >= cards.length - 5}
        >
          <img src={rightArrow} alt="rightArrow" className="w-3 h-3" />
        </button>
      </div>
      <button className="py-2 px-4 w-full sm:w-1/5 rounded-lg bg-black text-white whitespace-nowrap">
        View all Regional Partners
      </button>
    </div>
  );
}

const RegionalPartnersCarousel = () => {
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

  return (
    <div className="mt-20 flex items-center overflow-hidden">
      <EachCard cards={cards} />
    </div>
  );
};

export default RegionalPartnersCarousel;
