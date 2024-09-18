import { Image } from "@nextui-org/react";
import React from "react";

export default function () {
  return (
    <div>
      <div className="flex items-center justify-between">
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
        <h1>Right Side</h1>
      </div>
    </div>
  );
}
