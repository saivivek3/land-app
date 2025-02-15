import { useCallback, useState, useEffect } from 'react';
import leftArrow from './images/leftArrow.svg';
import rightArrow from './images/rightArrow.svg';
import ManImage from '@/assets/images/man.png';
import { Star } from 'lucide-react';
import { useGet } from '@/apis';

const RegionalPartnersCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4); // Default for large screens

  const { data: allRegionalPatners } = useGet(
    'allTopRegionalPatners',
    '/Users/GetAllAgents',
    {},
  );

  const { data: allStates } = useGet('allStates', '/GeoLocation/GetAllStates', {
    staleTime: 300000, // 5 minutes
  });

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        setSlidesToShow(4);
      } else {
        setSlidesToShow(4); // Default for larger screens
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const cards = allRegionalPatners?.map(card => ({
    image: ManImage,
    name: card.name,
    region: allStates?.find(state => state.id === card.stateId)?.name,
    listings: card.landsPosted,
    stars: 5,
  }));

  console.log(cards, 'cards');

  // const cards = [
  //   {
  //     image: ManImage,
  //     name: 'Manikanta',
  //     region: 'Vikarabad Region',
  //     listings: 140,
  //     stars: 5,
  //   },
  //   {
  //     image: ManImage,
  //     name: 'Manikanta',
  //     region: 'Vikarabad Region',
  //     listings: 140,
  //     stars: 5,
  //   },
  //   {
  //     image: ManImage,
  //     name: 'Manikanta',
  //     region: 'Vikarabad Region',
  //     listings: 140,
  //     stars: 5,
  //   },
  //   {
  //     image: ManImage,
  //     name: 'Manikanta',
  //     region: 'Vikarabad Region',
  //     listings: 140,
  //     stars: 5,
  //   },
  //   {
  //     image: ManImage,
  //     name: 'Manikanta',
  //     region: 'Vikarabad Region',
  //     listings: 140,
  //     stars: 5,
  //   },
  //   {
  //     image: ManImage,
  //     name: 'Manikanta',
  //     region: 'Vikarabad Region',
  //     listings: 140,
  //     stars: 5,
  //   },
  // ];

  const nextSlide = useCallback(() => {
    if (currentSlide < cards.length - slidesToShow) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, cards?.length, slidesToShow]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  return (
    <div className="flex flex-col space-y-6 mx-5 sm:mx-20 mt-8">
      <div>
        <h2 className="font-semibold text-2xl">Top Regional Partners</h2>
        <p className="text-sm text-gray-600">Dorem ipsum dolor sit amet</p>
      </div>

      <div className="relative overflow-hidden">
        <div
          style={{
            transform: `translate3d(-${currentSlide * (100 / slidesToShow)}%, 0, 0)`, // **Updated for dynamic slidesToShow**
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            display: 'flex',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {cards?.map((card, index) => (
            <div
              key={index}
              className={`w-full ${slidesToShow === 1 ? 'sm:w-full' : slidesToShow === 2 ? 'sm:w-1/2' : 'sm:w-1/4'} flex-shrink-0 px-2`} // **Updated width for mobile & tablet**
              style={{
                transform: 'translate3d(0, 0, 0)',
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <div className="rounded-lg shadow-lg bg-white max-w-full cursor-pointer">
                <div className="relative">
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-full h-[400px] object-cover rounded-t-lg"
                    style={{ transform: 'translateZ(0)' }}
                  />
                  <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 px-6 py-4 rounded-xl backdrop-blur-lg border border-white/30 bg-white/30 space-y-1 text-left min-w-[85%]">
                    <div className="text-white flex gap-1 mb-4">
                      {Array.from({ length: card.stars }, (_, i) => (
                        <Star fill="#fff" strokeWidth={0} key={i} />
                      ))}
                    </div>
                    <div className="text-3xl font-semibold text-white mb-12">
                      {card.name}
                    </div>
                    <div className="text-white text-[18px] font-semibold">
                      {card.region} Region
                    </div>
                    <div className="text-white text-base font-medium">
                      {card.listings} Listings
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
          className="p-3 rounded-full border border-bSecondary bg-white text-[##717680]"
        >
          <img src={leftArrow} alt="Previous" className="w-3 h-3" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentSlide === cards?.length - slidesToShow} // **Updated for dynamic slidesToShow**
          className="p-3 rounded-full border border-bSecondary bg-white text-[##717680]"
        >
          <img src={rightArrow} alt="Next" className="w-3 h-3" />
        </button>
      </div>

      <button className="py-2 px-4 min-w-max sm:w-1/5 rounded-lg bg-black text-white whitespace-nowrap">
        View all Regional Partners
      </button>
    </div>
  );
};

export default RegionalPartnersCarousel;
