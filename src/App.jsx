// utils/lazyLoad.js

// App.jsx
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { LoadScript } from '@react-google-maps/api';
import {
  LocationDetailsConfig,
  OwnerDetailsConfig,
  propertyDetailsConfig,
} from './pages/property/propertyFormConfig';
import { PropertyDetailsContextProvider } from './context/property/PropertyContextProvider';
import { TabsContent } from '@radix-ui/react-tabs';
import PostedProperties from './pages/agentprofile/PostedProperties';
import ProfileDetails from './pages/agentprofile/ProfileDetails';
import PropertyHistory from './pages/agentprofile/PropertyHistory';
import ForgotPasswordLayout from './layout/ForgotPasswordLayout';
import Landapp_v1 from './pages/Landapp_v1/index.jsx';
import PropertyListing from './pages/Property_Listing/Components';
import PropertyDescription from './pages/Property_Description/Components';
import { AuthProvider } from './context/authentication/AuthProvider';
import 'react-day-picker/dist/style.css';
import PropertyDocumentLayout from './layout/PropertyDocumentLayout';

// Layouts

const PropertyLayout = lazy(() => import('./layout/PropertyLayout'));
const AgentProfileLayout = lazy(() => import('./layout/AgentProfileLayout'));
const DashboardLayout = lazy(() => import('./layout/DashboardLayout'));

// Authentication
const AuthenticationForm = lazy(
  () => import('./pages/authentication/AuthenticationForm'),
);
const ForgotPasswordForm = lazy(
  () => import('./pages/authentication/ForgotPasswordForm'),
);
const CheckEmailForm = lazy(
  () => import('./pages/authentication/CheckEmailForm'),
);
const NewPasswordForm = lazy(
  () => import('./pages/authentication/NewPasswordForm'),
);
const PasswordReset = lazy(
  () => import('./pages/authentication/PasswordReset'),
);

// Property
const CreatePropertyForm = lazy(
  () => import('./pages/property/CreatePropertyForm'),
);
const PropertyDetailsForm = lazy(
  () => import('./pages/property/PropertyDetailsForm'),
);
const PropertyLocatedForm = lazy(
  () => import('./pages/property/PropertyLocatedForm'),
);
const OwnerDetailsForm = lazy(
  () => import('./pages/property/OwnerDetailsForm'),
);
const PropertyDocuments = lazy(
  () => import('./pages/property/PropertyDocuments'),
);
const ImageUploadGallery = lazy(
  () => import('./pages/property/ImageUploadGallery'),
);
const CreatePropertyConfirmation = lazy(
  () => import('./pages/property/CreatePropertyConfirmation'),
);
const PropertyPhoneNumberVerification = lazy(
  () => import('./pages/property/PropertyVerification'),
);
const LocationMap = lazy(() => import('./pages/property/LocationMap'));

// Dashboard
const UserDetails = lazy(() => import('./pages/dashboard/UserDetails'));
const AgentDetails = lazy(() => import('./pages/dashboard/AgentDetails'));
const AdminDetails = lazy(() => import('./pages/dashboard/AdminDetails'));

// Premium
const SinglePropertyView = lazy(() => import('./pages/premium/index'));
const PropertyMapView = lazy(() => import('./pages/premium/PropertyMapView'));
const PremiumMapView = lazy(() => import('./pages/premium/PremiunMapView'));

