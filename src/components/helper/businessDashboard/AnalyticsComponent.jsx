
import Image from "next/image";
import React from "react";

const AnalyticsComponent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 font-raleway">
      <Image
        width={300}
        height={300}
        alt="bg"
        src={"/images/shadow-1.png"}
        className="absolute top-14 right-0 z-0 hidden md:block"
      />
      <div className="bg-card text-card-foreground p-4 rounded-lg text-darkMahron shadow-md font-raleway">
        <p className="text-muted-foreground pb-4">Visitors on Spa - Live</p>
        <p className="text-2xl md:text-4xl font-bold">1,1462</p>
      </div>
      <div className="bg-card text-card-foreground p-4 text-darkMahron rounded-lg shadow-md">
        <p className="text-muted-foreground pb-4">Visited Spa - Today</p>
        <p className="text-2xl md:text-4xl font-bold">11,182</p>
      </div>
      <div className="bg-card text-card-foreground text-darkMahron p-4 rounded-lg shadow-md">
        <p className="text-muted-foreground pb-4">Visited Spa - This week</p>
        <p className="text-2xl md:text-4xl font-bold">192</p>
      </div>
      <div className="bg-card text-card-foreground text-darkMahron p-4 rounded-t-lg shadow-md md:row-span-2">
        <p className="text-muted-foreground pb-4">Services Offered</p>
        <p className="text-2xl md:text-4xl font-bold pb-4">14</p>
        <ul className="mt-2 text-darkMahron space-y-1">
          <li className="text-muted-foreground">Treatment 1</li>
          <li className="text-muted-foreground">Treatment 2</li>
          <li className="text-muted-foreground">Treatment 3</li>
        </ul>
      </div>
      
      <div className="bg-card text-darkMahron text-card-foreground p-4 rounded-lg shadow-md grid-rows-1">
        <p className="text-muted-foreground pb-4">People Reviewed</p>
        <p className="text-2xl md:text-4xl font-bold">7,512</p>
      </div>
      <div className="bg-card text-darkMahron text-card-foreground p-4 rounded-lg shadow-md grid-rows-1">
        <p className="text-muted-foreground pb-4">People liked</p>
        <p className="text-2xl md:text-4xl font-bold">8,210</p>
      </div>
      
      <div className="bg-card text-darkMahron text-card-foreground p-4 rounded-lg shadow-md col-span-2">
        <p className="text-muted-foreground pb-4">Reviews Negative</p>
        <p className="text-2xl md:text-4xl font-bold">4,512</p>
      </div>
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

export default AnalyticsComponent;
