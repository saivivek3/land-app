import Header from '@/pages/property/Header';

import { Outlet } from 'react-router-dom';

function PropertyLayout() {
  return (
    <>
      <Header />
      <div className="  md:container md:mx-auto  my-8 ">
        <Outlet />
      </div>
    </>
  );
}

export default PropertyLayout;