//listings
const PropertyListingManagement = lazy(
  () => import('./pages/property-listing-management'),
);

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900" />
  </div>
);

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landapp_v1 />,
    },

    {
      path: '/all-lands',
      element: <PropertyListing />,
    },

    {
      path: '/property-description',
      element: <PropertyDescription />,
    },
    {
      path: '/authentication',
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <AuthenticationForm />
            </Suspense>
          ),
        },
      ],
    },

    //Forgot PASSWORD
    {
      element: (
        <Suspense fallback={<LoadingFallback />}>
          <ForgotPasswordLayout />
        </Suspense>
      ),
      path: '/forgot-password',
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <ForgotPasswordForm />
            </Suspense>
          ),
        },

        {
          path: '/forgot-password/check-email',

          element: (
            <Suspense fallback={<LoadingFallback />}>
              <CheckEmailForm />
            </Suspense>
          ),
        },
        {
          path: '/forgot-password/new-password',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <NewPasswordForm />,
            </Suspense>
          ),
        },
        {
          path: '/forgot-password/password-reset',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <PasswordReset />
            </Suspense>
          ),
        },
      ],
    },

    //CREATE PROPERTY
    {
      path: '/create-property',
      element: (
        <PropertyDetailsContextProvider>
          <PropertyLayout />
        </PropertyDetailsContextProvider>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <CreatePropertyForm />
            </Suspense>
          ),
        },
        {
          path: '/create-property/verification',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <PropertyPhoneNumberVerification />,
            </Suspense>
          ),
        },

        {
          path: '/create-property/property-details',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <PropertyDetailsForm
                stepIndex={1}
                heading="Property Details"
                isOpenSidesRequired
                formHeading="Property Details"
                subHeading={
                  'An accurate information helps you connect with right buyers'
                }
                formConfig={propertyDetailsConfig}
                nextPath="/create-property/property-located"
              />
            </Suspense>
          ),
        },
        {
          path: '/create-property/property-located',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <PropertyLocatedForm
                stepIndex={2}
                heading={'Where is the Property located?'}
                formHeading="Location Details"
                subHeading={
                  'An accurate location helps you connect with right buyers'
                }
                formConfig={LocationDetailsConfig}
                nextPath="/create-property/location-map"
              />
            </Suspense>
          ),
        },

        {
          path: '/create-property/location-map',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <LocationMap stepIndex={3} />,
            </Suspense>
          ),
        },

        {
          path: '/create-property/photos',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <PropertyDocumentLayout
                stepIndex={4}
                nextPath={'/create-property/owner-details'}
              >
                <ImageUploadGallery />
              </PropertyDocumentLayout>
            </Suspense>
          ),
        },
        {
          path: '/create-property/owner-details',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <OwnerDetailsForm
                stepIndex={5}
                heading={'Owner Details'}
                formHeading=""
                subHeading={'Owner information'}
                formConfig={OwnerDetailsConfig}
                nextPath="/create-property/property-documents"
              />
            </Suspense>
          ),
        },
        {
          path: '/create-property/property-documents',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <PropertyDocumentLayout
                nextPath="/create-property/confirmation"
                stepIndex={6}
              >
                <PropertyDocuments />
              </PropertyDocumentLayout>
            </Suspense>
          ),
        },

        {
          path: '/create-property/confirmation',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <CreatePropertyConfirmation stepIndex={7} />
            </Suspense>
          ),
        },
      ],
    },

    //AGENT PROFILE

    {
      path: '/profile',
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingFallback />}>
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
            </Suspense>
          ),
        },
      ],
    },

    // DASHBOARD
    {
      path: '/dashboard',
      // element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <DashboardLayout>
                <UserDetails />
              </DashboardLayout>
            </Suspense>
          ),
        },
        {
          path: '/dashboard/agent',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <DashboardLayout>
                <AgentDetails />
              </DashboardLayout>
            </Suspense>
          ),
        },
        {
          path: '/dashboard/admin',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <DashboardLayout>
                <AdminDetails />
              </DashboardLayout>
            </Suspense>
          ),
        },
      ],
    },

    //PREMIUM
    {
      path: '/premium-property',

      children: [
        {
          path: '/premium-property/single-property-view/:id',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              {' '}
              <SinglePropertyView />
            </Suspense>
          ),
        },
        {
          path: '/premium-property/property-map-view',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              <PropertyMapView />
            </Suspense>
          ),
        },
        {
          path: '/premium-property/satellite-view',
          element: (
            <Suspense fallback={<LoadingFallback />}>
              {' '}
              <PremiumMapView />
            </Suspense>
          ),
        },
      ],
    },
    //listings

    {
      path: '/listings',
      element: <PropertyListingManagement />,
    },
  ]);

  return (
    <>
      <AuthProvider>
        <Toaster />
        <LoadScript
          googleMapsApiKey="AIzaSyA5DtxaJ3M6Rmg0N7HwqrdVb2Y3ozecT28"
          libraries={['places', 'marker']}
        ></LoadScript>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}
