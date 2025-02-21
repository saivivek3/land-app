import { formatDateRange } from '@/utils/helper';
import { createSlice } from '@reduxjs/toolkit';

const PropertySlice = createSlice({
  name: 'property',
  initialState: {
    stateId: null,
    districtId: null,
    mandalId: null,
    landPropertiesState: [],
    selectedDate: null,
    phoneNumber: '',
    otp: '',
  },
  reducers: {
    setLocation: (state, action) => {
      state.stateId = action.payload.stateID;
      state.districtId = action.payload.districtID;
      state.mandalId = action.payload.mandalID;
    },

    setDistrictId: (state, action) => {
      state.districtId = action.payload;
    },
    setAllLandProperties: (state, action) => {
      state.landPropertiesState = action.payload;
    },
    seteSelectedDate: (state, action) => {
      state.selectedDate = formatDateRange(action.payload);
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
    setOtpForValidation: (state, action) => {
      state.otp = action.payload;
    },
  },
});

export const {
  setLocation,
  setDistrictId,
  setAllLandProperties,
  seteSelectedDate,
  setPhoneNumber,
} = PropertySlice.actions;
export default PropertySlice.reducer;
