import { useContext, useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import Input from '@/components/ui/Input.jsx';
import Button from '@/components/ui/Button.jsx';
import { openSidesOptions } from '@/pages/property/propertyFormConfig.js';
import { useNavigate } from 'react-router-dom';
import { PropertyDetailsContext } from '@/context/property/PropertyContextProvider.jsx';
import { DynamicSelect } from '@/components/DynamicSelect';
import { useGet } from '@/apis';
let details;

const DetailsForm = ({
  heading,
  subHeading,
  formConfig,
  formHeading,
  isOpenSidesRequired = false,
  stepIndex,
  control,
  handleSubmit,
}) => {
  // Initialize form methods with default values to prevent undefined errors

  const {
    handleSteps,
    handleStepsBack,
    handleStepsIncrease,
    handleStepsDecrease,
  } = useContext(PropertyDetailsContext);

  const [selectedOpenSides, setSelectedOpenSides] = useState([]);
  const navigate = useNavigate();

  const { data: allStates } = useGet('allStates', '/GeoLocation/GetAllStates', {
    // 5 minutes
  });
  const { data: allDistricts } = useGet(
    'allDistricts',
    '/GeoLocation/GetAllDistricts',
  );
  const { data: allMandals } = useGet(
    'allMandals',
    '/GeoLocation/GetAllMandals',
  );

  const { data: allVilages } = useGet(
    'allVillages',
    '/GeoLocation/GetAllVillages',
  );

  details = {
    states: allStates
      ? allStates?.map(state => ({
          id: state.id,
          label: state.name,
          value: state.name,
        }))
      : [],
    districts: allDistricts
      ? allDistricts?.map(district => ({
          id: district.id,
          label: district.name,
          value: district.name,
        }))
      : [],
    mandals: allMandals
      ? allMandals?.map(mandal => ({
          id: mandal.id,
          label: mandal.name,
          value: mandal.name,
        }))
      : [],
    villages: allVilages
      ? allVilages?.map(village => ({
          id: village.id,
          label: village.name,
          value: village.name,
        }))
      : [],
    sizeInAcres: [
      { value: 'sqft', label: 'sq ft' },
      { value: 'acres', label: 'acres' },
    ],
    propertyType: [
      { value: 'agricultural', label: 'Agricultural' },
      { value: 'residential', label: 'Residential' },
      { value: 'commercial', label: 'Commercial' },
    ],
  };

  // Function to render the appropriate field component based on the field type
  const renderField = field => {
    switch (field.type) {
      case 'text':
        return (
          <Input
            name={field.name}
            type="text"
            placeholder={field.placeholder}
            className="placeholder:text-base placeholder:pl-1 w-full"
            control={control}
          />
        );
      case 'select':
        return (
          <DynamicSelect
            className={`w-${field.width || 'full'}`}
            name={field.name || ''}
            options={details[field.optionName] || []}
            placeholder={field.placeholder || ''}
            control={control}
          />
        );
      case 'size-input':
        return (
          <div className="flex gap-2 items-center">
            <DynamicSelect
              className={`w-${field.width || 'full'}`}
              name="landSize"
              control={control}
              options={details[field.optionName]}
              placeholder={field.placeholder}
            />
            <Input
              name={field.name}
              type="text"
              className="w-full m-0 py-1"
              isLabelRequired={false}
              control={control}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex-1">
      <div className="mb-6">
        <button
          className="flex items-center text-primary font-bold text-base mb-3 hover:text-gray-900"
          onClick={() => {
            handleStepsBack(stepIndex);
            handleStepsDecrease(stepIndex);

            if (stepIndex === 1) {
              navigate('/create-property/verification');
              localStorage.removeItem('steps');
            }
          }}
        >
          <ChevronLeft className="w-5 h-5 mr-1 " />
          Back to
        </button>
        <h2 className="text-3xl font-bold mt-2 mb-2">{heading}</h2>
        <p className=" text-[#575F6E] text-sm">{subHeading}</p>
      </div>
      <div className="border border-[#D9D9D9] text-[18px] "></div>
      <h1 className="text-primary font-semibold text-base m-2 my-4">
        {formHeading}
      </h1>

      {formConfig.sections.map(section => (
        <div key={section.id} className={`grid ${section.grid} gap-6`}>
          {section.fields.map(field => (
            <div key={field.name}>
              <label className="block text-[13px] font-medium text-primary mb-1">
                {field.label}
                {field.required && (
                  <span className="text-brandTertiary">*</span>
                )}
              </label>
              {field && field.name ? renderField(field) : null}
            </div>
          ))}
        </div>
      ))}
      <div className="border border-[#D9D9D9]"></div>
      {isOpenSidesRequired && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            No. of open sides
          </label>
          <div className="flex gap-4">
            {openSidesOptions.map(num => (
              <button
                key={num}
                type="button"
                onClick={() => {
                  setSelectedOpenSides(num);
                }}
                className={`w-12 h-12 rounded-full flex items-center justify-center border border-bQuinary text-primary text-sm ${
                  selectedOpenSides === num ? 'bg-blightMode' : 'bg-white'
                }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>
      )}

      <Button
        type="submit"
        className="w-1/2 bg-primary rounded-lg text-base font-semibold hover:bg-primary/50"
      >
        Continue
      </Button>
    </div>
  );
};

export { details, DetailsForm };
