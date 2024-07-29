"use client";
import Image from "next/image";
import React, { useState } from "react";

const PlanAndPricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="mx-auto min-h-screen font-raleway relative px-4">
      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-1.png"}
        className="absolute top-0 right-0 z-0 hidden md:block"
      />
      <div className="flex justify-center items-center min-h-screen">
        <div className="p-6 rounded-lg w-full max-w-3xl h-auto">
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold text-center text-darkMahron mb-2">
            Plans & Pricing
          </h1>
          <p className="text-center text-darkMahron mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.
          </p>
          <div className="bg-white border-2 border-darkMahron rounded-lg px-4 py-5 md:px-16">
            <div className="flex justify-center md:justify-end mb-4">
              <div className="flex border-2 border-gray-300 rounded-full p-1">
                <button
                  onClick={() => setIsMonthly(true)}
                  className={`px-4 py-1 rounded-full ${
                    isMonthly ? "bg-darkMahron text-white" : "text-gray-800"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsMonthly(false)}
                  className={`px-4 py-1 rounded-full ${
                    !isMonthly ? "bg-darkMahron text-white" : "text-gray-800"
                  }`}
                >
                  Annual
                </button>
              </div>
            </div>
            <div className="py-4 text-darkMahron grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 border-l border-darkMahron md:border-0 md:border-transparent">
                <h2 className="text-xl md:text-2xl font-semibold">
                  $19 <span className="text-muted-foreground text-base">/month</span>
                </h2>
                <h3 className="text-lg font-bold">Silver</h3>
                <p>Unleash the power of automation.</p>
                <ul className="list-disc list-inside text-darkMahron mb-4">
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
                <button className="bg-transparent block md:hidden ml-3 text-darkMahron border-2 font-bold border-darkMahron p-2 rounded-full w-full">
                  Choose Plan
                </button>
              </div>
              <div className="bg-white border-l border-darkMahron p-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  $29 <span className="text-muted-foreground text-base">/month</span>
                </h2>
                <h3 className="text-lg font-bold">Gold</h3>
                <p>Unleash the power of automation.</p>
                <ul className="list-disc list-inside text-darkMahron mb-4">
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
                <button className="bg-transparent block md:hidden ml-3 text-darkMahron border-2 font-bold border-darkMahron p-2 rounded-full w-full">
                  Choose Plan
                </button>
              </div>
              <div className="bg-white border-l border-darkMahron p-4">
                <h2 className="text-xl md:text-2xl font-semibold">
                  $39 <span className="text-muted-foreground text-base">/month</span>
                </h2>
                <h3 className="text-lg font-bold">Platinum</h3>
                <p>Unleash the power of automation.</p>
                <ul className="list-disc list-inside text-darkMahron mb-4">
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
                <button className="text-white block md:hidden bg-darkMahron p-2 rounded-lg w-full  ml-3">
                  Selected
                </button>
              </div>
            </div>
            <div className="md:flex hidden md:flex-row justify-center items-center gap-4 md:gap-x-10 xl:gap-x-16 mb-4">
              <button className="bg-transparent text-darkMahron border-2 font-bold border-darkMahron px-4 py-2  rounded-full w-full md:w-1/4">
                Choose Plan
              </button>
              <button className="bg-transparent text-darkMahron border-2 font-bold border-darkMahron px-4 py-2  rounded-full w-full md:w-1/4">
                Choose Plan
              </button>
              <button className="text-white bg-darkMahron px-4 py-2 rounded-full w-full md:w-1/4">
                Selected
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="py-3 px-8 bg-darkMahron font-bold text-white mt-6 rounded-full">
              Next
            </button>
          </div>
        </div>
      </div>
      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-2.png"}
        className="absolute bottom-0 left-0 border-none rounded-xl z-[-1000] hidden md:block"
      />
    </div>
  );
};

export default PlanAndPricing;
