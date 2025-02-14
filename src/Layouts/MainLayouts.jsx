import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const MainLayouts = (props) => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

MainLayouts.propTypes = {};

export default MainLayouts;
