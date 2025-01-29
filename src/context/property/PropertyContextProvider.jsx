import { stepsArr } from '@/pages/property/propertyFormConfig';
import { createContext, useCallback, useState } from 'react';

export const PropertyDetailsContext = createContext(null);

function PropertyDetailsContextProvider({ children }) {
  // Combine initial state logic
  const [steps, setSteps] = useState(() => {
    const stored = localStorage.getItem('steps');
    return stored ? JSON.parse(stored) : stepsArr;
  });

  // Remove redundant useEffect since initial state handles it

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

  return (
    <PropertyDetailsContext.Provider value={{ steps, handleSteps }}>
      {children}
    </PropertyDetailsContext.Provider>
  );
}

export default PropertyDetailsContextProvider;
