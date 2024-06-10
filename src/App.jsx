import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [header, setHeader] = useState("");

  return (
    <div className="flex flex-col items-center h- bg-[#E7E8E7]">
      <h1 className="text-6xl m-8">
        GenerationThailand <br />
        {header === "" && "React-Assesment"}
      </h1>
      <ul className="flex  justify-center gap-10 text-3xl w-full ">
        <li>
          <Link to="/userhome" className=" bg-white rounded-lg ">
            User Home Sector
          </Link>
        </li>
        <li>
          <Link to="/adminhome" className=" bg-white rounded-lg">
            Admin Home Sector
          </Link>
        </li>
      </ul>
      <Outlet context={{ setHeader }} />
    </div>
  );
}

export default App;
