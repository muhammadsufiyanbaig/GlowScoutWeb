import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

const page = () => {
  let dummyData = [
    {
      image: "/images/blog/blog-2.png",
      imageAlt: "Salon 1",
      title: "Seasonal Makeup Trends: Fall Edition",
      description:
        "Dive into the enchanting world of fall-inspired makeup trends. From warm hues to bold lip colours, discover the latest beauty trends that will elevate your autumn beauty routine.",
    },
    {
      image: "/images/blog/blog-6.png",
      imageAlt: "Salon 2",
      title: "Reviewing the Latest Beauty Innovations in 2024",
      description:
        "Dive into the enchanting world of fall-inspired makeup trends. From warm hues to bold lip colours, discover the latest beauty trends that will elevate your autumn beauty routine.",
    },
    {
      image: "/images/blog/blog-4.png",
      imageAlt: "Salon 3",
      title: "The Ultimate Guide to Achieving Glowing Skin",
      description:
        "Dive into the enchanting world of fall-inspired makeup trends. From warm hues to bold lip colours, discover the latest beauty trends that will elevate your autumn beauty routine.",
    },
    {
      image: "/images/blog/blog-5.png",
      imageAlt: "Salon 4",
      title: "The Best Skincare Routine for Oily Skin",
      description:
        "Dive into the enchanting world of fall-inspired makeup trends. From warm hues to bold lip colours, discover the latest beauty trends that will elevate your autumn beauty routine.",
    },
    {
      image: "/images/blog/blog-3.png",
      imageAlt: "Salon 5",
      label: "Lorem Ipsum",
      title: "The Ultimate Guide to Achieving Glowing Skin",
      description:
        "Dive into the enchanting world of fall-inspired makeup trends. From warm hues to bold lip colours, discover the latest beauty trends that will elevate your autumn beauty routine.",
    },
    {
      image: "/images/blog/blog-7.png",
      imageAlt: "Salon 5",
      title: "The Best Skincare Routine for Oily Skin",
      description:
        "Dive into the enchanting world of fall-inspired makeup trends. From warm hues to bold lip colours, discover the latest beauty trends that will elevate your autumn beauty routine.",
    },
  ];
  return (
    <div className="container py-6  font-raleway  mb-4">
      <div className="border-b border-t border-darkMahron">
        <div className="text-center py-5">
          <h2 className="text-6xl font-thin">Blogs by Glow Scout</h2>
          <p className="mt-2 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
            faucibus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
        <Suspense fallback={<Skeleton className="w-[100px] h-[20px] rounded-full" /> } >
            <TreatmentCard
              image="/images/blog/blog-1.png"
              imageAlt="Featured Blog"
              label="Featured Blog"
            />
            </Suspense>
          <div className="flex justify-center items-start flex-col gap-4 p-5">
            <h2 className="text-2xl md:text-4xl font-light">
              10-Must Have Skin <br /> Care Products for <br /> Radiant Skin
            </h2>
            <p className="mt-2 text-lg">
              Explore the essential skincare products that can transform your
              daily routine. From hydrating serums to powerful antioxidants,
              discover the secrets to achieving radiant and healthy skin.
            </p>
            <Link href={"/blog-single/1"}>
              <Button
                variant="outline"
                size="lg"
                className=" rounded-full p-5 border-darkMahron"
              >
                Read more
                <span className="text-sm text-white bg-[#351120]  rounded-full mx-2">
                  <ArrowUpRight size={20} color="#fff" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center pt-20">
        <h2 className="text-6xl">Trending Topics</h2>
        <p className="mt-2 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus.
        </p>
      </div>

      <div className="my-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mb-2">
          {dummyData.map((item, index) => (
            <Link href={`blog-single/${index}`} key={index}>
              <TreatmentCard key={index} {...item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
