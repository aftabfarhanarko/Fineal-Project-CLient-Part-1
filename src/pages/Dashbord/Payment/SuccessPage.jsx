import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router";
import useAxiosSecoir from "../../../Hook/useAxiosSecoir";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";
import { motion } from "framer-motion";

const SuccessPage = () => {
  const [searchParems] = useSearchParams();
  const axiosSecoir = useAxiosSecoir();
  const [allId, setAllId] = useState({})
  const sectionsId = searchParems.get("session_id");
  console.log(sectionsId);

  useEffect(() => {
    if (sectionsId) {
      axiosSecoir
        .patch(`/success-payment?session_id=${sectionsId}`)
        .then((res) => {
          console.log(res.data);
          setAllId({
            trakingId:res.data.trakingId,
            transactionId:res.data.transactionId,
          })
        });
    }
  }, [sectionsId, axiosSecoir]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-white to-slate-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="max-w-xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100"
      >
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-green-50 text-green-600 ring-1 ring-green-100">
            <CheckCircle2 size={28} />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-slate-900">
              Payment Successful
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Thank you — your payment was completed.
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-100 p-4 bg-slate-50">
            <p className="text-xs text-slate-600 uppercase font-medium">
              Transaction Id
            </p>
            <p className="mt-1 text-xs font-semibold text-slate-900">{allId.transactionId}</p>
          </div>

          <div className="rounded-lg border border-gray-100 p-4 bg-slate-50">
            <p className="text-xs text-slate-400 uppercase font-medium">
              Status
            </p>
            <p className="mt-1 text-lg font-semibold text-green-600">Paid</p>
          </div>

          <div className="md:col-span-2 rounded-lg border border-gray-100 p-4 bg-white">
            <p className="text-xs text-slate-400 uppercase font-medium">
              Traking Id
            </p>
            <div className="mt-2 flex items-center justify-between gap-3">
              <div>
                <p className="text-sm text-slate-700 font-medium">Traking ID — <span className="text-xs">{allId.trakingId}</span></p>
                <p className="text-xs text-slate-400 mt-1">
                  Receipt will be sent to your email
                </p>
              </div>

              <div className="flex items-center gap-2">
               

                <button className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border text-sm font-medium hover:bg-slate-50 transition">
                  <Download size={16} /> Receipt
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-3 justify-end">
         

          <Link to={"/dasbord/myparcel"} className="inline-flex items-center gap-2 px-6 py-2 rounded-lg bg-gradient-to-r from-lime-500 to-green-600 text-white font-semibold shadow-md hover:scale-[1.01] transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <path d="M3 12h18M3 12l6-6M3 12l6 6" />
            </svg>
            Go to My Parcel Page
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-slate-400">
          <p>
            If you didn’t expect this payment, contact support at
            <span className="font-medium text-slate-600">
              {" "}
              support@yourcompany.com
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
