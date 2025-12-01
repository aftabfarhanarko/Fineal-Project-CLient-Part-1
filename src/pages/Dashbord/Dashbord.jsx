import React from "react";
import { ShoppingCart, Package, Truck, ClipboardCheck, CheckCircle2 } from "lucide-react";

const Dashboard = () => {
  const items = [
    { title: "To Pay", value: 129, icon: <ShoppingCart size={24} className="text-blue-500" /> },
    { title: "Ready Pick UP", value: 1325, icon: <Package size={24} className="text-green-500" /> },
    { title: "In Transit", value: 50, icon: <Truck size={24} className="text-yellow-500" /> },
    { title: "Ready to Deliver", value: 50, icon: <ClipboardCheck size={24} className="text-purple-500" /> },
    { title: "Delivered", value: 50, icon: <CheckCircle2 size={24} className="text-teal-500" /> },
  ];

  return (
    <div className="p-6 ">
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard Overview</h2>
          <p className="text-gray-500 text-sm mt-1">
            You can access all your data and information from anywhere.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-tr from-white to-gray-50 border border-gray-200 rounded-2xl p-5 flex flex-col items-center justify-center shadow hover:shadow-xl transition cursor-pointer"
            >
              <div className="mb-3">{item.icon}</div>
              <p className="text-gray-500 text-sm">{item.title}</p>
              <p className="text-2xl font-extrabold text-gray-800 mt-1">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
