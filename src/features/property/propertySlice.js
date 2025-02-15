import { createSlice } from '@reduxjs/toolkit';

const PropertySlice = createSlice({
  name: 'property',
  initialState: {
    stateId: 0,
    districtId: 0,
    mandalId: 0,
    landPropertiesState: [],
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
  },
});

export const { setLocation, setDistrictId, setAllLandProperties } =
  PropertySlice.actions;
export default PropertySlice.reducer;
