import React from "react";

export default function MiniProfile() {
  return (
    <div className="flex items-center justify-between mt-5 ml-[15px]">
      <img
        className="h-16 rounded-full border p-1 border-gray-400 hover:p-0 hover:scale-100 transition duration-250"
        src="./image/Profile.jpg"
        alt="profile"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">codewithamir</h2>
        <h3 className="font-bold text-sm text-gray-400">
          Welcome to instagram
        </h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign Out</button>
    </div>
  );
}
