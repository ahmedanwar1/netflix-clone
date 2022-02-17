import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalSlice {
  visible: Boolean;
  movieID: Number | null;
}

const initialState: ModalSlice = {
  visible: false,
  movieID: null,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    addMovieID: (state, { payload }) => {
      state.movieID = payload;
      state.visible = true;
    },
    setVisibilityToFalse: (state) => {
      // state.visible = !state.visible;
      state.visible = false;
      state.movieID = null;
    },
  },
});

export const { addMovieID, setVisibilityToFalse } = modalSlice.actions;

export default modalSlice.reducer;
