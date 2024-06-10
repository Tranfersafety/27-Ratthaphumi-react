import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [header, setHeader] = useState("");
  const [employer, setEmployer] = useState([]);

  return (
    <div className="flex flex-col items-center h- bg-[#E7E8E7]">
      <h1 className="text-6xl m-8">
        GenerationThailand <br />
        {header === "" && "React-Assesment"}
        {header && header}
      </h1>
      <ul className="flex  justify-center gap-10 text-3xl w-full m-11">
        <li>
          <Link to="/userhome" className=" bg-white rounded-lg p-3">
            User Home Sector
          </Link>
        </li>
        <li>
          <Link to="/adminhome" className=" bg-white rounded-lg p-3">
            Admin Home Sector
          </Link>
        </li>
      </ul>
      <Outlet context={{ setEmployer, employer, setHeader }} />
    </div>
  );
}

export default App;
