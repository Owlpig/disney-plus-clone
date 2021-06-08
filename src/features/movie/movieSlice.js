import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recommend: null,
  newDisney: null,
  original: null,
  trending: null,
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      const newState = state;
      newState.recommend = action.payload.recommend;
      newState.newDisney = action.payload.newDisney;
      newState.original = action.payload.original;
      newState.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = state => state.movie.recommend;
export const selectNewDisney = state => state.movie.newDisney;
export const selectOriginal = state => state.movie.original;
export const selectTrending = state => state.movie.trending;

export default movieSlice.reducer;
