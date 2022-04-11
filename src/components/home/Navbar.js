import React, { useState } from "react";
import { Icon } from "@iconify/react";
import profile from "../../assets/profile-marcha.svg";
import { useNavigate } from "react-router-dom";
import Notification from "../NotificationModal";
import NotificationModal from "../NotificationModal";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false)
  const openModal = () =>{
    setIsOpen(true)
  }
  return (
    <nav className="p-5 flex justify-between items-center bg-purple-600">
      <div className="flex gap-2 items-center z-20 cursor-pointer" onClick={()=>navigate('/profile')}>
        <img src={profile} alt="" className="h-[40px] rounded-lg" />
        <div className="text-xs text-white">
          <p className="opacity-80">Welcome</p>
          <p className="text-[13px] font-medium">@emrsyahh</p>
        </div>
      </div>
      <div className="bg-white text-purple-600 p-1 rounded-lg cursor-pointer hover:bg-gray-100  z-20" onClick={openModal}>
        <Icon icon="ic:outline-notifications-none" width="24" />
      </div>
      <NotificationModal openState={isOpen} setOpenState={setIsOpen} />
    </nav>
  );
}

export default Navbar;
