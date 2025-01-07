import AuthenticationForm from './pages/authentication/AuthenticationForm';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ForgotPasswordForm from './pages/authentication/ForgotPasswordForm';
import ForgotPasswordLayout from './layout/ForgotPasswordLayout';
import CheckEmailForm from './pages/authentication/CheckEmailForm';
import NewPasswordForm from './pages/authentication/NewPasswordForm';
import PasswordReset from './pages/authentication/PasswordReset';
import CreatePropertyForm from './pages/property/CreatePropertyForm';
import PropertyLayout from './layout/PropertyLayout';
import {
  LocationDetailsConfig,
  OwnerDetailsConfig,
  propertyDetailsConfig,
} from '@/pages/property/propertyFormConfig.js';
import { PropertyDetailsForm } from '@/pages/property/PropertyDetails.jsx';
import PropertyLocatedForm from '@/pages/property/PropertyLocatedForm.jsx';
import OwnerDetailsForm from '@/pages/property/OwnerDetailsForm.jsx';
import PropertyDocuments from '@/pages/property/PropertyDocuments.jsx';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          index: true,
          element: <AuthenticationForm />,
        },
      ],
    },
    {
      element: <ForgotPasswordLayout />,
      path: '/forgot-password',
      children: [
        {
          index: true,
          element: <ForgotPasswordForm />,
        },
        {
          path: '/forgot-password/check-email',
          element: <CheckEmailForm />,
        },
        {
          path: '/forgot-password/new-password',
          element: <NewPasswordForm />,
        },
        {
          path: '/forgot-password/password-reset',
          element: <PasswordReset />,
        },
      ],
    },
    {
      path: '/create-property',
      element: <PropertyLayout />,
      children: [
        {
          index: true,
          element: <CreatePropertyForm />,
        },
        {
          path: '/create-property/property-details',
          element: (
            <PropertyDetailsForm
              heading={'Property Details'}
              isOpenSidesRequired
              formHeading="Property Details"
              subHeading={
                'An accurate information helps you connect with right buyers'
              }
              formConfig={propertyDetailsConfig}
            />
          ),
        },
        {
          path: '/create-property/property-located',
          element: (
            <PropertyLocatedForm
              heading={'Where is the Property located?'}
              formHeading="Location Details"
              subHeading={
                'An accurate location helps you connect with right buyers'
              }
              formConfig={LocationDetailsConfig}
            />
          ),
        },
        {
          path: '/create-property/owner-details',
          element: (
            <OwnerDetailsForm
              heading={'Owner Details'}
              formHeading=""
              subHeading={'Owner information'}
              formConfig={OwnerDetailsConfig}
            />
          ),
        },
        {
          path: '/create-property/property-documents',
          element: <PropertyDocuments />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
