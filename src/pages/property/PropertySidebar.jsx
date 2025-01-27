import cn from '@/lib/cn';
import PropertyScoreCard from './PropertyScoreCard.jsx';
import { useContext } from 'react';
import { PropertyDetailsContext } from '@/context/property/PropertyContextProvider';
import { useNavigate } from 'react-router-dom';

function PropertySidebar() {
  const { steps } = useContext(PropertyDetailsContext);
  const completedSteps = steps.filter(step => step.completed).length;
  const navigate = useNavigate();

  function handleClickedSteps(index) {
    switch (index) {
      case 0:
        navigate('/');
        break;
      case 1:
        navigate('/create-property/property-details');
        break;
      case 2:
        navigate('/create-property/property-located');
        break;
      case 3:
        navigate('/create-property/location-map');
        break;
      case 4:
        navigate('/create-property/photos');
        break;
      case 5:
        navigate('/create-property/owner-details');
        break;
      case 6:
        navigate('/create-property/property-documents');
        break;
      case 7:
        navigate('/create-property/confirmation');
        break;
      default:
        return null;
    }
  }
  return (
    <div className=" border  bg-disabledlight px-8 py-4">
      <div className="space-y-10">
        {steps?.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 cursor-pointer"
            onClick={() => handleClickedSteps(index)}
          >
            <div className="relative">
              <div
                className={`w-7 h-7 rounded-full flex justify-center items-center text-[12px] p-4  ${
                  step.completed
                    ? 'bg-[#7F56D9] text-white'
                    : step.active
                      ? '  ring-2 ring-[#9E77ED]'
                      : 'ring-2 ring-[#E9EAEB] text-gray-400'
                }`}
              >
                {step.completed ? (
                  '✓'
                ) : (
                  <div
                    className={cn(
                      ' h-6 w-6 rounded-full top-[4px] absolute  left-[4px]',
                      step.active ? 'bg-brandTertiary ' : 'bg-disabledlight',
                    )}
                  >
                    <div>
                      <div
                        className={cn(
                          'h-2 w-2 rounded-full  flex top-[8px] relative left-1/2 -translate-x-1/2 ',
                          step.active ? 'bg-white' : 'bg-[#D5D7DA]',
                        )}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={cn(
                    'absolute top-10 left-1/2 w-0.5 h-[30px] -translate-x-1/2 bg-gray-200',
                    step.completed ? 'bg-brandTertiary' : 'bg-[#E9EAEB]',
                  )}
                />
              )}
            </div>
            <div>
              <h3
                className={cn(
                  'font-semibold text-quaternary text-sm',
                  step.active && 'text-brandTertiary',
                  step.completed && 'text-secondary',
                )}
              >
                {step.title}
              </h3>
              <p
                className={cn(
                  'text-tertiary text-sm min-w-44',
                  step.active && 'text-brandTertiary',
                  step.completed && 'text-tertiary',
                )}
              >
                {step.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Property Score Card */}
      {/*prettier-ignore*/}
      <PropertyScoreCard
        score={Math.floor((completedSteps /( steps.length ) * 100))}
      />
    </div>
  );
}

export default PropertySidebar;
