import { Outlet, Link } from "react-router-dom";

function Nav() {
  return (
    <div className="">
      <nav className="flex justify-end  bg-[#E7E8E7] h-20 border-b-2 border-black">
        <ul className="flex items-center  mx-10 gap-12 text-2xl font-bold  ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="owner">Owner</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Nav;
