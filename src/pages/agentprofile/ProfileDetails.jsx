import React from 'react';
import { PhoneCallIcon } from 'lucide-react';
import Image1 from '@/assets/image-1.svg';
import Image2 from '@/assets/image-2.svg';
import Image3 from '@/assets/image-3.svg';

function ProfileDetails() {
  const ProfileCard = ({
    about,
    operatesIn,
    dealsIn,
    location,
    office,
    phone,
    email,
  }) => {
    return (
      <div className="grid grid-cols-2 gap-8 p-6 bg-white rounded-lg ">
        <div className="space-y-2 border-r-[1px]  border-[#d9d9d9] pr-6 ">
          <>
            <h2 className="text-sm font-medium text-primary ">About me</h2>
            <p className="text-tertiary text-sm">{about}</p>
          </>
          <>
            <h3 className="text-sm font-medium text-primary">Operates in</h3>
            <p className="text-tertiary text-sm">{operatesIn}</p>
          </>
          <>
            <h3 className="text-sm font-medium text-primary">Deals in</h3>
            <p className="text-tertiary text-sm">{dealsIn}</p>
          </>
        </div>

        <div className="mx-auto grid grid-cols-2 gap-2 items-center ">
          <div>
            <h3 className="text-tertiary font-medium  text-xs">Location</h3>
            <p className="text-[#42307d] text-sm font-semibold">{location}</p>
          </div>
          <div>
            <h3 className="text-tertiary font-medium  text-xs ">Office</h3>
            <p className="text-[#42307d] text-sm font-semibold">{office}</p>
          </div>
          <div>
            <h3 className="text-tertiary font-medium  text-xs ">Phone</h3>
            <p className="text-[#42307d] text-sm font-semibold">{phone}</p>
          </div>
          <div>
            <h3 className="text-tertiary font-medium  text-xs ">Email</h3>
            <p className="text-[#42307d] text-sm font-semibold">{email}</p>
          </div>

          <div>
            <div className="rounded-lg shadow-sm  border border-disabledDark bg-white flex gap-2 items-center cursor-pointer">
              <PhoneCallIcon
                size={32}
                className="text-[#42307d] p-2 cursor-pointer"
              />
              <p className="text-secondary text-xs font-semibold px-4 py-2">
                Whatapp
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const KeyAchievements = ({ achievements }) => {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Key Achievements</h2>
        <div className="grid grid-cols-3 gap-4 ">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-xl  shadow-sm border border-bSecondary "
            >
              <div className="flex gap-2 items-center justify-center">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="h-9 w-9 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="text-sm text-primary font-semibold">
                    {achievement.title}
                  </h3>
                  <p className="text-xs text-tertiary ">
                    {achievement.description}
                  </p>
                </div>
              </div>

              <p className="text-xs text-tertiary mt-4">{achievement.period}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div className="">
      {/* Profile Card Section */}
      <ProfileCard
        about="His in-depth understanding of land transactions, market trends, and personalized service has earned him the trust of numerous clients seeking reliable investment opportunities."
        operatesIn="Maheshwaram, Moinabad, Chevella, Shadnagar, Kothur, Bhongir & Narsingi"
        dealsIn="Original Booking, Agricultural & Non-agricultural properties"
        location="Karimnagar"
        office="MG Road, Karimnagar"
        phone="9454xxxxxx"
        email="pradeep@gmail.com"
      />

      {/* Key Achievements Section */}
      <KeyAchievements
        achievements={[
          {
            title: 'Top Sales Agent of Year (2023)',
            description: 'Benchmark for sales success',
            period: 'Jan 2023 - Dec 2023',
            image: Image1,
          },
          {
            title: 'Closed over 100 transactions',
            description: 'Benchmark for sales success',
            period: 'Jan 2021 - Dec 2024',
            image: Image2,
          },
          {
            title: 'Certified Specialist',
            description: 'Benchmark for sales success',
            period: 'Jan 2021 - Dec 2024',
            image: Image3,
          },
        ]}
      />
    </div>
  );
}

export default ProfileDetails;
