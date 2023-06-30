// reducers/userReducer.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    firstName: 'Susan',
    lastName: 'Jordon',
    email: 'susan@example.com',
    salary: '95000',
    date: '2019-04-11'
  },
  {
    id: 2,
    firstName: 'Adrienne',
    lastName: 'Doak',
    email: 'adrienne@example.com',
    salary: '80000',
    date: '2019-04-17'
  },
  {
    id: 3,
    firstName: 'Rolf',
    lastName: 'Hegdal',
    email: 'rolf@example.com',
    salary: '79000',
    date: '2019-05-01'
  },
  {
    id: 4,
    firstName: 'Kent',
    lastName: 'Rosner',
    email: 'kent@example.com',
    salary: '56000',
    date: '2019-05-03'
  },
  {
    id: 5,
    firstName: 'Arsenio',
    lastName: 'Grant',
    email: 'arsenio@example.com',
    salary: '65000',
    date: '2019-06-13'
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleteUser: (state, action) => {
      return state.filter((user) => user.id !== action.payload);
    },
    editUser: (state, action) => {
      const { id, firstName, lastName, phone, email } = action.payload;
      const userIndex = state.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state[userIndex] = {
          id,
          firstName,
          lastName,
          phone,
          email,
        };
      }
    },
  },
});

export const { addUser, deleteUser, editUser } = userSlice.actions;
export default userSlice.reducer;
