import React from "react";
import { Icon } from "@iconify/react";

function Body() {
  return (
    <main className="mx-5 flex gap-6 flex-col mb-[70px]">
      <div>
        <h5 className="profileJudul mb-3">Akunmu</h5>
        <div className="flex items-start gap-2 my-3 bg-white cursor-pointer hover:bg-gray-100 pt-3">
          <Icon
            icon="carbon:user-filled"
            width="24"
            className="text-[#231F20]"
          />
          <div className="flex justify-between items-center flex-1 border-b-[1px] border-gray-300 pb-3">
            <p className="flex-1 text-base">Edit Profil</p>
            <Icon
              icon="ic:round-keyboard-arrow-right"
              width="20"
              className="text-gray-600"
            />
          </div>
        </div>
        <div className="flex items-start gap-2 my-3 bg-white cursor-pointer hover:bg-gray-100 pt-3">
          <Icon icon="bxs:lock" width="24"  className="text-[#231F20]" />
          <div className="flex justify-between items-center flex-1 border-b-[1px] border-gray-300 pb-3">
            <p className="flex-1 text-base">Ubah PIN</p>
            <Icon
              icon="ic:round-keyboard-arrow-right"
              width="20"
              className="text-gray-600"
            />
          </div>
        </div>
      </div>
      <div>
        <h5 className="profileJudul mb-3">Bantuan</h5>
        <div className="flex items-start gap-2 my-3 bg-white cursor-pointer hover:bg-gray-100 pt-3">
          <Icon
            icon="ic:round-mail"
            width="24"
            className="text-[#231F20]"
          />
          <div className="flex justify-between items-center flex-1 border-b-[1px] border-gray-300 pb-3">
            <p className="flex-1 text-base">Kontak</p>
            <Icon
              icon="ic:round-keyboard-arrow-right"
              width="20"
              className="text-gray-600"
            />
          </div>
        </div>
        <div className="flex items-start gap-2 my-3 bg-white cursor-pointer hover:bg-gray-100 pt-3">
          <Icon icon="ep:warning-filled" width="24"  className="text-[#231F20]" />
          <div className="flex justify-between items-center flex-1 border-b-[1px] border-gray-300 pb-3">
            <p className="flex-1 text-base">Laporkan Masalah</p>
            <Icon
              icon="ic:round-keyboard-arrow-right"
              width="20"
              className="text-gray-600"
            />
          </div>
        </div>
      </div>
      <div>
        <h5 className="profileJudul mb-3">Lainnya</h5>
        <div className="flex items-start gap-2 my-3 bg-white cursor-pointer hover:bg-gray-100 pt-3">
          <Icon
            icon="fluent:notepad-edit-20-filled"
            width="24"
            className="text-[#231F20]"
          />
          <div className="flex justify-between items-center flex-1 border-b-[1px] border-gray-300 pb-3">
            <p className="flex-1 text-base">Ketentuan Layanan</p>
            <Icon
              icon="ic:round-keyboard-arrow-right"
              width="20"
              className="text-gray-600"
            />
          </div>
        </div>
        <div className="flex items-start gap-2 my-3 bg-white cursor-pointer hover:bg-gray-100 pt-3">
          <Icon icon="clarity:shield-check-solid" width="24"  className="text-[#231F20]" />
          <div className="flex justify-between items-center flex-1 border-b-[1px] border-gray-300 pb-3">
            <p className="flex-1 text-base">Kebijakan Privasi</p>
            <Icon
              icon="ic:round-keyboard-arrow-right"
              width="20"
              className="text-gray-600"
            />
          </div>
        </div>
        <div className="flex items-start gap-2 my-3 bg-white cursor-pointer hover:bg-gray-100 pt-3">
          <Icon icon="ant-design:star-filled" width="24"  className="text-[#231F20]" />
          <div className="flex justify-between items-center flex-1 border-b-[1px] border-gray-300 pb-3">
            <p className="flex-1 text-base">Beri Rating</p>
            <Icon
              icon="ic:round-keyboard-arrow-right"
              width="20"
              className="text-gray-600"
            />
          </div>
        </div>
      </div>
      <div className="flex items-start gap-2 mb-9 bg-white cursor-pointer transition-all duration-150 ease-out pt-3 text-red-600 p-1 rounded-lg hover:text-white hover:bg-red-600">
          <Icon icon="carbon:logout" width="24" />
          <div className="flex justify-between items-center flex-1 border-b-[1px] border-gray-300 pb-3">
            <p className="flex-1 text-base">Keluar</p>
            <Icon
              icon="ic:round-keyboard-arrow-right"
              width="20"
            />
          </div>
        </div>
    </main>
  );
}

export default Body;
