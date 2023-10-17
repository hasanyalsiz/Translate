import { createSlice } from "@reduxjs/toolkit";
import { getLanguages, translateText } from "../actions/translateActions";

const initialState = {
  languages: [],
  isLoading: false,
  isError: false,
  //!   çeviri için state'ler
  answer: "",
  trLoading: false,
  trError: false,
};

const translateSlice = createSlice({
  name: "translate",
  initialState,
  extraReducers: {
    [getLanguages.pending]: (state) => {
      state.isLoading = true;
    },
    [getLanguages.fulfilled]: (state, action) => {
      state.languages = action.payload;
      state.isError = false;
      state.isLoading = false;
    },
    [getLanguages.rejected]: (state) => {
      state.isError = true;
      state.isLoading = false;
    },
    //! çeviri için
    [translateText.pending]: (state) => {
      state.trLoading = true;
    },
    [translateText.fulfilled]: (state, action) => {
      state.answer = action.payload;
      state.trLoading = false;
      state.trError = false;
    },
    [translateText.rejected]: (state) => {
      state.trLoading = false;
      state.trError = true;
    },
  },
  reducers: {
    clearAnswer: (state) => {
      state.answer = "";
    },
  },
});

export default translateSlice.reducer;
export const { clearAnswer } = translateSlice.actions;
