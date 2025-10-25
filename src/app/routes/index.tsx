import { HotelPage, MainPage } from '@pages';

export const routes = [
  {
    id: 'root',
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/hotel', element: <HotelPage /> },

      { path: '*', element: <div>404 Not Found</div> },
    ],
  },
];
