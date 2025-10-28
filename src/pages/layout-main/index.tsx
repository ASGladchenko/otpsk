import { Outlet } from 'react-router-dom';

export const LayoutMain = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};
