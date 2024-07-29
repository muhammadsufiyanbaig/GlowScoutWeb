import Image from "next/image";
import {
  Card,
} from "@/components/ui/card";

const GoalCard = ({ number, name, img }) => {
  return (
    <Card className='min-h-40'>
      <div className=" p-4">
        <div>
          <div>
            <h2 className=" font-bold text-2xl pb-2">{number}</h2>
            <h3 className="text-xl">{name}</h3>
          </div>
          <div className="flex justify-end">
          <Image
            src={img}
            alt="Anti-Aging"
            className="mt-auto"
            width={50}
            height={50}
          />
          </div>
          
        </div>
      </div>
    </Card>
  );
};

export default GoalCard;
