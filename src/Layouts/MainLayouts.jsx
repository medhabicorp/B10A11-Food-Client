import PropTypes from "prop-types";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayouts = () => {
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
