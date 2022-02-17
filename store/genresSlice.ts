import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface GenresSlice {
  genresList: {
    id: Number;
    name: String;
  }[];
}

const initialState: GenresSlice = {
  genresList: [],
};

export const genresSlice = createSlice({
  name: "genres",
  initialState,
  reducers: {
    addGenres: (state, { payload }) => {
      state.genresList = payload;
    },
  },
});

export const { addGenres } = genresSlice.actions;

export default genresSlice.reducer;
