import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const BusinessHeader = () => {
  return (
    <div className="border-b-2 text-darkMahron border-darkMahron">
      <div className="container flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
          <Link href="/" className="ml-0 md:ml-4 lg:ml-0">
            <h1 className="text-lg md:text-xl lg:text-3xl font-bold text-green font-valky text-[#351120]">
              Glow Scout
            </h1>
          </Link>
          <span className="text-sm md:text-base lg:text-lg font-raleway">Business Dashboard</span>
        </div>
        <div className="flex items-center gap-2 md:gap-1 mt-2 md:mt-0">
          <Link href="/spas" className="ml-0 md:ml-4 lg:ml-0">
            <h1 className="hidden md:block text-base md:text-xl lg:text-2xl font-light text-green font-raleway text-[#351120] italic">
              Go to your Spa Page
            </h1>
          </Link>
          <Link href="/spas"  className="text-sm text-white bg-[#351120] rounded-full p-1 mx-2 flex-shrink-0">
            <ArrowUpRight size={20} color="#fff" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BusinessHeader;
