import { useContext } from 'react';

import { PropertyDetailsContext } from '@/context/property/PropertyContextProvider';
import {
  LocationDetailsConfig,
  OwnerDetailsConfig,
  propertyDetailsConfig,
} from '../propertyFormConfig';

import DetailsForm from './DetailsForm';
import LocationMap from './LocationMap';
import PropertyDocumentLayout from '@/layout/PropertyDocumentLayout';
import ImageUploadGallery from './ImageUploadGallery';
import PropertySidebar from '../PropertySidebar';
import PropertyDocuments from '../PropertyDocuments';
import CreatePropertyConfirmation from './CreatePropertyConfirmation';

function CreatePropertyLayout() {
  const { stepIndex } = useContext(PropertyDetailsContext);
  function renderForm() {
    switch (stepIndex) {
      case 1:
        console.log('switch was called');
        return (
          <DetailsForm
            stepIndex={1}
            heading="Property Details"
            isOpenSidesRequired
            formHeading="Property Details"
            subHeading={
              'An accurate information helps you connect with right buyers'
            }
            formConfig={propertyDetailsConfig}
          />
        );

      case 2:
        return (
          <DetailsForm
            stepIndex={2}
            heading={'Where is the Property located?'}
            formHeading="Location Details"
            subHeading={
              'An accurate location helps you connect with right buyers'
            }
            formConfig={LocationDetailsConfig}
          />
        );

      case 3:
        return <LocationMap stepIndex={3} />;

      case 4:
        return (
          <PropertyDocumentLayout stepIndex={4}>
            <ImageUploadGallery />
          </PropertyDocumentLayout>
        );

      case 5:
        return (
          <DetailsForm
            stepIndex={5}
            heading={'Owner Details'}
            formHeading=""
            subHeading={'Owner information'}
            formConfig={OwnerDetailsConfig}
          />
        );

      case 6:
        return (
          <PropertyDocumentLayout stepIndex={6}>
            <PropertyDocuments />
          </PropertyDocumentLayout>
        );

      default:
        return null;
    }
  }
  return (
    <>
      <div className="flex gap-4">
        <div className="w-full  p-6 bg-white flex gap-6  max-w-5xl mx-auto  rounded-lg shadow-sm">
          {stepIndex !== 7 && <PropertySidebar />}
          {renderForm()}
        </div>
      </div>
      {stepIndex === 7 && <CreatePropertyConfirmation />}
    </>
  );
}

export default CreatePropertyLayout;
