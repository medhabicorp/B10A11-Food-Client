import deliveryImg from "../../assets/Images/deliveryImg.jpg";
import playStore from "../../assets/Images/playStore.png";
import appleStore from "../../assets/Images/appleStore.png";

const OurApp = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between px-8 lg:px-12 py-4 lg:py-12 "
      style={{
        backgroundColor: "#663dff",
        backgroundImage:
          "linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%)",
      }}
    >
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src={deliveryImg}
          alt="Delivery"
          className="w-80 md:w-96 rounded-lg shadow-lg"
        />
      </div>
      <div className="max-w-lg text-white w-full md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">
          Get Our Exciting Food Delivery App
        </h2>
        <p className="text-lg mb-6">
          Experience the ultimate convenience in food Sharing with our app!
          Fight Hunger, Give Hope to the people around you for a better world.
        </p>
        <div className="flex space-x-4">
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg">
            <img src={playStore} alt="Google Play" className="w-6 h-6 mr-2" />{" "}
            Google Play
          </button>
          <button className="flex items-center px-4 py-2 bg-black text-white rounded-lg shadow-lg">
            <img src={appleStore} alt="Apple Store" className="w-6 h-6 mr-2" />{" "}
            Apple Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurApp;
