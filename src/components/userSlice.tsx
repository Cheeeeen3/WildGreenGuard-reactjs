import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  user: string,
  email: string
}

const initialState: UserState = {
  user: '',
  email: ''
}

export const userSlice = createSlice({
    name: 'users',
    initialState: initialState,
    reducers: {
      loginUser: (state, action:PayloadAction<UserState>) => {
        state.user = action.payload.user;
        state.email = action.payload.email;
      },
      logoutUser: state => {
        state.user = '';
        state.email = '';
      },
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { loginUser, logoutUser } = userSlice.actions
  
  export default userSlice.reducer