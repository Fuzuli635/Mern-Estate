import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-blue-500 shadow-md ">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3 ">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap ">
            <span className="text-white ">Booking</span>
            <span className="text-slate-300">Estate</span>
          </h1>
        </Link>

        <form className="bg-slate-100 p-3 rounded-lg flex items-center ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none border-none  w-24 sm:w-64 "
          />
          <FaSearch className="text-slate-700 " />
        </form>
        <ul className="flex gap-4 ">
          <Link to="/">
            <li className="text-white  hover:text-slate-300 cursor-pointer hidden sm:inline ">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-white  hover:text-slate-300 cursor-pointer hidden sm:inline">
              About
            </li>
          </Link>
          <Link to='/sign-in'>
            <li className="text-white  hover:text-slate-300 cursor-pointer ">
              Signin
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
