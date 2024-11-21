import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  checkinDate: '',
  checkoutDate: '',
  guests: 1,
  room: null,
  totalPrice: 0,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setBookingDetails: (state, action) => {
      state.checkinDate = action.payload.checkinDate;
      state.checkoutDate = action.payload.checkoutDate;
      state.guests = action.payload.guests;
      state.room = action.payload.room;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const { setBookingDetails } = bookingSlice.actions;
export default bookingSlice.reducer;
