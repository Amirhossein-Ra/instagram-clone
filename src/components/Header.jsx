"use client";
import { Image } from "@nextui-org/react";
import React, { useState } from "react";
import {
  AiFillHome,
  AiOutlinePlusCircle,
  AiOutlineSearch,
} from "react-icons/ai";

export default function () {
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between mx-4 xl:mx-auto">

        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid  justify-center items-center">
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/05/Instagram-Logo-2016-present.png"
            className="object-contain "
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative  lg:hidden flex justify-center items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png"
            className="object-contain"
          />
        </div>
        <div className="relative flex items-center">
          <div className="absolute left-2">
            <AiOutlineSearch className="text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>
        <div className="flex items-center space-x-4 ">
          <AiFillHome className="h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out hidden md:inline-flex" />
          <AiOutlinePlusCircle className="h-7 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out" />
          <img
            src="./image/Profile.jpg"
            alt="profile"
            className="h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
