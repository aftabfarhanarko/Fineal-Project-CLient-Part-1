import React from "react";

const Dashbord = () => {
  const items = [
    { title: "To Pay", value: 129 },
    { title: "Ready Pick UP", value: 1325 },
    { title: "In Transit", value: 50 },
    { title: "Ready to Deliver", value: 50 },
    { title: "Delivered", value: 50 },
  ];
  return (
    <div>
      <div>
        <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
          {/* Title */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold">Dashboard Overview</h2>
            <p className="text-sm text-gray-500">
              You can access all your data and information from anywhere.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="border rounded-xl p-4 flex flex-col items-center bg-gray-50"
              >
                <div className="w-10 h-10 bg-gray-200 rounded-full mb-2" />
                <p className="text-sm text-gray-600">{item.title}</p>
                <p className="text-2xl font-bold mt-1">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbord;








// -----------------------------------------------------------

