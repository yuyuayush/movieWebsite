import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import { Actors,Profile,Navbar,Movie,MovieInformation, Movies } from './'
import useStyles from './style'
import "../index.css"
const App = () => {

const classes = useStyles();

  return (
	<div className={classes.root} >
	<CssBaseline/>
	<Navbar/>
	<main className={classes.content} >
		<div className={classes.toolbar} />
	<Routes>
	<Route exact path='/movie/:id' element={<MovieInformation/>} />

	<Route exact path="/actor/:id" element={ <Actors/> }  />

	<Route exact path='/' element={ <Movies/> }  />

	<Route exact path='/profile/:id' element={ <Profile/> }  />
	
	</Routes>
	</main>
	</div>
  )
}

export default App
