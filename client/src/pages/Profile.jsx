import React from "react";
import { useSelector } from "react-redux";
export default function Profile() {
  const { currentUser, loading, error } = useSelector((state) => state.user);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col gap-4">
        <img
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
          src={currentUser.avatar}
          alt="profile"
        />
        <input
          type="text"
          placeholder="username"
          // defaultValue={currentUser.username}
          id="username"
          className="border p-3 rounded-lg outline-none "
          // onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          id="email"
          // defaultValue={currentUser.email}
          className="border p-3 rounded-lg"
          // onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          // onChange={handleChange}
          id="password"
          className="border p-3 rounded-lg"
        />
        <button
          disabled={loading}
          className="bg-slate-200 text-blue-800 rounded-lg p-3 uppercase font-bold hover:opacity-80 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Update"}
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span
          // onClick={handleDeleteUser}
          className="text-red-700 cursor-pointer"
        >
          Delete account
        </span>
        <span
          // onClick={handleSignOut}
          className="text-red-700 cursor-pointer"
        >
          Sign out
        </span>
      </div>
    </div>
  );
}
