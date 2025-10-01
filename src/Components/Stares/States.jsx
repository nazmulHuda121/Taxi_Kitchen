import { CookingPot, Heater, ScrollText } from 'lucide-react';
import React from 'react';

const States = ({ totalOrder, totalCooking, readyTotal }) => {
  return (
    <div className="w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 gap-5">
      {/* total order  */}
      <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{totalOrder}</h2>
          </div>
        </div>
      </div>
      {/* total Cooking  */}
      <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Heater className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Cooking
            <h2 className="text-6xl font-bold">{totalCooking}</h2>
          </div>
        </div>
      </div>
      {/* total Ready  */}
      <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CookingPot className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Order Ready
            <h2 className="text-6xl font-bold">{readyTotal}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
