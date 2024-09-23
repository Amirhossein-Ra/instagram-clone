import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
export default function Item({ id, userName, userImage, image, caption }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImage}
          alt={userName}
        />
        <p className="font-bold flex-1">{userName}</p>
        <HiOutlineDotsHorizontal size={20} />
      </div>

      <img className="object-cover w-full" src={image} alt="" />
    </div>
  );
}
