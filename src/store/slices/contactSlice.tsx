import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ContactStateType,
  Message,
} from "../../components/contactComponents/messageConstants";

export const postMessage = createAsyncThunk(
  "postMessage",
  async (payload: Message) => {
    let isSent: boolean;
    try {
      const response = await fetch(
        `https://script.google.com/macros/s/${import.meta.env.VITE_MESSAGE_KEY}/exec`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(payload).toString(),
        }
      );

      const logData = await response.text();
      console.log(logData);
      isSent = true;
    } catch (error: any) {
      console.error("Error: ", error);
      isSent = false;
    }

    return isSent;
  }
);

const initialState: ContactStateType = {
  message: { name: "", email: "", mobile: "", text: "" },
  sending: false,
  isSendSuccess: null,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.message.name = action.payload;
    },
    setEmail: (state, action) => {
      state.message.email = action.payload;
    },
    setMobile: (state, action) => {
      state.message.mobile = action.payload;
    },
    setText: (state, action) => {
      state.message.text = action.payload;
    },
    resetMassage: (state) => {
      state.message.name = "";
      state.message.email = "";
      state.message.mobile = "";
      state.message.text = "";
    },
    setIsSendSuccess: (state, action) => {
      state.isSendSuccess = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(postMessage.pending, (state) => {
      state.sending = true;
    });
    builder.addCase(postMessage.fulfilled, (state, action) => {
      state.isSendSuccess = action.payload;
      state.sending = false;
    });
    builder.addCase(postMessage.rejected, (state) => {
      state.isSendSuccess = false;
      state.sending = false;
    });
  },
});

export const {
  setName,
  setEmail,
  setMobile,
  setText,
  resetMassage,
  setIsSendSuccess,
} = contactSlice.actions;

export default contactSlice.reducer;
