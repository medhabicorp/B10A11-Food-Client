import PropTypes from "prop-types";
import Banner from "../../components/Banner/banner";
import FeaturedFoods from "../../components/FeaturedFoods/FeaturedFoods";

const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <FeaturedFoods />
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
