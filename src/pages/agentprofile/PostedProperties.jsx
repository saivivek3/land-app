import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Button from '@/components/ui/Button.jsx';
import { Bookmark, MapPin, ArrowRightIcon } from 'lucide-react';
import ArrowLeftIcon from '@/assets/arrow-left.svg';

const PropertyCard = ({ property }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <div className="relative">
      <img
        src={property.imageUrl || '/api/placeholder/400/250'}
        alt={property.title}
        className="w-full h-48 object-cover"
      />
      <button className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow-sm hover:bg-gray-50">
        <Bookmark className="w-4 h-4 text-gray-600" />
      </button>
    </div>

    <div className="p-4">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-semibold text-xs text-primary">
            {property.title}
          </h3>
          <div className="flex items-center text-gray-500 text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-[10px] text-primary ">
              {property.location}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mt-4 text-sm">
        <div className="flex items-center gap-1">
          <span className="font-bold text-primary text-xs pr-3 border-r-[1px] border-primary">
            ₹{property.price} CR
          </span>
        </div>
        <div className="flex items-center gap-1 border-r-1 ">
          <span className="font-bold text-primary text-xs pr-3 border-r-[1px] border-primary">
            {property.area} sqft
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="font-bold text-primary text-xs pr-3 border-r-[1px] border-primary">
            ₹{property.pricePerSqft} per sqft
          </span>
        </div>
      </div>
    </div>
  </div>
);

const PropertiesGrid = ({ properties }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {properties.map((property, index) => (
      <PropertyCard key={index} property={property} />
    ))}
  </div>
);

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-between items-center mt-8">
    <Button
      disabled={currentPage === 1}
      onClick={() => onPageChange(currentPage - 1)}
      className="rounded-lg shadow-sm border max-w-24 border-b-disabledDark bg-white text-secondary text-xs font-semibold cursor-pointer"
      iconUrl={ArrowLeftIcon}
    >
      Previous
    </Button>

    <div className="flex gap-2">
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={`text-tertiary text-xs font-semibold cursor-pointer w-8 h-8 p-0 flex-1 bg-white mx-auto border-none hover:text-[#252b37] hover:bg-[#fafafa] ${currentPage === index + 1 && 'bg-[#fafafa]'} `}
        >
          {index + 1}
        </Button>
      ))}
    </div>

    <Button
      variant="ghost"
      disabled={currentPage === totalPages}
      onClick={() => onPageChange(currentPage + 1)}
      className="rounded-lg shadow-sm border max-w-24 border-b-disabledDark bg-white text-secondary text-xs font-semibold cursor-pointer"
    >
      Next
    </Button>
  </div>
);

const PostedProperties = () => {
  const [currentPage, setCurrentPage] = React.useState(1);

  // Sample data - replace with actual data from your API
  const properties = [
    {
      title: 'Janapriya Ventures',
      location: 'Shamshadad, Hyderabad',
      price: '1.2',
      area: '2200',
      pricePerSqft: '1500',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1697644693174-216346d85792?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Janapriya Ventures',
      location: 'Shamshadad, Hyderabad',
      price: '1.2',
      area: '2200',
      pricePerSqft: '1500',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1697644693174-216346d85792?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Janapriya Ventures',
      location: 'Shamshadad, Hyderabad',
      price: '1.2',
      area: '2200',
      pricePerSqft: '1500',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1697644693174-216346d85792?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Janapriya Ventures',
      location: 'Shamshadad, Hyderabad',
      price: '1.2',
      area: '2200',
      pricePerSqft: '1500',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1697644693174-216346d85792?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Janapriya Ventures',
      location: 'Shamshadad, Hyderabad',
      price: '1.2',
      area: '2200',
      pricePerSqft: '1500',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1697644693174-216346d85792?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Janapriya Ventures',
      location: 'Shamshadad, Hyderabad',
      price: '1.2',
      area: '2200',
      pricePerSqft: '1500',
      imageUrl:
        'https://plus.unsplash.com/premium_photo-1697644693174-216346d85792?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="p-6  ">
      <h2 className="text-2xl font-semibold mb-6">Properties</h2>

      <Tabs defaultValue="latest" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="latest">Latest Properties</TabsTrigger>
          <TabsTrigger value="recent">Recent Properties</TabsTrigger>
        </TabsList>

        <TabsContent value="latest">
          <PropertiesGrid properties={properties} />
        </TabsContent>

        <TabsContent value="recent">
          <PropertiesGrid properties={properties} />
        </TabsContent>
      </Tabs>

      <Pagination
        currentPage={currentPage}
        totalPages={4}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PostedProperties;
