import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState : {
    selectedapp:null,
    sendMessageIsOPen : false,
  },
  reducers: {
    selectapp : ( state , action )=>{
       state.selectedapp = action.payload
    },
    openSendMessage: state => {
      state.sendMessageIsOPen = true;
    },
    closeSendMessage: state => {
      state.sendMessageIsOPen = false;
    },
  },
});

export const { openSendMessage , closeSendMessage , selectapp} = appSlice.actions;
export const selectOpenapp = (state) => state.app.selectedapp;
export const selectSendMessageIsOPen = (state) => state.app.sendMessageIsOPen;


export default appSlice.reducer;