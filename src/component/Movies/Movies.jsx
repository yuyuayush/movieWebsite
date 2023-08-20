import React from 'react'
import { useState,useEffect } from 'react'
import {Box,CircularProgress,useMediaQuery,Typography} from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import { useGetMoviesQuery } from '../../services/TMDB'
import {MovieList} from '..'
import { selectGenreOrCategory } from '../../app/feature/currentGenreOrCategory';
import Pago from '../Pago/Pago'

const Movies = () => {
	const [page, setPage] = useState(1);
	const { genreIdOrCategoryName,searchQuery } = useSelector((state)=> state.currentGenreOrCategory);
	console.log( genreIdOrCategoryName );
	const {data,error,isFetching} =  useGetMoviesQuery({genreIdOrCategoryName,page,searchQuery});
	if(isFetching){
		return (
			<Box  display="flex" justifyContent="center"  > 	
		<CircularProgress size="4rem"/>
		</Box>
			);
	}
	if(!data.results.length){
		return(
			<Box display="flex" alignItems="center" mt="20px">
			<Typography variant="h4">
				NO Movie exist that match that name
				<br/>
				Please search something else
			</Typography>
			</Box>
		);
	}
	if(error)return 'An occred happen';
	
  return (
	<div>
	  <MovieList movies={data}/>
	  <Pago currentPage={page} setPage={setPage} totalPages={data?.total_page}/>
	</div>
  )
}

export default Movies
