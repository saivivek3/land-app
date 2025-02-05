import { useState } from 'react';

function PropertyMoreDetails() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    {
      label: 'Basic Details',
      content: (
        <div className="p-6 bg-customGray border border-gray-300 rounded-md">
          <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-6 text-end">
            {/* Price and details container */}
            <div className="flex flex-col sm:w-[260px] text-start">
              <div>Price Details</div>
              <div>Address</div>
              <div>Distance From ORR</div>
              <div>Direction</div>
              <div>Loan Offered</div>
            </div>

            <div className="flex flex-col sm:w-[600px] text-start">
              <div>Rs 1.2 CR</div>
              <div>Premium 2-Acre Land Near Shamshabad Airport</div>
              <div>16 KM</div>
              <div>Shankarpally road, Chevella highway</div>
              <div>Estimated EMI: ₹67652</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: 'Documents',
      content: (
        <div className="p-6 bg-customGray border border-gray-300 rounded-md">
          <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-6 text-end">
            {/* Price and details container */}
            <div className="flex flex-col sm:w-[260px] text-start">
              <div>Price Details</div>
              <div>Address</div>
              <div>Distance From ORR</div>
              <div>Direction</div>
              <div>Loan Offered</div>
            </div>

            <div className="flex flex-col sm:w-[600px] text-start">
              <div>Rs 2.5 CR</div>
              <div>Premium 2-Acre Land Near Karimnagar</div>
              <div>16 KM</div>
              <div>Karimnagar road, Karimnagar highway</div>
              <div>Estimated EMI: ₹57652</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: 'Pricing & Other',
      content: (
        <div className="p-6 bg-customGray border border-gray-300 rounded-md">
          <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-6 text-end">
            {/* Price and details container */}
            <div className="flex flex-col sm:w-[260px] text-start">
              <div>Price Details</div>
              <div>Address</div>
              <div>Distance From ORR</div>
              <div>Direction</div>
              <div>Loan Offered</div>
            </div>

            <div className="flex flex-col sm:w-[600px] text-start">
              <div>Rs 3.2 CR</div>
              <div>Premium 2-Acre Land Near Yadgirigutta</div>
              <div>16 KM</div>
              <div>Yadgirigutta road, Yadgiri highway</div>
              <div>Estimated EMI: ₹87652</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: 'Owner Details',
      content: (
        <div className="p-6 bg-customGray border border-gray-300 rounded-md">
          <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-6 text-end">
            {/* Price and details container */}
            <div className="flex flex-col sm:w-[260px] text-start">
              <div>Price Details</div>
              <div>Address</div>
              <div>Distance From ORR</div>
              <div>Direction</div>
              <div>Loan Offered</div>
            </div>

            <div className="flex flex-col sm:w-[600px] text-start">
              <div>Rs 4.2 CR</div>
              <div>Premium 2-Acre Land Near Begumpet Airport</div>
              <div>16 KM</div>
              <div>Begumpet road, Chevella highway</div>
              <div>Estimated EMI: ₹97652</div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 2xl:mx-24 mt-5 ">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
          More Details
        </h2>
        <div className="flex md:gap-6 gap-5 border-b mt-5 flex-wrap sm:flex-nowrap">
          {tabs.map((tab, index) => (
            <p
              key={index}
              onClick={() => setActiveTab(index)}
              className={`cursor-pointer text-[10px] gap-3 font-semibold sm:text-lg ${
                activeTab === index
                  ? 'text-blue-500 border-b-2 border-blue-500 font-semibold'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              {tab.label}
            </p>
          ))}
        </div>
        <div>{tabs[activeTab].content}</div>
      </div>
    </div>
  );
}

export default PropertyMoreDetails;
