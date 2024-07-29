import SettingComponent from "@/components/reuseableComponenet/Setting";
import React from "react";

const Setting = () => {
  return (
    <>
      <SettingComponent
        type="user"
        details={[
          { placeholder: "Enter your name" },
          { placeholder: "Enter your city" },
        ]}
        reviews={[
          { name: "Radiant Serenity", rating: 0 },
          { name: "Crystal Calm", rating: 2 },
          { name: "Eternal Bliss", rating: 3 },
          { name: "Heavenly Escape", rating: 4 },
          { name: "Radiant Serenity", rating: 4 },
          { name: "Crystal Calm", rating: 2 },
          { name: "Eternal Bliss", rating: 3 },
        ]}
      />
    </>
  );
};

export default Setting;
