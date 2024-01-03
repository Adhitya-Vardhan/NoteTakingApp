import React from "react";
import { Link, useLocation} from "react-router-dom";

export default function Navbar() {
  let path = useLocation().pathname;
  return (
    <nav>
      <ul className="flex justify-between py-6 px-8">
        <li className="text-2xl font-semibold">NoteTakingApp</li>
        <li>
          {path !== "/add" ? (
            <Link className="py-3 px-4 rounded-full bg-black text-white hover:bg-gray-700" to={"/add"}>Create Note</Link>
          ) : (
            <Link className="py-3 px-4 rounded-full bg-black text-white hover:bg-gray-700" to={"/"}>View Notes</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
