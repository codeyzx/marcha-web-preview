import React from "react";


function HistoryCard({ data, image }) {
  return (
    <div className="flex justify-between bg-white rounded-md hover:bg-gray-50 items-center p-[10px] cursor-pointer transition-all duration-75 hover:scale-[101%]" style={{boxShadow: '2px 2px 5px 0px #9D20FF1A'}}>
      <div className="flex items-center justify-center gap-3">
        <img src={image} alt="" className="h-12 rounded-xl" />
        <div className="text-sm">
          <h5 className="font-semibold">{data.nama}</h5>
          <p className="opacity-70">{data.waktu}</p>
        </div>
      </div>
      <h5 className={`text-base font-medium  ${data.pemasukan ? "text-green-600" : "text-red-600"}`}>
        Rp {data.pemasukan ? "+" : "-"}
        {data.jumlah}
      </h5>
    </div>
  );
}

export default HistoryCard;
