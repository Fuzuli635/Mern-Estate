import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.js";
import OAuth from "../components/OAuth";
export default function Signin() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto ">
      <h1 className="text-3xl text-center font-bold my-7 ">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input
          onChange={handleChange}
          className="p-3 border rounded-lg outline-none "
          type="email"
          placeholder="email"
          id="email"
        />
        <input
          onChange={handleChange}
          className="p-3 border rounded-lg outline-none "
          type="password"
          placeholder="password"
          id="password"
        />
        <button
          disabled={loading}
          className="bg-blue-700 text-white p-3 font-semibold rounded-lg  hover:opacity-85 transition-opacity disabled:opacity-45 "
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5 ">
        <p>Dont Have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-500 ">Sign-Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5 ">{error}</p>}
    </div>
  );
}
