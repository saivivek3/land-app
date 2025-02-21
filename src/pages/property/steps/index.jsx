import { useContext } from 'react';
import { PropertyDetailsContext } from '@/context/property/PropertyContextProvider';
import {
  LocationDetailsConfig,
  OwnerDetailsConfig,
  propertyDetailsConfig,
} from '../propertyFormConfig';
import LocationMap from './LocationMap';
import PropertyDocumentLayout from '@/layout/PropertyDocumentLayout';
import ImageUploadGallery from './ImageUploadGallery';
import PropertySidebar from '../PropertySidebar';
import PropertyDocuments from '../PropertyDocuments';
import CreatePropertyConfirmation from './CreatePropertyConfirmation';
import { FormProvider, useForm } from 'react-hook-form';
import { usePost } from '@/apis';
import { details, DetailsForm } from './DetailsForm';

function CreatePropertyLayout() {
  const methods = useForm({
    // defaultValues: {
    //   // Add default empty values for all possible fields
    //   sizeUnit: '',
    // },
  });
  const { control, handleSubmit, watch, setValue } = methods;
  const {
    handleSteps,

    handleStepsIncrease,
  } = useContext(PropertyDetailsContext);

  const { stepIndex } = useContext(PropertyDetailsContext);
  const postLandBasicDetails = usePost(
    'landBasicDetails',
    `/Land/AddBasicDetails`,
    {
      onSuccess: data => {
        console.log(data, 'data');
      },
    },
  );

  async function onSubmit(data) {
    console.log(stepIndex, 'stepIndex');
    if (stepIndex === 3) {
      const stateObj = details.states.find(state => state.value === data.state);
      const districtObj = details.districts.find(
        district => district.value === data.district,
      );
      const mandalObj = details.mandals.find(
        mandal => mandal.value === data.mandal,
      );
      const villageObj = details.villages.find(
        village => village.value === data.village,
      );
      console.log(data, 'data');
      const payload = {
        landCategory: 1,
        landName:
          '0.32 Acres of verified land in Vizianagaram district for sale at ₹3 Cr /acre',
        description: 'Approach Road: 40 ft blacktop road, Soil Type: Red',
        address: 'NELLIMARLA, Vizianagaram (dt)',
        state: 1,
        district: 4,
        mandal: 4,
        village: 4,
        // pincode: 535002,
        sizeInAcres: data.sizeInAcres,
        waterAvailability: null,
        roadDistance: null,
        soilType: null,
        // areaInSqft: null,
        pricePerAcre: Number(data.pricePerAcre),
        totalPrice: Number(data.totalPrice),
        latitude: data.latitude,
        longitude: data.longitude,

        landCategoryId: null,
        surveyNumber: data.surveyNumber,
        title: data.title,
        addedUserId: '112588213103387744686',
        kathaNumber: Number(data.kathaNumber),

      };
      await postLandBasicDetails.mutateAsync(payload);
    }
    //
    handleSteps(stepIndex);
    handleStepsIncrease(stepIndex);
  }

  function renderForm() {
    switch (stepIndex) {
      case 1:
        return (
          <DetailsForm
            stepIndex={1}
            heading="Property Details"
            control={control}
            formHeading="Property Details"
            subHeading={
              'An accurate information helps you connect with right buyers'
            }
            formConfig={propertyDetailsConfig}
            handleSubmit={handleSubmit}
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
            control={control}
            handleSubmit={handleSubmit}
          />
        );

      case 3:
        return (
          <LocationMap
            stepIndex={3}
            control={control}
            handleSubmit={handleSubmit}
            setValue={setValue}
            onSubmit={onSubmit}
          />
        );

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
            control={control}
            handleSubmit={handleSubmit}
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
        <div className="w-full p-6 bg-white flex flex-col md:flex-row gap-6 max-w-5xl mx-auto rounded-lg shadow-sm">
          {stepIndex !== 7 && <PropertySidebar />}

          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {renderForm()}
            </form>
          </FormProvider>
        </div>
      </div>
      {stepIndex === 7 && <CreatePropertyConfirmation />}
    </>
  );
}

export default CreatePropertyLayout;
