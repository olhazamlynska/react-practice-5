import { createSlice } from '@reduxjs/toolkit';

import { addUser, deleteUserById, fetchUsers } from './usersOperations';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    clearUsers(state) {
      state.users = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteUserById.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUserById.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users = [...state.users, action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const usersReducer = usersSlice.reducer;

export const { clearUsers } = usersSlice.actions;
