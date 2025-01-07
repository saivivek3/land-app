import React from "react";
import { Outlet } from "react-router-dom";

function PropertyLayout() {
  return (
    <div className=" container mx-auto my-3 ">
      <Outlet />
    </div>
  );
}

export default PropertyLayout;
