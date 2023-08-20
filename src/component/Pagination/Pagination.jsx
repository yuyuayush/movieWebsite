import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import useStyles from "./style"

const Pagination = ({currentPage,setPage,totalPages}) => {
	const classes = useStyles();
  return (
	<div className={classes.container}>
	<Button variant="contained" className={classes.btn}> Prev</Button>
	<Typography>5</Typography>
	<Button color='primary' type='button' variant="contained" className={classes.btn}> Next</Button>
	</div>
  )
}

export default Pagination
