import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

function AdminHome() {
  const { employer, setEmployer, setHeader } = useOutletContext();
  const [reload, setReload] = useState(false);

  useEffect(() => {
    setHeader("Home - admin sector");
    const fetchEmployer = async () => {
      try {
        const response = await axios.get(
          "https://jsd5-mock-backend.onrender.com/members"
        );
        setEmployer(response.data);
      } catch {
        alert("can't access API");
      }
    };
    fetchEmployer();
  }, [reload]);

  const saveEmployer = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsd5-mock-backend.onrender.com/members",
        {
          name: e.target.fName.value,
          lastname: e.target.lName.value,
          position: e.target.position.value,
        }
      );

      setReload(!reload);
    } catch {
      alert("can't put data");
    }

    e.target.reset();
  };

  const deleteRow = async (id) => {
    const deleteData = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${id}`,
      {
        member_id: id,
      }
    );
    setReload(!reload);
  };

  // const deleteAll = () => {
  //   setId(1);
  //   setEmployer([]);
  // };

  console.log(employer);

  return (
    <div className="w-auto flex flex-col items-end ">
      <form
        onSubmit={saveEmployer}
        className="bg-white p-4 rounded-lg shadow-md m-8 flex flex-col "
      >
        <h2 className="text-xl font-semibold mb-4">Create user here</h2>
        <div className=" flex justify-center gap-4 mb-4 w-full">
          <input
            type="text"
            placeholder="Name"
            id="fName"
            name="fName"
            className="p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            id="lName"
            name="lName"
            className="p-2 border rounded-lg"
            required
          />
          <input
            type="text"
            placeholder="Position"
            id="position"
            name="position"
            className="p-2 border rounded-lg"
            required
          />
          <input
            type="submit"
            className="px-4 py-2 bg-[#5E5BFF] text-white rounded-lg"
          />
        </div>
      </form>
      <table className="w-full bg-white rounded-lg shadow-md border  border-black">
        <thead className="bg-gray-200 border border-black">
          <tr className="grid grid-cols-4 p-4 ">
            <th className="text-left ">Name</th>
            <th className="text-left">LastName</th>
            <th className="text-left">Position</th>
            <th className="text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {employer.map((employer) => (
            <tr key={employer.id} className="grid grid-cols-4 p-4 border-b">
              <td>{employer.name}</td>
              <td>{employer.lastname}</td>
              <td>{employer.position}</td>
              <td>
                <input
                  type="button"
                  value="Delete"
                  onClick={() => deleteRow(employer.id)}
                  className="text-red-500 hover:underline"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <input
        type="button"
        value="Delete All"
        onClick={deleteAll}
        className="px-4 py-2 bg-gray-500 text-white rounded-lg  w-36"
      /> */}
    </div>
  );
}

export default AdminHome;
