import { configureStore } from '@reduxjs/toolkit';
import appReducer  from '../features/appSlice';
import userReducer from '../features/userSlice';
import cameraReducer from '../features/cameraSlice';

export const store = configureStore({
  reducer: {
    app: appReducer, 
    user : userReducer,
    camera : cameraReducer, 
  },
});
