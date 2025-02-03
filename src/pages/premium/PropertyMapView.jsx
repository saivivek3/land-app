import { Heart, ChevronLeft, ChevronRight, Map, List } from 'lucide-react';
import { Card } from '@/components/ui/card';

import Button from '@/components/ui/Button.jsx';
import Pagination from '@/components/ui/Pagination.jsx';
import SelectComponent from '@/components/SelectComponent';
import { DatePickerWithRange } from '@/components/DateRangePicker';
import ListViewIcon from '@/assets/list.svg';
import FilterIcon from '@/assets/filter-icon.svg';
import SearchIcon from '@/assets/search.svg';
import MarkerPin from '@/assets/marker-pin.svg';
import HomeImage from '@/assets/images/image.png';
import VerifiedIcon from '@/assets/verified-icon.svg';
import StarRating from './StarRating';
import SquareFeetIcon from '@/assets/sqftpin.svg';
import HeartIcon from '@/assets/heart.svg';
import RightIcon from '@/assets/arrow-right.svg';
import LeftIcon from '@/assets/arrow-left.svg';
import GoogleMapComponent from '@/components/GoogleMap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PropertyMapView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const properties = [
    {
      id: 1,
      title: '32 Guntas verified land, located 32 km',
      company: 'Vishnupriya Ventures',
      location: 'Kandukar',
      area: '2200sqft',
      price: '1.2 CR',
      rating: 4.9,
      reviews: 20,
      image: HomeImage,
    },
    {
      id: 1,
      title: '32 Guntas verified land, located 32 km',
      company: 'Vishnupriya Ventures',
      location: 'Kandukar',
      area: '2200sqft',
      price: '1.2 CR',
      rating: 4.9,
      reviews: 20,
      image: HomeImage,
    },
    {
      id: 1,
      title: '32 Guntas verified land, located 32 km',
      company: 'Vishnupriya Ventures',
      location: 'Kandukar',
      area: '2200sqft',
      price: '1.2 CR',
      rating: 4.9,
      reviews: 20,
      image: HomeImage,
    },
  ];

  const totalPages = 20;

  const navigate = useNavigate();

  return (
    <div className="mx-auto max-w-7xl px-6 py-2 ">
      <div className="flex gap-4 justify-between">
        <section className="flex-1 min-w-fit ">
          <div className="flex justify-between items-center mb-3">
            <div>
              <h1 className="text-xl font-semibold text-primary">
                Property Map View
              </h1>
              <p className="text-tertiary text-sm">
                Borem ipsum dolor sit amet
              </p>
            </div>

            <div className="flex gap-2">
              <Button className="px-5 border rounded-lg  border-bPrimary  bg-white min-w-fit  text-primary">
                Share
              </Button>
              <Button className=" px-2 text-white border border-bPrimary rounded-md bg-primary flex items-center gap-2 min-w-fit">
                <span className="text-lg">★</span> Save search
              </Button>
            </div>
          </div>

          <div className="flex gap-4 items-center mb-3">
            <SelectComponent
              placeholder="Kandukur, TS"
              options={[
                { id: 1, label: 'Kandakur', value: 'kandakur' },
                { id: 2, label: 'Kandakur', value: 'kandakur' },
              ]}
            />

            <DatePickerWithRange />
            <SelectComponent
              placeholder="Any Price"
              options={[{ id: 1, label: 'Any Price', value: 'Any Price' }]}
            />

            <Button
              className="border rounded-lg px-4  py-2 min-w-fit bg-white text-primary border-bPrimary hover:bg-white/50 mt-0  "
              onClick={() => navigate('/all-lands')}
            >
              <div className="flex items-center gap-2">
                <img
                  src={ListViewIcon}
                  alt="lst-view-icon"
                  className="h-5 w-5"
                />
                <span className="text-xs">List View </span>
              </div>
            </Button>
          </div>

          <Button className="border rounded-lg px-4 py-2 bg-white text-primary border-bPrimary hover:bg-white/50 mt-0 max-w-fit mb-2">
            <div className="flex gap-2 items-center">
              <img src={FilterIcon} alt="filter-icon" />
              <span>More filters</span>
            </div>
          </Button>

          <div className="flex gap-2 items-center mb-3">
            <div className="relative min-w-fit flex-1 ">
              <input
                type="search"
                placeholder="Search"
                className="w-full border rounded-lg px-4 py-2 shadow-xs border-bPrimary placeholder:[ #717680] placeholder:pl-7"
              />
              <img
                src={SearchIcon}
                alt="search-Icon"
                className="absolute top-[10px] left-5 "
              />
            </div>
            <div>
              <Button className="border rounded-md px-4 py-2 text-primary font-semibold border-bPrimary bg-white mt-0 min-w-36">
                Clear
              </Button>
            </div>
            <div>
              <Button className="border rounded-md px-4 py-2 text-white font-semibold border-bPrimary bg-primary mt-0 min-w-36">
                Search
              </Button>
            </div>
          </div>

          <div className="flex justify-between mb-3 ">
            <div className="flex gap-0">
              <Button className="border border-[#D5D7DA] text-xs font-[600]  bg-[#FAFAFA] hover:bg-[#FAFAFA]  rounded-r-none hover:opacity-50 text-primary min-w-fit px-3 py-2">
                Sort by date
              </Button>
              <Button className="border border-[#D5D7DA] text-xs  hover:opacity-50 hover:bg-white font-[500] rounded-l-none min-w-fit bg-white text-primary px-3 py-2">
                Sort by price
              </Button>
            </div>

            <div className="flex">
              <Button className="border border-[#D5D7DA]  hover:opacity-50 hover:bg-[#FAFAFA]  text-primary  p-1  bg-[ #FAFAFA] min-w-10 justify-center flex items-center rounded-r-none">
                <img
                  src={ListViewIcon}
                  alt="list-view"
                  className="text-primary h-4 w-4  rounded-r-none"
                />
              </Button>
              <Button className="border border-[#D5D7DA]  hover:opacity-50 hover:bg-white bg-white text-primary  p-1 w-2 min-w-10 flex justify-center items-center  rounded-l-none">
                <img src={MarkerPin} alt="marker-pin" className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid gap-6 mb-6">
            {properties.map(property => (
              <Card
                key={property.id}
                className="flex shadow-sm border border-bSecondary bg-white rounded-xl px-4 py-5 cursor-pointer"
                onClick={() =>
                  navigate(
                    `/premium-property/single-property-view/${property.id}`,
                  )
                }
              >
                <div className="rounded-xl">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-64 h-32 object-cover px-4 "
                  />
                </div>

                <div className="flex-1 ">
                  <div className="flex justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-buttontertiary text-sm font-semibold">
                        <img
                          src={VerifiedIcon}
                          alt=" verified-icon"
                          className="h-5 w-5"
                        />
                        <span className=" rounded-full w-2 h-2" />
                        {property.company}
                      </div>
                      <h3 className="text-base font-semibold mt-2 text-primary ">
                        {property.title}
                      </h3>
                    </div>
                    <div className="border border-[#d6bbfb] bg-white rounded-lg p-3 h-auto cursor-pointer shadow-lg">
                      <img
                        src={HeartIcon}
                        alt="heart-icon"
                        className="h-auto w-6"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <section>
                      <div className="flex items-center gap-1 mt-2">
                        <StarRating rating={property.reviews} className="" />
                        <span className="text-tertiary text-sm">
                          {property.reviews} reviews
                        </span>
                      </div>
                      <div className="mt-4 flex items-center gap-6">
                        <div className="flex items-center gap-2">
                          <img
                            src={MarkerPin}
                            alt="MarkerPin"
                            className="text-bQuinary"
                          />
                          <span className="text-tertiary font-medium text-xs">
                            {property.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <img
                            src={SquareFeetIcon}
                            alt="squarefeet"
                            className='"text-bQuinary'
                          />
                          <span className="text-tertiary font-medium text-xs">
                            {property.area}
                          </span>
                        </div>
                      </div>
                    </section>

                    <section className="mb-2 flex">
                      <div className="flex gap-2 items-center">
                        <span className="text-primary text-base font-semibold ">
                          {property.price}
                        </span>
                        <span className="text-tertiary text-sm">Price</span>
                      </div>
                    </section>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="flex gap-2 ">
            <Button
              className="bg-transparent rounded-none border-none outline-none  hover:bg-transparent text-primary text-sm mt-0 shadow-none justify-start"
              childrenClassName="justify-start"
            >
              <div className="flex items-center  gap-2">
                <img src={LeftIcon} alt="left-icon" className="text-white" />
                <span> Previous</span>
              </div>
            </Button>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
            <Button
              className="bg-transparent rounded-none border-none outline-none   hover:bg-transparent hover:bg-none text-primary text-sm mt-0 shadow-none"
              childrenClassName="justify-end"
            >
              <div className="flex items-center gap-2">
                <span>Next</span>
                <img src={RightIcon} alt="right-icon" className="text-white" />
              </div>
            </Button>
          </div>
        </section>

        <GoogleMapComponent oneMarker={false} mapWidth="50%" />
      </div>
    </div>
  );
};

export default PropertyMapView;
