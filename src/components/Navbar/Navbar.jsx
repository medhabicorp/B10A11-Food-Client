import { useContext, useEffect } from "react";
import { Link, matchPath, NavLink, useLocation } from "react-router-dom";

import toast from "react-hot-toast";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logoImg from "../../assets/Images/logo share meals.png";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation();
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/availableFoods">Available Foods</NavLink>

      {user && (
        <div className="flex flex-col gap-2">
          <NavLink to="/addFood">Add Food</NavLink>
          <NavLink to="/manageMyFoods">Manage My Foods</NavLink>
          <NavLink to="/myFoodRequest">My Food Request</NavLink>
        </div>
      )}
    </>
  );

  useEffect(() => {
    const title = {
      "/": "Home || HeroMeals",
      "/availableFoods": "Available_Foods || HeroMeals",
      "/addFood": "Add_Food || HeroMeals",
      "/manageMyFoods": "Manage_My_Foods || HeroMeals",
      "/myFoodRequest": "My_Food_Request || HeroMeals",
      "/login": "Login || HeroMeals",
      "/signup": "Signup || HeroMeals",
    };
    if (matchPath("/food/:id", location.pathname)) {
      title[location.pathname] = "Food_Details || HeroMeals";
    }
    if (matchPath("/updateFoods/:id", location.pathname)) {
      title[location.pathname] = "Update_Food || HeroMeals";
    }
    document.title = title[location.pathname] || "HeroMeals";
  }, [location]);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(() => {
      toast.success("Log_out successfully");
    });
  };
  return (
    <div className=" text-black pt-6 w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-2 z-50 text-base "
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="flex items-center space-x-1 lg:space-x-2">
            <img className="w-20" src={logoImg} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 text-base">{links}</ul>
        </div>
        <div className="navbar-end gap-1 lg:gap-2 items-center">
          <div>
            <div className="flex items-center gap-1 lg:gap-4"></div>

            <div className="flex items-center gap-1 lg:gap-4">
              {user?.email ? (
                <div className="flex items-center gap-1 lg:gap-4">
                  <div className="tooltip" data-tip={`${user?.displayName}`}>
                    <img
                      className="w-7 lg:w-10 h-7 lg:h-10 object-cover rounded-full"
                      src={user?.photoURL}
                    ></img>
                  </div>
                  <button onClick={handleLogOut}>
                    <Link className="py-2 px-2 lg:px-5 text-white text-sm lg:text-lg rounded-lg bg-teal-600 hover:teal-500 transition">
                      LogOut
                    </Link>
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-1 lg:gap-4">
                  <Link
                    to="/login"
                    className="py-2 px-2 lg:px-5 text-teal-600 hover:text-white font-bold text-sm lg:text-lg rounded-lg border-3 border-teal-600 hover:bg-teal-600 transition"
                  >
                    Login
                  </Link>
                  <span>or</span>
                  <Link
                    to="/register"
                    className="py-2 px-2 lg:px-5 text-teal-600 hover:text-white font-bold text-sm lg:text-lg rounded-lg border-3 border-teal-600 hover:bg-teal-600 transition"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
