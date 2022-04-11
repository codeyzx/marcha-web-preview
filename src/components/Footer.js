import React from "react";
import { Icon } from "@iconify/react";
import { useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <footer className="grid grid-cols-5 px-1 pb-2 pt-0 justify-center items-center fixed w-full border-purple-200 border-[1px] bottom-0 z-10 bg-white">
      <div
        className={`flex justify-center items-center flex-col text-gray-500 cursor-pointer hover:text-purple-700 ${
          location.pathname === "/" && "text-purple-700"
        }`}
        onClick={() => navigate("/")}
      >
        <Icon icon="fluent:home-24-regular" width="25" />
        <p className="text-xs font-medium m-0">Home</p>
      </div>
      <div
        className={`flex justify-center hover:text-purple-700 items-center flex-col text-gray-500 cursor-pointer ${
          location.pathname === "/payment" && "text-purple-700"
        }`}
        onClick={() => navigate("/payment")}
      >
        <Icon icon="tabler:notes" width="25" />
        <p className="text-xs font-medium m-0">Payment</p>
      </div>
      <div className="flex justify-center items-center bg-purple-600 cursor-pointer hover:bg-purple-700 max-w-max m-auto p-[10px] text-white rounded-[20px] relative bottom-2">
        <Icon icon="fluent:scan-dash-16-filled" width="40" />
      </div>
      <div
        className={`flex justify-center hover:text-purple-700 items-center flex-col text-gray-500 cursor-pointer ${
          location.pathname === "/statistic" && "text-purple-700"
        }`}
        onClick={() => navigate("/statistic")}
      >
        <Icon icon="bx:bar-chart-square" width="25" />
        <p className="text-xs font-medium m-0">Statistic</p>
      </div>
      <div
        className={`flex justify-center hover:text-purple-700 items-center flex-col text-gray-500 cursor-pointer ${
          location.pathname === "/profile" && "text-purple-700"
        }`}
        onClick={() => navigate("/profile")}
      >
        <Icon icon="gg:profile" width="25" />
        <p className="text-xs font-medium m-0">Profile</p>
      </div>
    </footer>
  );
}

export default Footer;
