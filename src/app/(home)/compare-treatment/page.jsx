import Image from "next/image";
import React from "react";
const Add = () => {
  return (
    <svg
      className="w-8 h-8 p-2 text-darkMahron border-2 border-darkMahron rounded-lg mb-2"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4v16m8-8H4"
      ></path>
    </svg>
  );
};
const CompareTreatments = () => {
  return (
    <div className="flex flex-col items-center p-3 md:p-8 border-t-2 border-darkMahron">
      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-1.png"}
        className="absolute top-14 right-0 z-0 hidden md:block"
      />
      <h1 className="text-3xl md:text-5xl font-thin mb-2 font-relway text-darkMahron">
        Compare Treatments
      </h1>
      <p className="text-center mb-8 text-base text-darkMahron">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
        faucibus.
      </p>

      <div className="grid grid-cols-2 md:gap-8 w-full max-w-4xl">
        <div className="flex flex-col items-center pr-2 md:pr-4 border-r-2 border-gray-200 col-span-1 ">
          <div className="w-[100%] h-[35%] md:p-4 rounded-lg">
            <Image
              width={300}
              height={300}
              src="/images/home/tranding-3.png"
              alt="Chemical Peels"
              className="w-full h-full object-cover rounded-lg mb-2"
            />
            <h2 className="text-xl md:text-3xl font-medium text-darkMahron text-center">
              Chemical Peels
            </h2>
          </div>
          <div className="mt-20 md:mt-14 w-full h-[80%] md:p-2 border-2 border-darkMahron rounded-lg">
            <h3 className="font-semibold text-darkMahron text-lg">Description</h3>
            <p className="text-base mt-5 text-darkMahron">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              nibh faucibus. Lorem ipsum dolor sit amet, consectetur elit. Ut ut
              nibh faucibus. Lorem ipsum dolor sit amet, consectetur elit. Ut ut
              nibh faucibus. Lorem ipsum dolor sit amet, consectetur elit. Ut ut
              nibh faucibus.
            </p>
            <p className="hidden md:block text-base text-darkMahron">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              nibh faucibus. Lorem ipsum dolor sit amet, consectetur elit. Ut ut
              nibh faucibus. Lorem ipsum dolor sit amet, consectetur elit. Ut ut
              nibh faucibus. Lorem ipsum dolor sit amet, consectetur elit. Ut ut
              nibh faucibus.
            </p>
          </div>
        </div>

        <div className="col-span-1 pl-2  md:pl-4  flex flex-col items-center justify-start rounded-lg">
          <div className="flex flex-col justify-center items-center text-center rounded-lg bg-gray-200 h-[35%] w-full border-2 border-darkMahron">
            <div className="mb-2">
              <Add />
            </div>
            <p className="text-base font-thin text-darkMahron">
              Select Treatment to compare
            </p>
          </div>
        </div>
      </div>

      <button className="mt-8 px-6 py-2 bg-darkMahron text-white text-lg font-semibold rounded-full">
        Next
      </button>
      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-2.png"}
        className="absolute bottom-0 left-0 z-0 hidden md:block"
      />
    </div>
  );
};

export default CompareTreatments;
