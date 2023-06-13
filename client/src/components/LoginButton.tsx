import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LoginButton = () => {
  const [showMenu, setShowMenu] = useState(false);


  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    document.addEventListener('mousedown', (e) => {
      if (e.target instanceof HTMLElement && !e.target.closest('.relative')) {
        setShowMenu(false);
      }
    });
  }, []);


  return (
    <div
      className="relative flex border gap-1 border-gray-300 rounded-full
      p-2 items-center h-12 text-gray-500 cursor-pointer hover:shadow-md transform duration-200"
      // onClick={handleShowMenu}
      onClick={handleShowMenu}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-9 h-9"
      >
        <path
          fillRule="evenodd"
          d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          clipRule="evenodd"
        />
      </svg>
      <ul
        className={
          `absolute flex-col py-2 justify-between border top-[120%]
          right-0 rounded-2xl shadow-lg w-56 bg-white cursor-default ` +
          (showMenu ? 'flex' : 'hidden')
        }
      >
        <Link to="/sign-up">
          <li className="my-auto py-2 pl-4 cursor-pointer hover:bg-gray-100">
            Sign Up
          </li>
        </Link>
        <Link to="/login">
          <li className="my-auto py-2 pl-4 cursor-pointer hover:bg-gray-100">
            Log in
          </li>
        </Link>
        <hr />
        <Link to="/host/homes">
          <li className="my-auto py-2 pl-4 cursor-pointer hover:bg-gray-100">
            Airbnb your home
          </li>
        </Link>
        <Link to="/help">
          <li className="my-auto py-2 pl-4 cursor-pointer hover:bg-gray-100">
            help
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default LoginButton;
