import { useContext, useState } from 'react';
import { ChevronLeft } from 'lucide-react';
// import { ChevronLeft, ChevronDown } from 'lucide-react';
import SelectComponent from '@/components/SelectComponent.jsx';
import Input from '@/components/ui/Input.jsx';
import useFormHook from '@/hooks/useFormHook.jsx';
import Button from '@/components/ui/Button.jsx';
import { openSidesOptions } from '@/pages/property/propertyFormConfig.js';
import PropertySidebar from './PropertySidebar.jsx';
import { useNavigate } from 'react-router-dom';
import { PropertyDetailsContext } from '@/context/property/PropertyContextProvider.jsx';

const DetailsForm = ({
  heading,
  subHeading,
  formConfig,
  formHeading,
  isOpenSidesRequired = false,
  nextPath,
  stepIndex,
}) => {
  const { register, handleSubmit } = useFormHook();
  const { handleSteps, handleStepsBack } = useContext(PropertyDetailsContext);
  const [selectedOpenSides, setSelectedOpenSides] = useState([]);
  const navigate = useNavigate();
  function onSubmit(data) {
    console.log(data);
  }

  // Function to render the appropriate field component based on the field type

  const renderField = field => {
    switch (field.type) {
      case 'text':
        return (
          <Input
            register={register}
            name={field.name}
            type="text"
            placeholder={field.placeholder}
            className="placeholder:text-base placeholder:pl-1 w-full"
          />
        );
      case 'select':
        return (
          <SelectComponent
            className={`w-${field.width || 'full'}`}
            options={field.options}
            placeholder={field.placeholder}
          />
        );
      case 'size-input':
        return (
          <div className="flex gap-2 ">
            <SelectComponent
              {...register('sizeUnit')}
              className="w-24"
              options={field.options}
              placeholder={field.placeholder}
            />
            <Input
              register={register}
              type="text"
              className="w-full m-0"
              name="sizeUnit"
              isLabelRequired={false}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Main Content */}
      <div className="flex gap-8">
        {/* Sidebar */}
        <PropertySidebar />
        {/* Form Content */}
        <div className="flex-1">
          <div className="mb-6">
            <button
              className="flex items-center text-primary font-bold text-base mb-3 hover:text-gray-900"
              onClick={() => {
                handleStepsBack(stepIndex);
                navigate(-1);
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                    {renderField(field)}
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
              onClick={() => {
                console.log(stepIndex, 'stepIndex');
                handleSteps(stepIndex);
                navigate(nextPath);
              }}
            >
              Continue
            </Button>
          </form>
        </div>
        {/* Form Content */}
      </div>
    </div>
  );
};

export default DetailsForm;
