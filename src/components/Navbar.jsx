import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import BookTicketsModal from "./BookTicketsModal";
import BookStallModal from "./BookStallModal";
import { LoginContext } from "../App";

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}

const Navbar = () => {
  const [state, setstate] = useState(false);
  const [value, setValue] = useState(false);
  const [value1, setValue1] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  const forceUpdate = useForceUpdate();
  // useEffect(() => {
  //   console.log("rerender");
  // }, [Navbar]);

  var mobileView = "mobile-menu hidden md:hidden";
  const toggleNav = () => {
    setstate(!state);
  };

  const showBTModal = () => {
    setValue(!value);
  };
  const showBSModal = () => {
    setValue1(!value1);
  };

  return (
    <nav className="bg-gray-100" onClick={forceUpdate}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* logo */}
            <div>
              <Link
                to="/"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <svg
                  className="h-6 w-6 mr-1 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span className="font-bold">Expo.</span>
              </Link>
            </div>

            {/* primary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <div
                className="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer"
                onClick={showBTModal}
              >
                Tickets
              </div>
              <div
                className="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer"
                onClick={showBSModal}
              >
                Book Stalls
              </div>
            </div>
          </div>

          {/* secondary nav */}
          {isLoggedIn ? null : (
            <div className="hidden md:flex items-center space-x-1">
              {/* <button className="py-5 px-3" onClick={showLogin}>Login</button>
               */}
              <Link to="/login" className="py-5 px-3">
                Login
              </Link>
              <Link
                to="/register"
                className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
              >
                Signup
              </Link>
            </div>
          )}

          {/* mobile button goes here */}
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={toggleNav}>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div className={state ? "mobile-menu" : "mobile-menu hidden"}>
        <Link to="/login" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Login
        </Link>
        <Link
          to="/register"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Signup
        </Link>
        <div
          className="block py-2 px-4 text-sm hover:bg-gray-200"
          onClick={showBTModal}
        >
          Tickets
        </div>
        <Link
          to="/register"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
          onClick={showBSModal}
        >
          Book stalls
        </Link>
      </div>
      {value ? <BookTicketsModal bool={value} /> : null}
      {value1 ? <BookStallModal bool={value1} /> : null}
    </nav>
  );
};

export default Navbar;
