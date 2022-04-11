import React, { useEffect, useState } from "react";
import HistoryCard from "../HistoryCard";
import foto1 from "../../assets/marcha-ahmad.svg";
import foto2 from "../../assets/marcha-john.svg";

let images = [foto1, foto2];

function Body() {
  const [history, setHistory] = useState();

  useEffect(() => {
    fetch("https://mocki.io/v1/c759f128-53b3-4f9c-936b-e8d93afb5389")
      .then((res) => res.json())
      .then((data) => setHistory(data));
  }, []);

  return (
    <main className="mx-5 my-8 mb-[90px]">
      <div className="flex justify-between">
        <h5 className="text-sm font-semibold">Last Activity</h5>
        <p className="text-[13px] font-medium text-purple-600 cursor-pointer hover:text-purple-700">
          See all
        </p>
      </div>
      <div className="flex gap-3 flex-col my-4">
        {history?.map((d, i) => (
          <HistoryCard data={d} key={d.id} image={images[i]} />
        ))}
      </div>
    </main>
  );
}

export default Body;
