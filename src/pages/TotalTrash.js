import React from "react";
import { Link } from "react-router-dom";
import {
  ClockIcon,
  DatabaseIcon,
  BellIcon,
  ServerIcon,
} from "@heroicons/react/solid";

export default function TotalTrash() {
  return (
    <div
      name="home"
      className="pl-[15rem] w-full h-screen bg-zinc-200 flex flex-col justify-between"
    >
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">
            Accumulated Trash is
          </h1>
          <p className="text-2xl">This is our Trash Separator Interface.</p>
          <Link to="/data-for-each-user" className="sm:w-[60%] my-4">
            <button className="py-3 px-6 sm:w-[60%] my-4">
              Data for each User
            </button>
          </Link>
        </div>
        <div>
          <h1 className="py-3 text-5xl md:text-[20rem] font-bold">10</h1>
        </div>
        <div
          className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
      mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
      border border-slate-300 rounded-xl text-center shadow-xl"
        >
          <p>Our Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <ClockIcon className="h-6 text-indigo-600 pr-[1rem]" /> Time
              Analysis
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <DatabaseIcon className="h-6 text-indigo-600 pr-[1rem]" /> Data
              Collecting
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ServerIcon className="h-6 text-indigo-600 pr-[1rem]" /> Cloud
              Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <BellIcon className="h-6 text-indigo-600 pr-[1rem]" /> IOT Bin
              Capacity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
