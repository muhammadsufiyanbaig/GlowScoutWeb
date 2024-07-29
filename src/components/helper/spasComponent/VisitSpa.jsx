import Image from "next/image";
import { useState } from "react";
import { Heart, Star, StarHalf, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const VisitSpa = () => {
  const [favourite, setFavourite] = useState(false);
  return (
    <div className="border-b border-darkMahron pb-5 mb-20">
      <h1 className="text-4xl text-darkMahron  mt-6">Crystal Calm Spa</h1>
      <div className="grid grid-cols-1 md:grid-cols-5 md:gap-6 mb-2">
        <div className="col-span-2">
          <div className="relative">
            <Image
              src="/images/salon-spas/spa-1.png"
              alt="Main Spa Image"
              width={600}
              height={400}
              className="w-full rounded-xl md:h-[500px] object-cover my-5"
            />
            <button className="absolute top-0 right-0 p-3 bg-lighttext rounded-b-lg rounded-tr-lg">
              View all images
            </button>
          </div>
        </div>

        <div className="md:col-span-1 flex md:flex-col gap-4 md:py-5 justify-center items-center">
          <Image
            src="/images/salon-spas/spa-2.png"
            alt="Spa"
            width={100}
            height={200}
            className="w-full md:h-[240px] rounded-xl"
          />
          <Image
            src="/images/salon-spas/spa-3.png"
            alt="Spa"
            width={100}
            height={200}
            className="w-full md:h-[240px] rounded-xl"
          />
        </div>

        <div className="col-span-2 py-5">
          <Card className="p-6 border-darkMahron h-full flex flex-col max-h-[500px]">
            <div>
              <h2 className="text-2xl font-semibold mb-4  text-darkMahron ">Crystal Calm Spa</h2>
              <div className="flex justify-between items-center mb-4">
                <p>Add to favourites</p>
                <button onClick={() => setFavourite(!favourite)}>
                  <Heart size={20} color={favourite ? "red" : "black"} />
                </button>
              </div>
              <div className="py-4">
                <p>Rating</p>
                <div className="flex items-center border-b border-darkMahron pb-4 mb-4">
                  <Star fill="#E5BA1F" strokeWidth={0} size={18} />
                  <Star fill="#E5BA1F" strokeWidth={0} size={18} />
                  <StarHalf fill="#E5BA1F" strokeWidth={0} size={18} />
                  <Star fill="#111" strokeWidth={0} size={18} />
                  <Star fill="#111" strokeWidth={0} size={18} />
                  <p className="text-[12px] ml-2">(5,212)</p>
                </div>
                <div className="py-4 border-b border-darkMahron">
                  <p className="flex gap-2 items-center mb-2">
                    <Clock size={16} strokeWidth={0.5} />
                    Open until 12:00p.m.
                  </p>
                  <address className="flex gap-2 items-center mb-2 not-italic">
                    <MapPin size={16} strokeWidth={0.5} />
                    13th Street 47 W 13th St, New York
                  </address>
                  <Link
                    href="#"
                    className="text-darkMahron underline font-bold"
                  >
                    Get directions
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="rounded-xl w-full mb-4"
              >
                Visit Website
              </Button>
              <Button
                type="button"
                variant="myCustom"
                size="lg"
                className="rounded-xl w-full"
              >
                Book Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VisitSpa;
