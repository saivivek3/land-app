function Features({ iconSrc, features, iconAlt }) {
  return (
    <div>
      <div className="flex flex-col mt-4 ml-4 gap-4">
        {features.map((feature, index) => (
          <div key={index} className="flex gap-2 items-center">
            <img src={iconSrc} alt={iconAlt} className="w-5 h-5" />
            <div className="text-gray-800">{feature}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
