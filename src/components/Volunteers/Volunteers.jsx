import volunteer1 from "../../assets/Images/volunteer1.jpg";
import volunteer2 from "../../assets/Images/volunteer2.jpg";
import volunteer3 from "../../assets/Images/volunteer3.png";

const Volunteers = () => {
  return (
    <div className="bg-[#f8f1ef] p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center">OUR VOLUNTEERS</h1>
      <h2 className="text-3xl font-semibold text-center mt-2">OUR HEROES</h2>

      <div className="flex justify-center gap-4 mt-6">
        <img
          src={volunteer1}
          alt="Volunteer 1"
          className="w-1/4 rounded-lg shadow-lg"
        />
        <img
          src={volunteer2}
          alt="Volunteer 2"
          className="w-1/4 rounded-lg shadow-lg"
        />
        <img
          src={volunteer3}
          alt="Volunteer 3"
          className="w-1/4 rounded-lg shadow-lg"
        />
      </div>

      <p className="text-center text-lg mt-6 max-w-3xl">
        WE ARE HOLDING AN OPEN EVENT TO HELP OUR COMMUNITY AND PEOPLE IN NEED.
        JOIN US AS A VOLUNTEER AND CONTRIBUTE TO PROVIDING A BETTER LIFE.
      </p>

      <div className="bg-[#2f2f2f] text-white mt-6 p-6 rounded-lg w-full max-w-4xl flex justify-between items-center">
        <h3 className="text-xl font-semibold">Let's join us!</h3>
        <div className="text-right">
          <p className="text-sm">Contact Us</p>
          <p className="text-sm">+123-456-7890</p>
          <p className="text-sm mt-2">REGISTER: www.heromeals.com</p>
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
