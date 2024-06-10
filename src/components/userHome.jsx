import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

function UserHome() {
  const { employer, setHeader } = useOutletContext();

  useEffect(() => {
    setHeader("Home - usersector");
  });

  return (
    <table className="w-2/5 bg-white rounded-lg shadow-md border border border-black">
      <thead className="bg-gray-200 border border-black">
        <tr className="grid grid-cols-3 p-4 ">
          <th className="text-left ">Name</th>
          <th className="text-left">LastName</th>
          <th className="text-left">Position</th>
        </tr>
      </thead>
      <tbody>
        {employer.map((employer) => (
          <tr key={employer.id} className="grid grid-cols-3 p-4 border-b">
            <td>{employer.name}</td>
            <td>{employer.lastname}</td>
            <td>{employer.position}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UserHome;
