import HomeCenterImg from './images/HomeCenterImg.svg';

function HomeCenterImage() {
  return (
    <div className="mx-4 sm:mx-10 md:mx-20 mt-8 sm:mt-10 md:mt-12">
      <img
        src={HomeCenterImg}
        alt="Home Center"
        className="w-full max-w-md sm:max-w-lg md:max-w-6xl mx-auto"
      />
    </div>
  );
}

export default HomeCenterImage;
