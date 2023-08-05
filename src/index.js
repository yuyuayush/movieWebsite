import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './component/App'
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { BrowserRouter  } from 'react-router-dom';
import { purple } from '@mui/material/colors';
import { Provider } from 'react-redux';
import  store  from './app/store';

const theme = createTheme({
	palette: {
	  primary: {
		main: purple[500],
	  },
	  secondary: {
		main: '#11cb5f',
	  },
	},
  });

  const root=ReactDOM.createRoot(document.getElementById('root'));
  root.render
( 
	<Provider store={store} >
	<ThemeProvider theme={theme} >
	<BrowserRouter>
    <App />
	</BrowserRouter>
	</ThemeProvider>
	   </Provider>,
 );


