import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import propertyReducer from '@/features/property/propertySlice';

export const store = configureStore({
  reducer: {
    location: propertyReducer,
    auth: authReducer,
  },
});

