import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  ContactStateType,
  Message,
} from "../../components/contactComponents/messageConstants";

export const postMessage = createAsyncThunk(
  "postMessage",
  async (payload: Message) => {
    try {
      return fetch(`http://localhost:8080/contact-message`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => res.json())
        .then((val: { writeStatus: string }) => {
          return val.writeStatus === "Success";
        });
    } catch (error: any) {
      console.error("Error: ", error);
      return false;
    }
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
