import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { postTitle: "" };

const postTitleSlice = createSlice({
  name: "postTitle",
  initialState,
  reducers: {
    setTitle(state, action) {
      state.postTitle = action.payload;
    },
    clearTitle(state) {
      state.postTitle = "";
    },
  },
});

const store = configureStore({
  reducer: postTitleSlice.reducer,
});

export const postTitleActions = postTitleSlice.actions;

export default store;
