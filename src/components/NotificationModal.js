import React from "react";
import { Dialog } from "@headlessui/react";
import empty from "../assets/empty.svg";
import { Icon } from "@iconify/react";

function NotificationModal({openState, setOpenState}) {
  return (
    <>
      <Dialog
        open={openState}
        onClose={() => setOpenState(false)}
        className="w-4/5 border-[1px] border-gray-500 rounded-md py-2  top-[10%] right-[7%] fixed  z-50 bg-white"
      >
        <Dialog.Overlay />
        <div className="flex justify-between items-center p-2 border-b-[1px] border-gray-300">
          <Dialog.Title className="text-base font-medium">Notification</Dialog.Title>
          <button onClick={() => setOpenState(false)}>
            <Icon icon="radix-icons:cross-2" width="20" className="opacity-70 hover:opacity-100"/>
          </button>
        </div>
        <img src={empty} alt="" className="m-auto" />
        <Dialog.Description className="p-3 opacity-90 m-auto flex justify-center">There is no notification yet</Dialog.Description>
      </Dialog>
    </>
  );
}

export default NotificationModal;
