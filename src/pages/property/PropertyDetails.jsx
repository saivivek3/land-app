import DetailsForm from '@/pages/property/DetailsForm.jsx';
import React from 'react';

export function PropertyDetailsForm(props) {
  console.log(props, 'props');
  return <DetailsForm {...props} />;
}
