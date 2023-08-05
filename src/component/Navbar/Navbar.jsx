import React, { useState } from 'react'
import { AppBar,IconButton,Toolbar,Drawer,Button,Avatar, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import { Menu,AccountCircle,Brightness4,Brightness7  } from '@mui/icons-material'
import useStyles from './styles'
import {useTheme} from '@mui/material/styles';
import {Sidebar,Search} from '../../component';
const Navbar = () => {
	const [mobileOpen, setMobileOpen] = useState(false)
	const classes = useStyles();
	const theme =useTheme();
	const isAuthenticated = true; 
	const isMobile =useMediaQuery('(max-width:600px)')
  return (
	<>
	 <AppBar position='fixed'>
		<Toolbar className={classes.toolbar}>

		{isMobile && (
			<IconButton color="inherit" edges="start" style={{outline:'none'}}
			onClick={()=>setMobileOpen((prevMobile)=> !prevMobile)}
			className={classes.menuButton}
			 >
				<Menu/>
			</IconButton>
		)}
		<IconButton color='inherit' sx={{ml:1}} onClick={()=>{}} >
				{theme.palette.mode=== 'dark' ? <Brightness7/> : <Brightness4/>}
		</IconButton>
		
		<div>
			{!isAuthenticated ? (
				<Button color="inherit" onClick={()=>{}}>
				Login &nbsp; <AccountCircle/>
				</Button>
			) : (
					<Button color="inherit" component={Link} 
					to={`/profile/:id`}
					className={classes.linkButton}
					onClick={()=>{}}
					>
					
					{!isMobile && <> &nbsp; </>}
					<Avatar
					style={{width:30 ,height:30}}
					alt="Profile"
					src="sfas" />
				</Button>
			)
			}

		</div>	
		{!isMobile && <Search/>}	
		</Toolbar>
	 </AppBar>
	 <div>
		<nav className={classes.drawer}>
			{
				isMobile ? 
				(
					<Drawer
					variant="temporary"
					anchor='left'
					open ={mobileOpen}
					onClose={()=>setMobileOpen((prevMobile)=> !prevMobile)}
					className={classes.drawerBackground}
					ModalProps={{keepMounted:true}}
					>
					<Sidebar setMobileOpen={setMobileOpen}/>
					</Drawer>
				) :
				(
					<Drawer  anchor='left'
					classes={{paper:classes.drawerPaper}}
					variant="permanent" open 	
					>
						<Sidebar setMobileOpen={setMobileOpen}/>
					</Drawer>
				)
			}
		</nav>
	 </div>
	</>
  )
}

export default Navbar
