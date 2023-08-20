import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useGetActorQuery,useGetMoviesByActorIdQuery } from '../../services/TMDB';
import { useLocation } from 'react-router-dom';
import { Box, Button, CircularProgress, Grid, Pagination, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import useStyles from './style'
import MovieList from '../MovieList/MovieList';
import Pago from '../Pago/Pago';
const Actors = () => {
	const [page, setPage] = useState(1);
	const navigate = useNavigate();
	const classes = useStyles();
	const {id} = useParams();
	const {data:movies}=useGetMoviesByActorIdQuery({id,page});
	const {data,isFetching,error} = useGetActorQuery(id);
	if(isFetching){
		<Box display="flex" justifyContent="center" alignItems="center" >
				<CircularProgress size="8rem"/>
		</Box>
	}
	if(error){
		<Box display="flex" justifyContent="center" alignItems="center" >
		<Button startIcon={<ArrowBack/>} onClick={()=>
			navigate(-1)
		} color='primary'>
			Go Back
		</Button>
		</Box>
	}
  return (
<>
	<Grid container spacing={3} style={{padding:'2rem'}}>
	<Grid item lg={5} xl={4}>
	

	
		<img 
		className={classes.img}
		src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data?.name}
		 />
	
	</Grid>
	<Grid item lg={7} xl={8} style={{display:"flex",justifyContent:"center" , flexDirection:"column"}} >
		<Typography variant='h2' gutterBottom >{data?.name}</Typography>
		<Typography variant='h5' gutterBottom>{new Date(data?.birthday).toDateString()}</Typography>
		<Typography variant="body1"  color="gray" align='justify' gutterBottom>{data?.biography || "Sorry no biography is Here"}  </Typography>
		<Box className={classes.btns}>
		<Button variant="contained" color="primary" target="_blank" href={`https://www.imdb.com/name/${data?.imdb_id}`}>IMDB</Button>
            <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">Back</Button>
		</Box>
	</Grid>
	</Grid>
	<Box margin="2rem 0">
		<Typography variant='h2' align="center" gutterBottom>Movies</Typography>
		{
			movies && <MovieList movies={movies} numberOfMovies={12} />
		}
		<Pago currentPage={page} setPage={setPage} totalPages={movies?.total_page}/>

	</Box>

</>
  )
}

export default Actors
