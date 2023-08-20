import { makeStyles } from "@mui/styles";

export default makeStyles((theme)=>({
	container:{
		display:"flex",
		justifyContent:"center",
		alignItems:"center"
	},
	btn:{
		margin:"1rem 2rem"
	},
	pageNumber:{
		margin:"0 20px !important",
		color:theme.palette.text.primary,
	}
}))