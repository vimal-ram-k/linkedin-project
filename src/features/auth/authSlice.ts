import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  extraReducers: (builder) => {
    builder
      .addCase(createAsync.pending, (state) => {
        state.username = 'Loading';
      })
      .addCase(createAsync.fulfilled, (state) => {
        state.username = 'Vimal Ram k';
      });
  },
});

export const createAsync = createAsyncThunk('user/loginAsync', async () => {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      res('Vimal Ram K');
    }, 10000);
  });
  return promise.then((res) => {
    return res;
  });
});
export default authSlice.reducer;
export const { login, logout, updateName } = authSlice.actions;
