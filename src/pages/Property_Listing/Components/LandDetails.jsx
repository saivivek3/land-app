import LandCards from '@/components/LandCards';

function LandDetails({ title, landsData, link }) {
  return (
    <div className="px-4 md:mx-10">
      <div className="mt-6 md:mb-0 mb-3 font-semibold md:text-lg md:ml-6">
        {title}
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:p-6">
          {landsData?.map(item => (
            <LandCards key={item.landId} item={item} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandDetails;
