import React from 'react'
import {useParams}from 'react-router-dom'
import useStyles from './styles';
import {Box, CircularProgress, Grid, Link, Rating, Typography} from '@mui/material';
import { useGetMovieQuery } from '../../services/TMDB';
const MovieInformation = () => {
	const classes =useStyles();
	const {id} = useParams();
	const {data,error,isFetching} = useGetMovieQuery(id);
	
	if(isFetching){
		return(
			<Box display="flex" justifyContent="center" >
				<CircularProgress size="4rem"/>
			</Box>
		)
	}
	if (error) {
		return (
		  <Box display="flex" alignItems="center" justifyContent="center">
			<Link to="/">Something went wrong - Go back.</Link>
		  </Box>
		);
	  }
  return (
	<Grid  container>
		<Grid item sm={12} lg={4} align="center">
		<img 
		src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
		alt={data?.title}
		className={classes.poster}
		 />
		</Grid>
		<Grid item container direction ="column" lg={7}>
		<Typography variant="h3" align="center" gutterBottom >
			{data?.title} ({data.release_date.split('-')[0]})
		</Typography>
		<Typography variant="h5" align="center" gutterBottom>
          {data?.tagline}
        </Typography>

		<Grid item className={classes.containerSpaceAround}>
		<Box display="flex" align="center">
		<Rating readOnly value={data.vote_average/2}/>
		<Typography variant='subtitle' gutterBottom 
		style={{marginLeft:'10px'}}>
		{data?.vote_average}/10

		</Typography>

		</Box>

		</Grid>

		</Grid>

	</Grid>
  )
}

export default MovieInformation
