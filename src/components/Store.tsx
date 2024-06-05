import { configureStore } from "@reduxjs/toolkit"
import usersReducer from "./userSlice.tsx"

export const store =  configureStore({
    reducer: {
      users: usersReducer
    }
  });

export type RootType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;