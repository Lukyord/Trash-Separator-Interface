import { MenuIcon, XIcon } from "@heroicons/react/outline";

import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="w-screen h-[4rem] z-10 bg-zince-200 fixed drop-shadow-lg">
      <div className="px-[1rem] flex justify-between items-center w-full h-full"></div>
      <MenuIcon className="w-[1rem]" />
      {/* <XIcon /> */}
      <nav>
        <ul className="">
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
    </div>
  );
}
