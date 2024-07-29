import GoalCard from "@/components/reuseableComponenet/GoalCard";
import { Button } from "@/components/ui/button";

const page = () => {
  let dummyData = [
    {
      number: "01",
      name: "Anti-Aging",
      img: "/images/goal/goal-1.png",
    },
    {
      number: "02",
      name: "Acne",
      img: "/images/goal/goal-2.png",
    },
    {
      number: "03",
      name: "Brightening",
      img: "/images/goal/goal-3.png",
    },
    {
      number: "04",
      name: "Hydrating",
      img: "/images/goal/goal-4.png",
    },
    {
      number: "05",
      name: "Firming",
      img: "/images/goal/goal-5.png",
    },
    {
      number: "06",
      name: "Soothing",
      img: "/images/goal/goal-6.png",
    },
    {
      number: "07",
      name: "Pore Refining",
      img: "/images/goal/goal-7.png",
    },
    {
      number: "08",
      name: "Oil Control",
      img: "/images/goal/goal-8.png",
    },
    {
      number: "09",
      name: "Pigmentation",
      img: "/images/goal/goal-9.png",
    },
    {
      number: "10",
      name: "Sensitive Skin",
      img: "/images/goal/goal-10.png",
    },
    {
      number: "11",
      name: "Wrinkles",
      img: "/images/goal/goal-11.png",
    },
    {
      number: "12",
      name: "Dullness",
      img: "/images/goal/goal-12.png",
    },
    {
      number: "13",
      name: "Uneven Skin Tone",
      img: "/images/goal/goal-13.png",
    },
    {
      number: "14",
      name: "Uneven Skin Texture",
      img: "/images/goal/goal-14.png",
    },
    {
      number: "15",
      name: "Dark Circles",
      img: "/images/goal/goal-15.png",
    },
    {
      number: "16",
      name: "Eye Puffiness",
      img: "/images/goal/goal-16.png",
    },
  ];

  return (
    <div className=" py-20 md:mt-6 font-raleway  border-t-2 border-darkMahron">
      <div className="text-center pb-5">
        <h2 className="text-4xl">Select Goal for your Skin</h2>
        <p className="mt-2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus.
        </p>
      </div>

      <div className="container my-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6 mb-2">
          {dummyData.map((item, index) => (
            <GoalCard key={index} {...item} />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center my-20">
        <Button
          type="submit"
          variant="myCustom"
          size="lg"
          className="rounded-full m-auto"
        >
          Book Now!
        </Button>
      </div>
    </div>
  );
};

export default page;
