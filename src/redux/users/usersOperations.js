import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/getAllUsers',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('http://localhost:8080/users');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUserById = createAsyncThunk(
  'users/deleteUserById',
  async (userId, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:8080/users/${userId}`, {
        headers: {
          authorization: 'admin',
        },
      });
      return userId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/addUser',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'http://localhost:8080/users',
        userData
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
