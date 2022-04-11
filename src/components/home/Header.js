import React from "react";
import Navbar from "./Navbar";
import { Icon } from "@iconify/react";

function Header() {
  return (
    <div className="bg-purple-600 items-center rounded-b-[40px] relative">
      <Navbar />
      <div className="flex items-center flex-col gap-2">
        <p className="text-white text-xs">Saldo Kamu</p>
        <h5 className="text-white text-4xl font-medium">Rp 350.000</h5>
        <div className="grid grid-cols-3 my-4 gap-10">
          <div className="flex items-center flex-col gap-1">
            <div className="text-white bg-[#BE85F2] hover:bg-purple-400 cursor-pointer p-2 rounded-lg">
              <Icon icon="akar-icons:arrow-up-right" width="32" />
            </div>
            <p className="text-white text-sm">Send</p>
          </div>
          <div className="flex items-center flex-col gap-1">
            <div className="text-white bg-[#BE85F2] hover:bg-purple-400 cursor-pointer p-2 rounded-lg">
              <Icon icon="line-md:arrow-close-down" width="32" />
            </div>
            <p className="text-white text-sm">Request</p>
          </div>
          <div className="flex items-center flex-col gap-1">
            <div className="text-white bg-[#BE85F2] hover:bg-purple-400 cursor-pointer p-2 rounded-lg">
              <Icon icon="akar-icons:plus" width="32" />
            </div>
            <p className="text-white text-sm">Top Up</p>
          </div>
        </div>
      </div>
      <div className="h-44 w-44 rounded-full bg-white opacity-20  absolute -top-[10vh] -left-[9vh] z-10"></div>
      <div className="h-8 w-8 rounded-full bg-white opacity-20  absolute -top-4 left-32 z-10"></div>
      {/* <div className="h-24 w-24 rounded-full object-fill bg-white opacity-20  absolute -bottom-[5vh] -right-[7vh] z-10 overflow-hidden"></div> */}
      {/* <div className="h-36 w-36 rounded-full border-white border-2 opacity-20  absolute -top-[15vh] -right-[8vh] z-10 overflow-hidden"></div> */}
      {/* <div className="h-48 w-48 rounded-full border-white border-2 opacity-20  absolute -top-[18vh] -right-[13vh] z-10 overflow-hidden"></div>
      <div className="h-72 w-72 rounded-full border-white border-2 opacity-20  absolute -top-[28vh] -right-40 z-10 overflow-hidden"></div> */}
    </div>
  );
}

export default Header;
