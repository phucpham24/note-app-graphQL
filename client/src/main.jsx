import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import router from './router';
import { Container } from '@mui/system';
import './firebase/config';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <container maxwidth='lg' sx={{ textAlign: 'center', marginTop: '50px' }}>
      <RouterProvider router={router} />
    </container>

  </React.StrictMode>,
);
