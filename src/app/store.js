 import { configureStore } from '@reduxjs/toolkit'
import  {tmdbApi}  from '../services/TMDB';
import genreOrCategoryReducer from './feature/currentGenreOrCategory';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]:tmdbApi.reducer,
    currentGenreOrCategory:genreOrCategoryReducer,
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
})
//always required middleware in rk