import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//
import { initializeHotelCache } from '@shared';

import { routes } from '../routes';

import '../styles/main.scss';

initializeHotelCache();

const browserRouter = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
  </StrictMode>
);
