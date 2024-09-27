import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BsEmojiSmile } from "react-icons/bs";
import { IoChatbubbleOutline } from "react-icons/io5";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { CiBookmark } from "react-icons/ci";
import { Input } from "@nextui-org/react";
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

      <div className="flex items-center justify-between">
        <div className="flex space-x-4">
          <AiOutlineHeart className="btn" />
          <IoChatbubbleOutline className="btn" />
        </div>
        <CiBookmark className="btn" />
      </div>
      <p className="p-5 truncate">
        <span className="font-bold  mr-2">{userName}</span>
        {caption}
      </p>
      <form className="flex items-center p-4">
        <BsEmojiSmile className="h-9" />
        <input
          type="text"
          placeholder="Enter Your Comment"
          className="border-none flex-1 focus:ring-0"
        />
        <button className="text-blue-400 font-bold">Post</button>
      </form>
    </div>
  );
}
