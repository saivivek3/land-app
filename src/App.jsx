import AuthenticationForm from './pages/authentication/AuthenticationForm.jsx ';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ForgotPasswordForm from './pages/authentication/ForgotPasswordForm.jsx';
import ForgotPasswordLayout from './layout/ForgotPasswordLayout.jsx';
import CheckEmailForm from './pages/authentication/CheckEmailForm.jsx';
import NewPasswordForm from './pages/authentication/NewPasswordForm.jsx';
import PasswordReset from './pages/authentication/PasswordReset.jsx';
import CreatePropertyForm from './pages/property/CreatePropertyForm.jsx';
import PropertyLayout from './layout/PropertyLayout.jsx';
import {
  LocationDetailsConfig,
  OwnerDetailsConfig,
  propertyDetailsConfig,
} from '@/pages/property/propertyFormConfig.js';
import { PropertyDetailsForm } from '@/pages/property/PropertyDetails.jsx';
import PropertyLocatedForm from '@/pages/property/PropertyLocatedForm.jsx';
import OwnerDetailsForm from '@/pages/property/OwnerDetailsForm.jsx';

import { PropertyDetailsContextProvider } from './context/property/PropertyContextProvider.jsx';
import PropertyDocuments from './pages/property/PropertyDocuments.jsx';
import ImageUploadGallery from './pages/property/ImageUploadGallery.jsx';
import CreatePropertyConfirmation from './pages/property/createPropertyConfirmation.jsx';
import PropertyPhoneNumberVerification from './pages/property/PropertyVerification.jsx';

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
          path: '/create-property/verification',
          element: <PropertyPhoneNumberVerification />,
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
              nextPath="/create-property/property-located"
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
              nextPath="/create-property/owner-details"
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
              nextPath="/create-property/property-documents"
            />
          ),
        },
        {
          path: '/create-property/property-documents',
          element: (
            <PropertyDetailsContextProvider nextPath="/create-property/photos">
              <PropertyDocuments />
            </PropertyDetailsContextProvider>
          ),
        },
        {
          path: '/create-property/photos',
          element: (
            <PropertyDetailsContextProvider nextPath="/create-property/confirmation">
              <ImageUploadGallery />
            </PropertyDetailsContextProvider>
          ),
        },
        {
          path: '/create-property/confirmation',
          element: <CreatePropertyConfirmation />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
