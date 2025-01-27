import { createContext, useCallback, useEffect, useState } from 'react';
import { stepsArr } from '@/pages/property/propertyFormConfig';

export const PropertyDetailsContext = createContext(null);

export function PropertyDetailsContextProvider({ children }) {
  const [steps, setSteps] = useState(
    localStorage.getItem('steps')
      ? JSON.parse(localStorage.getItem('steps'))
      : stepsArr,
  );

  useEffect(() => {
    if (localStorage.getItem('steps')) {
      setSteps(JSON.parse(localStorage.getItem('steps')));
    }
  }, []);

  // this function is used to handle the steps in the property form and navigate to the next step  and update the steps array
  const handleSteps = useCallback(stepIndex => {
    const newSteps = [...steps];
    const updatedSteps = newSteps.map((step, index) => {
      if (index === stepIndex) {
        return { ...step, active: true, completed: false };
      } else if (index < stepIndex) {
        return { ...step, active: true, completed: true };
      } else {
        return { ...step, active: false, completed: false };
      }
    });
    setSteps(updatedSteps);
    localStorage.setItem('steps', JSON.stringify(updatedSteps));
  }, []);
  return (
    <PropertyDetailsContext.Provider value={{ steps, handleSteps }}>
      {children}
    </PropertyDetailsContext.Provider>
  );
}
