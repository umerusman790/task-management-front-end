import React from 'react';
import ReactDOM from 'react-dom';
import {  ThemeProvider } from '@mui/material/styles';
import App from './App';
import {theme} from './components/muiTheme';
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


