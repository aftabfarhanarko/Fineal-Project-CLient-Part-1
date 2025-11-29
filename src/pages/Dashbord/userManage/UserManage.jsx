import React from "react";
import useAxiosSecoir from "../../../Hook/useAxiosSecoir";
import { useQuery } from "@tanstack/react-query";

const UserManage = () => {
  const axiosSecoir = useAxiosSecoir();

  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecoir.get(`users`);
      return res.data;
    },
  });

  console.log(data);
  const handelDelet = (id) => {
    console.log(id);
    
  }

  return (
    <div className=" py-6 md:py-10 px-2 md:px-15">
      <h1 className=" text-3xl text-secondary font-semibold">All User : {data?.length}</h1>
      <div className="mt-6">
        <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-100">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-left text-gray-700">
              <tr>
                <th className="p-4 font-semibold">Srl No</th>
                <th className="p-4 font-semibold">User Info</th>
                <th className="p-4 px-10 md:px-0 font-semibold">Email</th>
                <th className="p-4 font-semibold">Role</th>
                <th className="p-4 font-semibold">Account Created</th>
                <th className="p-4 font-semibold">Action</th>
              </tr>
            </thead>

            <tbody>
              {data?.map((item, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  {/* Serial */}
                  <td className="p-4 font-medium text-gray-900">{i + 1}</td>

                  {/* User Info */}
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src={item.photoURL}
                      alt={item.displayName}
                      className="w-10 h-10 rounded-full object-cover border"
                    />
                    <p className= " font-medium md:font-semibold text-gray-900">
                      {item.displayName}
                    </p>
                  </td>

                  {/* Email */}
                  <td className="p-4 px-10 md:px-0 text-gray-800">{item.email}</td>

                  {/* Role */}
                  <td className="p-4 font-semibold">
                    <span className="text-blue-600 bg-blue-100 px-3 py-1 rounded-full text-xs">
                      {item.role}
                    </span>
                  </td>

                  {/* Created At */}
                  <td className="p-4 text-gray-700">
                    {new Date(item.creatWb).toLocaleDateString()}
                  </td>

                  {/* Actions */}
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <button className="px-4 py-1.5 rounded-lg bg-white text-green-600 border border-green-300 flex items-center gap-2 font-medium hover:bg-green-50 hover:shadow-sm transition">
                        Approved
                      </button>

                      <button
                        onClick={() => handelDelet(item._id)}
                        className="px-4 py-1.5 rounded-lg bg-white text-red-600 border border-red-300 flex items-center gap-2 font-medium hover:bg-red-50 hover:shadow-sm transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManage;
