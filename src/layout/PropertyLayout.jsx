import Header from '@/pages/property/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

function PropertyLayout() {
  return (
    <>
      <Header />
      <div className=" container mx-auto my-8 ">
        <Outlet />
      </div>
    </>
  );
}

export default PropertyLayout;
