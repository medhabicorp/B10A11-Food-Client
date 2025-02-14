import PropTypes from "prop-types";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const MainLayouts = () => {
  return (
    <div>
      <div className="px-4 lg:px-12 bg-orange-50">
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
