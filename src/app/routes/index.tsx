import { MainPage, HotelPage, LayoutMain, NotFoundPage } from '@pages';

export const routes = [
  {
    id: 'root',
    element: <LayoutMain />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/hotel/:id', element: <HotelPage /> },

      { path: '*', element: <NotFoundPage /> },
    ],
  },
];
