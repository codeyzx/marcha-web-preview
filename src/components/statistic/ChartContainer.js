import React from 'react'
import { Chart } from './Chart'


function ChartContainer() {
  return (
    <div className="main-shadow p-2 mx-2 my-7 rounded-md bg-white">
    <Chart />
    <div className="flex justify-between items-center mx-9 mt-4">
      <div className="">
        <div className="flex gap-1 items-center">
          <div className="h-4 w-4 bg-purple-600"></div>
          <h5 className="text-sm">Income</h5>
        </div>
        <h5 className="text-lg font-medium mt-1">Rp 550.000</h5>
      </div>

      <div className="">
        <div className="flex gap-1 items-center">
          <div className="h-4 w-4 bg-red-500"></div>
          <h5 className="text-sm">Outcome</h5>
        </div>
        <h5 className="text-lg font-medium mt-1">Rp 420.000</h5>
      </div>
    </div>
  </div>
  )
}

export default ChartContainer