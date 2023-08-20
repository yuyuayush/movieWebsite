import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './component/App'
import { BrowserRouter  } from 'react-router-dom';
import { Provider } from 'react-redux';
import  store  from './app/store';
import ToggleColorMode from './app/utils/ToggleColorMode';
import CssBaseline from '@mui/material/CssBaseline';
  const root=ReactDOM.createRoot(document.getElementById('root'));
  root.render
( 
	<Provider store={store} >
	<ToggleColorMode  >
	<BrowserRouter>
    <App />
	</BrowserRouter>
	</ToggleColorMode>
	   </Provider>,
 );


