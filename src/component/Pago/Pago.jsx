import { Button, Typography } from '@mui/material'
import React from 'react'
import useStyles from './style';
const Pago = ({currentPage,setPage,totalPages}) => {
	const classes = useStyles();
	const handleNext = ()=>{
		if(currentPage !== totalPages)
		setPage((prevPage)=>prevPage+1);
		
	}
	const handlePrev = ()=>{
		if(currentPage !== 1)
		setPage((prevPage)=>prevPage-1);
	}

	if(totalPages === 0)
	return null;
  return (
	<div className={classes.container}>
	  <Button onClick={()=>{
		handlePrev();
	  }} className={classes.btn} type='button' variant='contained'>Prev</Button>
	  <Typography variant='h4' className={classes.pageNumber} >
		{currentPage}
	  </Typography>
	  <Button onClick={()=>{
		handleNext();
	  }} className={classes.btn} variant='contained' type='button' >Next</Button>
	</div>
  )
}

export default Pago
