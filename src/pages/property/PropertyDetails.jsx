import DetailsForm from '@/pages/property/DetailsForm.jsx';

export function PropertyDetailsForm(props) {
  console.log(props, 'props');
  return <DetailsForm {...props} />;
}
