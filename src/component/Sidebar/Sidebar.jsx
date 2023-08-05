import React, { useState } from 'react'
import { Divider,List,ListItem,ListSubheader,Box,CircularProgress, ListItemIcon, ListItemText } from '@mui/material'
import genreIcons from '../../assets/genres'
import { Link } from 'react-router-dom'
import {useTheme} from '@mui/material/styles';
import makeStyles from './styles';
import { useGetGenreQuery } from '../../services/TMDB';
import { useDispatch,useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../app/feature/currentGenreOrCategory';
const redLogo = 'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo = 'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const categories = [
	{ label: 'Popular', value: 'popular' },
	{ label: 'Top Rated', value: 'top_rated' },
	{ label: 'Upcoming', value: 'upcoming' },
  ];
const demoCategories =['Comedy','Action','Horror','Animated ']

const Sidebar =({setMobileOpen})=> {
	const { genreIdOrCategoryName } = useSelector((state)=> state.currentGenreOrCategory);
	console.log( genreIdOrCategoryName );
	const classes =  makeStyles(); 
	const theme =useTheme();
	const dispatch =useDispatch();
	const {data,isFetching,isError} =useGetGenreQuery();
	console.log(data);
	const [Fetching, setFetching] = useState('true');
	return (
	<>
	 <Link to="/" className={classes.imageLink}>
		<img className={classes.image}
		src={theme.palette.mode==='light' ? redLogo : blueLogo }
		alt="filmpire logo"
		>
		</img>
	 </Link> 
	 <Divider/>
	 <List>
		<ListSubheader>Categories</ListSubheader>
		{isFetching? (
			<Box display='flex' justifyContent="center" >
			<CircularProgress size="4rem"/>
			</Box>
		):
		categories.map(({label,value})=>(
			<Link key={value} className={classes.links} to='/'>
			<ListItem onClick={()=>{dispatch(selectGenreOrCategory(value))}}
			>
			<ListItemIcon>
				<img className={classes.genreImages} height={30} 
					alt={genreIcons[label.toLowerCase()]}
					src={genreIcons[label.toLowerCase()]}

				/>	
				</ListItemIcon>
				<ListItemText primary={label}/>
			</ListItem>
			</Link>
		) )}
	 </List>
	 <Divider/>
	 <List>
		<ListSubheader>Genres</ListSubheader>
		{isFetching? (
			<Box display='flex' justifyContent="center" >
			<CircularProgress size="4rem"/>
			</Box>
		):
		 data.genres.map(({name,id})=>(
			<Link key={name} className={classes.links} to='/'>
			<ListItem onClick={()=>{dispatch(selectGenreOrCategory(id))}}>
				<ListItemIcon>
				<img height={30} 
				className={classes.genreImages}
				alt={genreIcons[name]}
					src={genreIcons[name.toLowerCase()]}

				/>	
				</ListItemIcon>
				<ListItemText primary={name}/>
			</ListItem>
			</Link>
		) )}
	 </List>
	</>
  )
}

export default Sidebar;
