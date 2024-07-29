import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import BookNow from "@/components/reuseableComponenet/BookNow";

const HeroSection = () => {
  return (
    <div className="relative h-full  lg:h-screen flex flex-col md:flex-row">
      <div className="flex-1 min-h-max text-center lg:text-left lg:pl-12 flex flex-col justify-center sm:py-20 items-start  px-4 lg:px-0 ">
        <h1 className="text-4xl text-start md:text-5xl lg:text-6xl xl:text-7xl font-thin font-raleway text-darkMahron mb-4 lg:mb-6">
          REVEAL YOUR <br />
          BEAUTY WITH
        </h1>
        <h2 className="text-5xl text-start md:text-6xl lg:text-8xl font-normal mb-2 font-valky text-darkMahron leading-tight lg:leading-[100px]">
          Glow Scout
        </h2>
        <p className="text-base text-start  md:text-lg lg:text-xl font-normal font-raleway mb-6 text-darkMahron ">
          &rdquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
          nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut ut nibh faucibus.&rdquo;
        </p>
        <Link href={"auth/user"}>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-2 font-bold px-6 py-3 border-darkMahron"
          >
            Sign Up
            <span className="text-sm text-white bg-[#351120] rounded-full mx-2">
              <ArrowUpRight size={20} color="#fff" />
            </span>
          </Button>
        </Link>
      </div>
      <div className="w-full md:w-1/2 h-[400px] md:h-[600px] lg:h-auto relative">
        <Image
          src="/images/home/Hero.png"
          alt="Woman"
          className="w-full h-full"
          layout="fill"

        />
      </div>
      <div className="absolute bottom-4 lg:bottom-10  left-1/2 transform -translate-x-1/2 z-20 w-full md:max-w-[800px]  px-2">
        <BookNow />
      </div>
    </div>
  );
};

export default HeroSection;
