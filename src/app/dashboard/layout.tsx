import Header from "@/ui/Dashboard/Header";
import Sidebar from "@/ui/Dashboard/Sidebar";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={poppins.className}>
      <div className="bg-white border-b-[1px] border-[#656565] border-opacity-[20%]">
        <div className="px-6">
          <Header />
        </div>
      </div>
      <div className="grid grid-cols-12 h-[calc(100vh-65px)]">
        <div className="col-span-2 h-full pt-6">
          <Sidebar />
        </div>

        <div className="col-span-10 bg-[#F6F6F6] p-6">
          <div className="h-[calc(100vh-115px)] overflow-y-auto bg-white p-5 rounded-lg">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
