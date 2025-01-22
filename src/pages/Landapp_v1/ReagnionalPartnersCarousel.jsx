import { useState } from "react";
import cardOneImg from "./images/CardOneImg.jpg";
import CardSecondImg from "./images/CardSecondImg.jpg";
import CardThirdImg from "./images/CardThirdImg.jpg";
import CardFourthImg from "./images/CardFourthImg.jpg";
import CardFifthImg from "./images/CardFifthImg.jpg";
import CardSixthImg from "./images/CardSixthImg.jpg";
import starImg from "./images/emptyStar.svg";
import leftArrow from "./images/leftArrow.svg";
import rightArrow from "./images/rightArrow.svg";

function EachCard({ cards }) {
  const [activeCard, setActiveCard] = useState(0);
  const [direction, setDirection] = useState("next");

  const handleNext = () => {
    setDirection("next");
    setActiveCard((prevCard) => (prevCard + 1) % cards.length);
  };

  const handlePrevious = () => {
    setDirection("previous");
    setActiveCard((prevCard) =>
      prevCard === 0 ? cards.length - 1 : prevCard - 1
    );
  };

  const cardStyle = {
    transform:
      direction === "next"
        ? `translateX(-${activeCard * 10}%)`
        : `translateX(${(cards.length - activeCard - 1) * 10}%)`,
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div className="flex flex-col space-y-6 ml-20 overflow-hidden translate-x-20">
      <div className="mr-auto">
        <div className="font-semibold text-2xl">Top Regional Partners</div>
        <p className="text-sm text-gray-600 mt-2">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      {/* Card Display */}
      <div className="flex space-x-4 max-w-7xl" style={cardStyle}>
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg mt-3 bg-white transition-transform duration-300 w-96 relative"
          >
            <img
              src={card.image}
              alt="Card"
              className="w-full h-72 object-cover rounded-lg"
            />
            {/* Always Display Transparent Content */}
            <div className="mx-4 rounded-md absolute inset-x-0 bottom-0 px-6 py-2 backdrop-blur-sm bg-white/30 mb-5">
              {/* Stars */}
              <div className="flex gap-1 mb-1">
                {Array.from({ length: card.stars }).map((_, starIndex) => (
                  <img
                    key={starIndex}
                    src={starImg}
                    alt="Star"
                    className="w-3 h-3"
                  />
                ))}
              </div>
              {/* Card Details */}
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
      {/* Navigation Buttons */}
      <div className="flex space-x-4 mr-auto">
        <button
          onClick={handlePrevious}
          className="px-3 py-3 rounded-full border border-gray-300 text-white flex items-center justify-center"
        >
          <img src={leftArrow} alt="leftArrow" className="w-3 h-3" />
        </button>
        <button
          onClick={handleNext}
          className="px-3 py-3 rounded-full border border-gray-300 text-white flex items-center justify-center"
        >
          <img src={rightArrow} alt="rightArrow" className="w-3 h-3" />
        </button>
      </div>
      <button className="py-2 px-4 w-56 rounded-lg bg-black text-white">
        View all Regional Partners
      </button>
    </div>
  );
}

const RegionalPartnersCarousel = () => {
  const cards = [
    {
      image: cardOneImg,
      name: "Manikanta",
      region: "Vikarabad Reagion",
      listings: 140,
      stars: 5,
    },
    {
      image: CardSecondImg,
      name: "Manikanta",
      region: "Vikarabad Reagion",
      listings: 140,
      stars: 5,
    },
    {
      image: CardThirdImg,
      name: "Manikanta",
      region: "Vikarabad Reagion",
      listings: 140,
      stars: 5,
    },
    {
      image: CardFourthImg,
      name: "Manikanta",
      region: "Vikarabad Reagion",
      listings: 140,
      stars: 5,
    },
    {
      image: CardFifthImg,
      name: "Manikanta",
      region: "Vikarabad Reagion",
      listings: 140,
      stars: 5,
    },
    {
      image: CardSixthImg,
      name: "Manikanta",
      region: "Vikarabad Reagion",
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
