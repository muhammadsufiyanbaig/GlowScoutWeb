import React, { useState } from "react";
import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";
import ServiceForm from "@/components/reuseableComponenet/ServiceForm";
import Image from "next/image";



const ServicesComponent = () => {
  const [currentView, setCurrentView] = useState("list"); 
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const dummyData = [
    {
      image: "/images/home/tranding-1.png",
      title: "Laser Resurfacing",
      description: "Lorem ipsum.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-2.png",
      title: "Botox Injections",
      description: "Consectetur.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-3.png",
      title: "Chemical Peel",
      description: "Ut ut.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-4.png",
      title: "Microdermabrasion",
      description: "Etiam sed.",
      label: "Lorem Ipsum",
    },
  ];

  const handleAddClick = () => {
    setSelectedTreatment(null);
    setCurrentView("add");
  };

  const handleEditClick = (treatment) => {
    setSelectedTreatment(treatment);
    setCurrentView("edit");
  };



  return (
    <div className="container my-5">
       <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-1.png"}
        className="absolute top-14 right-0 z-0 hidden md:block"
      />
      {currentView === "list" && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-2">
            {dummyData.map((item, index) => (
               <button key={index} onClick={() => handleEditClick(item)}> 
               <TreatmentCard {...item} imageHeightWeb={"[100px]"} />
             </button>
            ))}
          </div>
          <div className="flex justify-end items-end sticky bottom-3 left-3">
            <button
              onClick={handleAddClick}
              className="py-2 px-4 bg-darkMahron text-white rounded-full shadow-md transform transition-transform hover:scale-105"
            >
              +
            </button>
          </div>
        </>
      )}

      {currentView === "add" && (
        <ServiceForm isEdit={false} initialData={null} />
      )}

      {currentView === "edit" && selectedTreatment && (
        <ServiceForm isEdit={true} initialData={selectedTreatment} />
      )}
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

export default ServicesComponent;
