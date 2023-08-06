import React from 'react'
import {useParams}from 'react-router-dom'
import useStyles from './styles';
import {Box, Button, ButtonGroup, CircularProgress, Grid, Link, Rating, Typography, collapseClasses} from '@mui/material';
import { Movie as MovieIcon, Theaters, Language, PlusOne, Favorite, FavoriteBorderOutlined, Remove, ArrowBack } from '@mui/icons-material';

import { useGetMovieQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres'
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
	// container use for flex;
	<Grid  container className={classes.container} >
		<Grid item sm={12} lg={4} md={4} align="center">
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
	
		<Grid className={classes.containerSpaceAround}  item >
		<Box display="flex" align="center">
		<Rating readOnly value={data.vote_average/2}/>
		<Typography variant='subtitle' gutterBottom 
		style={{marginLeft:'10px'}}>
		{data?.vote_average}/10
		</Typography>
		</Box>
		<Typography gutterBottom variant="h6" align="center">{data?.runtime}min</Typography>
		</Grid>

		<Grid item >
			{data?.genre?.map((genre)=>(
				<Link className={classes.links} key={genre.name} to="/">
              <img alt="GENRE NAME" src={genreIcons[genre.name.toLowerCase()]} className={classes.genreImage} height={30} />
              <Typography color="textPrimary" variant="subtitle1">{genre?.name}</Typography>
            </Link>
			))}
		</Grid>
		<Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>Overview</Typography>
        <Typography style={{ marginBottom: '2rem' }}>{data?.overview}</Typography>
        <Typography variant="h5" gutterBottom>Top Cast</Typography>
		 
		<Grid item container spacing={2}>
          {data && data?.credits?.cast?.map((character, i) => (
            character.profile_path && (
            <Grid key={i} item xs={4} md={2} component={Link} to={`/actors/${character.id}`} style={{ textDecoration: 'none' }}>
              <img
                className={classes.castImage}
                src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
                alt={character.name}
              />
              <Typography color="textPrimary" align="center">{character?.name}</Typography>
              <Typography color="textSecondary" align="center">
                {character.character.split('/')[0]}
              </Typography>
            </Grid>
            )
          )).slice(0, 6)}
        </Grid>

		<Grid item container style={{marginTop:'2rem'}}>
				<div className={classes.buttonContainer}>
					<Grid item xs={12} sm={6} className={classes.buttonContainer}>
					<ButtonGroup size="small" variant="outlined">
                <Button target="_blank" rel="noopener noreferrer" href={data?.homepage} endIcon={<Language />}>Website</Button>
                <Button target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${data?.imdb_id}`} endIcon={<MovieIcon />}>IMDB</Button>
                {/* <Button onClick={() => setOpen(true)} href="#" endIcon={<Theaters />}>Trailer</Button> */}
              </ButtonGroup>
					</Grid>
				</div>
		</Grid>		




		</Grid>

	</Grid>
  )
}

export default MovieInformation
