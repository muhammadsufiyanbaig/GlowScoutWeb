import React from "react";
import Image from "next/image";

const AboutGlow = () => {
  return (
    <div className=" bg-darkMahron font-raleway text-lighttext flex flex-col py-10 md:py-60 md:flex-row md:items-center md:justify-between space-y-0 space-x-8">
      <div className="flex-shrink-0">
        <Image
          src="/images/home/flow-about-1.png"
          alt="Left Image"
          className="rounded-lg shadow-lg w-[100px] h-[200px] md:w-[250px] md:h-[400px] "
          width={250}
          height={250}
        />
      </div>
      <div className="text-center md:text-left max-w-lg">
        <h2 className="text-3xl md:text-6xl mb-4 font-raleway text-center">
          About
          <br />
          &rdquo;Glow Scout&rdquo;
        </h2>
        <p className="md:text-lg leading-relaxed pb-3 px-3 md:px-1 font-raleway text-center">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
          nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Ut ut nibh faucibus. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus.
        </p>
      </div>
      <div className="flex-shrink-0 flex justify-end">
        <Image
          src="/images/home/flow-about-2.png"
          alt="Right Image"
          className="rounded-lg shadow-lg w-[100px] h-[200px] md:w-[250px] md:h-[400px]"
          width={250}
          height={250}
        />
      </div>
    </div>
  );
};

export default AboutGlow;
