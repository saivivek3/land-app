import { createSlice } from '@reduxjs/toolkit';

const PropertySlice = createSlice({
  name: 'auth',
  initialState: {
    stateId: '',
    districtId: '',
  },
  reducers: {
    setLocation: (state, action) => {
      state.stateId = action.payload.stateID;
    },
  },
});

export const { setLocation } = PropertySlice.actions;
export default PropertySlice.reducer;
