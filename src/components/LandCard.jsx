// import Land from "../Components/images/big-land-land.jpg";
const LandCard = ({ imageUrl, altText, className }) => {
  return (
    <div className={`land-card ${className}`}>
      <img src={imageUrl} alt={imageUrl} className="land-card-img" />
    </div>
  );
};

export default LandCard;
