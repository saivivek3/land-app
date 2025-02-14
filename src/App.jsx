// utils/lazyLoad.js

// App.jsx
import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { LoadScript } from '@react-google-maps/api';
import PropertyDetailsContextProvider from './context/property/PropertyContextProvider';
import { AuthProvider } from './context/authentication/AuthProvider';
import 'react-day-picker/dist/style.css';
import MagnifyIcon from '@/assets/magnify.svg';
import ForgotPasswordLayout from './layout/ForgotPasswordLayout';
import CreatePropertyLayout from './pages/property/steps';
import ProfileDetails from './pages/agentprofile/ProfileDetails';
import PostedProperties from './pages/agentprofile/PostedProperties';
import PropertyHistory from './pages/agentprofile/PropertyHistory';
import { TabsContent } from './components/ui/tabs';

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
  () => import('./pages/property/steps/CreatePropertyForm'),
);
const PropertyPhoneNumberVerification = lazy(
  () => import('./pages/property/PropertyVerification'),
);

// Dashboard
const UserDetails = lazy(() => import('./pages/dashboard/UserDetails'));
const AgentDetails = lazy(() => import('./pages/dashboard/AgentDetails'));
const AdminDetails = lazy(() => import('./pages/dashboard/AdminDetails'));

// Premium
const SinglePropertyView = lazy(() => import('./pages/premium/index'));
const PropertyMapView = lazy(() => import('./pages/premium/PropertyMapView'));
const PremiumMapView = lazy(() => import('./pages/premium/PremiunMapView'));

// Listings
const PropertyListingManagement = lazy(
  () => import('./pages/property-listing-management'),
);

// Home Screen
const HomeScreen = lazy(() => import('./pages/Landapp_v1'));
const PropertyListingManagementScreen = lazy(
  () => import('./pages/Property_Listing/Components'),
);
const PropertyDescriptionScreen = lazy(
  () => import('./pages/Property_Description/Components'),
);

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <img src={MagnifyIcon} alt="magnify_logo" className="w-36 h-36" />
  </div>
);

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomeScreen />,
    },
    {
      path: '/all-lands',
      element: <PropertyListingManagementScreen />,
    },
    {
      path: '/property-description/:id',
      element: <PropertyDescriptionScreen />,
    },
    {
      path: '/authentication',
      element: <AuthenticationForm />,
    },
    {
      path: '/forgot-password',
      element: <ForgotPasswordLayout />,
      children: [
        { index: true, element: <ForgotPasswordForm /> },
        { path: 'check-email', element: <CheckEmailForm /> },
        { path: 'new-password', element: <NewPasswordForm /> },
        { path: 'password-reset', element: <PasswordReset /> },
      ],
    },
    {
      path: '/create-property',
      element: (
        <PropertyDetailsContextProvider>
          <PropertyLayout />
        </PropertyDetailsContextProvider>
      ),
      children: [
        { index: true, element: <CreatePropertyForm /> },
        { path: 'verification', element: <PropertyPhoneNumberVerification /> },
        { path: 'form', element: <CreatePropertyLayout /> },
      ],
    },
    {
      path: '/profile',
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
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'agent', element: <AgentDetails /> },
        { path: 'admin', element: <AdminDetails /> },
        { path: 'user', element: <UserDetails /> },
      ],
    },
    {
      path: '/premium-property',
      children: [
        { path: 'single-property-view/:id', element: <SinglePropertyView /> },
        { path: 'property-map-view', element: <PropertyMapView /> },
        { path: 'satellite-view', element: <PremiumMapView /> },
      ],
    },
    {
      path: '/listings',
      element: <PropertyListingManagement />,
    },
  ]);

  return (
    <AuthProvider>
      <LoadScript
        googleMapsApiKey="AIzaSyA5DtxaJ3M6Rmg0N7HwqrdVb2Y3ozecT28"
        libraries={['places', 'marker']}
      >
        <Suspense fallback={<LoadingFallback />}>
          <RouterProvider router={router} />
          <Toaster />
        </Suspense>
      </LoadScript>
    </AuthProvider>
  );
}
