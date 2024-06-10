import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [employer, setEmployer] = useState([]);
  const [id, setId] = useState(1);

  return (
    <div className="h-screen bg-[#E7E8E7]">
      <nav className="flex justify-end   h-20 border-b-2 border-black">
        <ul className="flex items-center  mx-10 gap-12 text-2xl font-bold  ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="owner">Owner</Link>
          </li>
        </ul>
      </nav>
      <Outlet context={{ setEmployer, employer, id, setId }} />
    </div>
  );
}

export default Nav;
