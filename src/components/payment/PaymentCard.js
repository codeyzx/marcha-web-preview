import React from "react";

function PaymentCard({ data, image }) {
  return (
    <div
      className="py-3 px-5 bg-white"
      style={{ boxShadow: "2px 2px 5px 0px #9D20FF1A" }}
    >
      <div className="grid grid-cols-8 gap-2">
        <img
          src={image}
          alt=""
          className="col-span-1 rounded-lg h-10 w-10"
        />
        <div className="col-span-4 py-[2px]">
          <h5 className="text-sm font-medium">{data.tipe === "in" ? `${data.nama} - Request` : `Request to ${data.nama}` }</h5>
          <h4 className="text-lg font-semibold">Rp {data.jumlah}</h4>
          <p className="text-sm">Note: {data.note}</p>
        </div>
        <div className="col-span-3  flex flex-col items-end">
          <p className="text-sm text-left">Due: {data.deadline}</p>
          <p
            className={`text-sm font-medium ${
              data.status === "Pending" ? "text-[#ffa800]" : "text-red-600"
            }`}
          >
            {data.status}
          </p>
        </div>
      </div>

      {/* Button */}
        <div className="grid grid-cols-9 gap-2 mt-4">
          <div className="col-span-1"></div>
          <div className={`font-medium py-2 px-10 cursor-pointer col-span-4 ml-1 rounded-md flex justify-center items-center  ${data.tipe === "in" ? "bg-red-600 hover:bg-red-700 text-white" : "border-purple-600 border-2 bg-white text-purple-600 hover:text-purple-700 hover:border-purple-700"}`}>
            {data.tipe === "in"? "Reject" : "Cancel"}
          </div>
          <div className={`font-medium py-2 px-10 cursor-pointer col-span-4 ml-1 rounded-md flex justify-center items-center  ${data.tipe === "in" ? "bg-green-600 hover:bg-green-700 text-white" : "bg-purple-600 text-white hover:bg-purple-700"}`}>
            {data.tipe === "in"? "Confirm" : "Remind"}
          </div>
        </div>
    </div>
  );
}

export default PaymentCard;
