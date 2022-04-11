import React, { useState, useEffect } from "react";
import foto1 from "../../assets/marcha-ahmad.svg";
import foto2 from "../../assets/marcha-john.svg";
import HistoryCard from "../HistoryCard";
import ChartContainer from "./ChartContainer";

const images = [foto1, foto2];

function Body() {
  const [history, setHistory] = useState();

  useEffect(() => {
    fetch("https://mocki.io/v1/c759f128-53b3-4f9c-936b-e8d93afb5389")
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);

  return (
    <div className="bg-[#F8F6FF]">
      <nav className=" flex justify-center items-center py-5 bg-white border-[1px] border-gray-200">
        <h5 className="font-bold text-xl">Statistic</h5>
      </nav>
      <ChartContainer />
      <div className="flex justify-between mx-5 mt-8 mb-3">
        <h5 className="text-base font-semibold">Last Activity</h5>
        <p className="text-[14px] font-medium text-purple-600 cursor-pointer hover:text-purple-700">
          See all
        </p>
      </div>
      <div className="flex gap-3 flex-col mx-5 mb-[90px]">
        {history?.map((d, i) => (
          <HistoryCard data={d} key={d.id} image={images[i]} />
        ))}
      </div>
    </div>
  );
}

export default Body;
