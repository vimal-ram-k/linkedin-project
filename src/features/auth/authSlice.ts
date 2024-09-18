import { createSlice, PayloadAction } from '@reduxjs/toolkit';

let user: UserType = {
  username: '',
};
const authSlice = createSlice({
  name: 'user',
  initialState: user,
  reducers: {
    login: (state) => {
      state.username = 'Vimal Ram K';
    },
    logout: (state) => {
      state.username = '';
    },
    updateName: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { login, logout, updateName } = authSlice.actions;
