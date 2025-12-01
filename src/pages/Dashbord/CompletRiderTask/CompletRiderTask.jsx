import React from "react";
import useAuth from "../../../Hook/useAuth";
import useAxiosSecoir from "../../../Hook/useAxiosSecoir";
import { useQuery } from "@tanstack/react-query";
import Loding from "../../../Shared/Loding";

const CompletRiderTask = () => {
  const { user } = useAuth();
  const axiosSecore = useAxiosSecoir();
  const {
    data: parcel = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["parcel", user.email, "driver-assigned"],
    queryFn: async () => {
      const res = await axiosSecore.get(
        `parcel/rider?riderEmail=${user.email}&deliveryStatus=parcel-delivered`
      );
      return res.data;
    },
  });
  const handelCalculateCost = (items) => {
    if (items.senderdistick === items.reciverDistrick) {
      return items.totalCost * 0.6;
    } else {
      return items.totalCost * 0.8;
    }
  };

  if (isLoading) {
    return <Loding></Loding>;
  }

  return (
    <div className=" p-3 md:p-5">
      <h1 className=" text-3xl font-semibold text-secondary">
        Your Complet Delivery : {parcel.length}
      </h1>
      <div className="overflow-x-auto mt-4 bg-white rounded-xl shadow-lg border border-gray-100">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left text-gray-700">
            <tr>
              <th className="p-4 font-semibold">Srl No</th>
              <th className="p-4 px-10 md:px-0 font-semibold">Parcel Name</th>
              <th className="p-4 px-10 md:px-0 font-semibold">Weight </th>
              <th className="p-4 px-5 md:px-0 font-semibold">
                Sender Districk
              </th>
              <th className="p-4 px-5 md:px-0 font-semibold">
                Reciver Districk
              </th>
              <th className="p-4 px-5 md:px-0 font-semibold">Parcel Cost</th>
              <th className="p-4 px-5 md:px-0 font-semibold">Your Amount</th>
              <th className="p-4 font-semibold">Cashout Actions</th>
            </tr>
          </thead>

          <tbody>
            {parcel.map((item, i) => (
              <tr
                key={i}
                className="border-b border-gray-200 hover:bg-gray-100 transition"
              >
                {/* Serial */}
                <td className=" pl-6 font-medium text-gray-900">{i + 1}</td>

                <td className="py-4 px-4 md:px-0">
                  <p className="font-semibold text-gray-900 text-[16px]">
                    {item.percilname}
                  </p>
                  <p className="font-semibold text-gray-500 text-[15px]">
                    {item.parcelType}
                  </p>
                </td>

                <td className="py-4 px-7 md:px-0">
                  <p className="font-semibold text-red-500 text-[16px]">
                    {item.weight}Kg
                  </p>
                </td>

                <td className="py-4 px-10 md:px-0 text-gray-800">
                  <p className=" text-[16px] font-semibold text-gray-800">
                    {item.senderRegion}
                  </p>

                  <p className=" text-[15px] text-gray-800">
                    {item.senderdistick}
                  </p>
                </td>

                <td className="py-4 px-10 md:px-0 text-gray-800">
                  <p className=" text-[16px] font-semibold text-gray-800">
                    {item.reciverRegion}
                  </p>

                  <p className=" text-[15px] text-gray-800">
                    {item.reciverDistrick}
                  </p>
                </td>

                <td className="py-4 px-10 md:px-0 text-gray-800">
                  <p className="text-[17px] text-red-600 font-semibold">
                    ${item.totalCost}
                  </p>
                </td>

                <td className="py-4 px-10 md:px-0 text-gray-800">
                  <p className="text-[17px] text-green-600 font-semibold">
                    ${handelCalculateCost(item)}
                  </p>
                </td>

                <td className=" p-4">
                  <button
                    //   onClick={() =>
                    //     // handelCalculateCost(item)
                    //   }
                    className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300"
                  >
                    Cash Out
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletRiderTask;
