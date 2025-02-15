import PropTypes from "prop-types";

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div className="px-4 lg:px-12 bg-orange-50">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

MainLayouts.propTypes = {};

export default MainLayouts;
