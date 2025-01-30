import { stepsArr } from '@/pages/property/propertyFormConfig';
import { createContext, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const PropertyDetailsContext = createContext(null);

function PropertyDetailsContextProvider({ children }) {
  // Combine initial state logic
  const [steps, setSteps] = useState(() => {

    const stored = localStorage.getItem('steps');
    return stored ? JSON.parse(stored) : stepsArr;
  });
    const navigate = useNavigate();
    

  const [stepIndex, setStepIndex] = useState(1);

  useEffect(() => {
    if (stepIndex === 1) {
      navigate('/create-property/verification');
      localStorage.removeItem('steps');
    }
  }, [stepIndex]);

  function handleStepsIncrease() {
    setStepIndex(prev => prev + 1);
  }

  function handleStepsDecrease() {
    setStepIndex(prev => prev - 1);
  }

  // For steps with an index less than or equal to the stepIndex, the step is marked as completed and inactive.
  // The step that immediately follows the current one (stepIndex + 1) is set to active and incomplete.

  const handleSteps = useCallback(
    stepIndex => {
      const updatedSteps = steps.map((step, index) => {
        if (index <= stepIndex) {
          return { ...step, active: false, completed: true };
        }
        if (index === stepIndex + 1) {
          return { ...step, active: true, completed: false };
        }
        return { ...step, active: false, completed: false };
      });

      setSteps(updatedSteps);
      localStorage.setItem('steps', JSON.stringify(updatedSteps));
    },
    [steps],
  );

  //   All steps before stepIndex - 1 are marked as active and completed.
  // All other steps are inactive and incomplete.

  const handleStepsBack = useCallback(
    stepIndex => {
      console.log('handleStepsBack called with stepIndex:', stepIndex);
      const updatedSteps = steps.map((step, index) => {
        if (index < stepIndex - 1) {
          return { ...step, active: true, completed: true };
        }
        if (index === stepIndex - 1) {
          return { ...step, active: true, completed: false };
        }
        return { ...step, active: false, completed: false };
      });
      setSteps(updatedSteps);
      localStorage.setItem('steps', JSON.stringify(updatedSteps));
    },
    [steps],
  );

  return (
    <PropertyDetailsContext.Provider
      value={{
        steps,
        handleSteps,
        handleStepsBack,
        stepIndex,
        handleStepsIncrease,
        handleStepsDecrease,
      }}
    >
      {children}
    </PropertyDetailsContext.Provider>
  );
}

export default PropertyDetailsContextProvider;
