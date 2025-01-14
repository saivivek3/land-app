import React from 'react';
import AuthenticationForm from './pages/authentication/AuthenticationForm.jsx';
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
} from './pages/property/propertyFormConfig.js';
import { PropertyDetailsForm } from '@/pages/property/PropertyDetails.jsx';
import PropertyLocatedForm from '@/pages/property/PropertyLocatedForm.jsx';
import OwnerDetailsForm from '@/pages/property/OwnerDetailsForm.jsx';

import { PropertyDetailsContextProvider } from './context/property/PropertyContextProvider.jsx';
import PropertyDocuments from './pages/property/PropertyDocuments.jsx';
import ImageUploadGallery from './pages/property/ImageUploadGallery.jsx';
import CreatePropertyConfirmation from './pages/property/CreatePropertyConfirmation.jsx';
import PropertyPhoneNumberVerification from './pages/property/PropertyVerification.jsx';
import AgentProfileLayout from './layout/AgentProfileLayout.jsx';
import ProfileDetails from './pages/agentprofile/ProfileDetails.jsx';
import { TabsContent } from './components/ui/tabs.jsx';
import PostedProperties from './pages/agentprofile/PostedProperties.jsx';
import PropertyHistory from './pages/agentprofile/PropertyHistory.jsx';
import DashboardLayout from './layout/DashboardLayout.jsx';
import UserDetails from './pages/dashboard/UserDetails.jsx';
import AgentDetails from './pages/dashboard/AgentDetails.jsx';
import AdminDetails from './pages/dashboard/AdminDetails.jsx';

import { Toaster } from '@/components/ui/toaster';
import LocationMap from './pages/agentprofile/LocationMap.jsx';
import PropertyListing from './pages/premium/index.jsx';
import PropertyMapView from './pages/premium/PropertyMapView.jsx';

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
          path: '/create-property/location-map',
          element: <LocationMap />,
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
    {
      path: '/agent-profile',
      children: [
        {
          index: true,
          element: (
            <AgentProfileLayout>
              <TabsContent value="profile">
                <ProfileDetails />
              </TabsContent>
              <TabsContent value="properties">
                <PostedProperties />
              </TabsContent>
              <TabsContent value="history">
                <PropertyHistory />
              </TabsContent>
            </AgentProfileLayout>
          ),
        },
      ],
    },
    {
      path: '/dashboard',
      // element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: (
            <DashboardLayout>
              <UserDetails />
            </DashboardLayout>
          ),
        },
        {
          path: '/dashboard/agent',
          element: (
            <DashboardLayout>
              <AgentDetails />
            </DashboardLayout>
          ),
        },
        {
          path: '/dashboard/admin',
          element: (
            <DashboardLayout>
              <AdminDetails />
            </DashboardLayout>
          ),
        },
      ],
    },
    {
      path: '/premium-property',

      children: [
        {
          index:true,
          element: <PropertyListing />,
        },
        {
          path: '/premium-property/property-map-view',
          element: <PropertyMapView />
        },
      ],
    },
  ]);
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}
