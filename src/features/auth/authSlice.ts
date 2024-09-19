<<<<<<< HEAD
<<<<<<< HEAD
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
=======
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
>>>>>>> fc141dd (Add redux toolkit state management feature)
=======
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
>>>>>>> 0978ff7 (Add createasyncthunk feature)

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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0978ff7 (Add createasyncthunk feature)
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
<<<<<<< HEAD
<<<<<<< HEAD
  const promise = new Promise((res) => {
=======
  const promise = new Promise((res, rej) => {
>>>>>>> 0978ff7 (Add createasyncthunk feature)
=======
  const promise = new Promise((res) => {
>>>>>>> 7898957 (Add .gitlab-ci.yml)
    setTimeout(() => {
      res('Vimal Ram K');
    }, 10000);
  });
  return promise.then((res) => {
    return res;
  });
});
<<<<<<< HEAD
=======
});

>>>>>>> fc141dd (Add redux toolkit state management feature)
=======
>>>>>>> 0978ff7 (Add createasyncthunk feature)
export default authSlice.reducer;
export const { login, logout, updateName } = authSlice.actions;
