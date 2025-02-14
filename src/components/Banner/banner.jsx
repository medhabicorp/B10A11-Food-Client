import { Link } from "react-router-dom";
import bannerImg from "../../assets/Images/1.jpg";

const Banner = () => {
  return (
    <div className="h-96 md:h-[450px] lg:h-[500px] relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerImg})`,
        }}
      ></div>

      <div className="relative h-full flex flex-col items-center justify-end text-white text-center pb-8">
        <Link
          to="/login"
          className="bg-orange-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-orange-700 transition duration-300 mb-8"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
