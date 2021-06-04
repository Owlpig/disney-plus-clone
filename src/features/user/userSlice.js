import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  photo: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      const newState = state;
      newState.name = action.payload.name;
      newState.email = action.payload.email;
      newState.photo = action.payload.photo;
    },
    setSignOutState: state => {
      const newState = state;
      newState.name = null;
      newState.email = null;
      newState.photo = null;
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;

export const selectUserName = state => state.user.name;
export const selectUserEmail = state => state.user.email;
export const selectUserPhoto = state => state.user.photo;

export default userSlice.reducer;
