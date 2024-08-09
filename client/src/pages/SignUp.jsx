import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="text-3xl text-center font-bold my-7 ">SignUp</h1>
      <form className="flex flex-col gap-4 ">
        <input
          className="p-3 border rounded-lg outline-none "
          type="text"
          placeholder="username"
          id="username"
        />
        <input
          className="p-3 border rounded-lg outline-none "
          type="email"
          placeholder="email"
          id="email"
        />
        <input
          className="p-3 border rounded-lg outline-none "
          type="password"
          placeholder="password"
          id="password"
        />
        <button className="bg-blue-700 text-white p-3 font-semibold rounded-lg  hover:opacity-85 transition-opacity disabled:opacity-45 ">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5 ">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-500 ">Sign-in</span>
        </Link>
      </div>
    </div>
  );
}
