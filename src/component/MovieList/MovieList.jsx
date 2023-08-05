import React from 'react'
import useStyle from './styles'
import { Grid } from '@mui/material';
import {Movie} from '..';

const MovieList = ({movies}) => {
const classes = useStyle();
  return (
	<Grid  container className={classes.movieContainer}>
	 {movies?.results.map((movie,i)=>(
		<Movie key={i} movie={movie} i={i} />
	 ))}
	</Grid>
  );
}

export default MovieList
