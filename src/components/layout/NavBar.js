import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  function handleClick() {
    setNav(!nav);
  }

  return (
    <div className="w-screen h-[8rem] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-[1rem] pr-[5rem] flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <Link to="/">
            <h1 className="text-4xl font-bold mr-[8rem] md:text-6xl">
              TRASh SEPARATOr.
            </h1>
          </Link>
        </div>
        <nav>
          <ul className="hidden md:flex ml-[4rem]">
            <li className="">
              <Link to="/time">Time</Link>
            </li>
            <li className="">
              <Link to="/data-for-each-user">Data for each User</Link>
            </li>
            <li className="">
              <Link to="/bin-capacity">Bin Capacity</Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? (
            <MenuIcon className="w-[4rem]" />
          ) : (
            <XIcon className="w-[4rem]" />
          )}
        </div>
      </div>
      <ul className={!nav ? "hidden" : "bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 border-zince-300 w-full">
          <Link to="/time">Time</Link>
        </li>
        <li className="border-b-2 border-zince-300 w-full">
          <Link to="/data-for-each-user">Data for each User</Link>
        </li>
        <li className="border-b-2 border-zince-300 w-full">
          <Link to="/bin-capacity">Bin Capacity</Link>
        </li>
      </ul>
    </div>
  );
}
