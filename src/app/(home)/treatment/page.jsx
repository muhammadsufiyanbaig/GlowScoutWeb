"use client";

import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";
import FilterSearch from "@/components/reuseableComponenet/FilterSearch";
import FilterSelect from "@/components/reuseableComponenet/FormSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import Search from "@/components/reuseableComponenet/Search";
import { usePathname } from "next/navigation";
import Link from "next/link";
import FormSelect from "@/components/reuseableComponenet/FormSelect";
import Container from "@/components/reuseableComponenet/Container";

const TreatmentPage = () => {
  const selectItems = [
    {
      value: "saveMoney",
      label: "Save Money",
    },
    {
      value: "saveTime",
      label: "Save Time",
    },
    {
      value: "saveBoth",
      label: "Save Both",
    },
  ];

  let dummyData = [
    {
      image: "/images/home/tranding-1.png",
      title: "Laser Resurfacing",
      description: "Lorem ipsum dolor sit amet.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-2.png",
      title: "Botox Injections",
      description: "Consectetur adipiscing elit.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-3.png",
      title: "Chemical Peel",
      description: "Ut ut nibh faucibus.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-4.png",
      title: "Microdermabrasion",
      description: "Etiam sed dolor ac diam.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-5.png",
      title: "Dermal Fillers",
      description: "Pellentesque at vehicula elit.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-5.png",
      title: "Dermal Fillers",
      description: "Pellentesque at vehicula elit.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-5.png",
      title: "Dermal Fillers",
      description: "Pellentesque at vehicula elit.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-2.png",
      title: "Botox Injections",
      description: "Consectetur adipiscing elit.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-3.png",
      title: "Chemical Peel",
      description: "Ut ut nibh faucibus.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-4.png",
      title: "Microdermabrasion",
      description: "Etiam sed dolor ac diam.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-1.png",
      title: "Laser Resurfacing",
      description: "Lorem ipsum dolor sit amet.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-2.png",
      title: "Botox Injections",
      description: "Consectetur adipiscing elit.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-3.png",
      title: "Chemical Peel",
      description: "Ut ut nibh faucibus.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-4.png",
      title: "Microdermabrasion",
      description: "Etiam sed dolor ac diam.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-1.png",
      title: "Laser Resurfacing",
      description: "Lorem ipsum dolor sit amet.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-2.png",
      title: "Botox Injections",
      description: "Consectetur adipiscing elit.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-3.png",
      title: "Chemical Peel",
      description: "Ut ut nibh faucibus.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-4.png",
      title: "Microdermabrasion",
      description: "Etiam sed dolor ac diam.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-4.png",
      title: "Microdermabrasion",
      description: "Etiam sed dolor ac diam.",
      label: "Lorem Ipsum",
    },
    {
      image: "/images/home/tranding-1.png",
      title: "Laser Resurfacing",
      description: "Lorem ipsum dolor sit amet.",
      label: "Lorem Ipsum",
    },
  ];

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(FilterSelect),
  });

  function handleSubmit(data) {
    try {
      console.log(data);
      toast({
        title: "Form submitted!",
        description: "Your form has been submitted successfully.",
        status: "success",
      });
    } catch (error) {
      toast({
        title: "An error occurred.",
        description:
          "There was an error submitting your form. Please try again.",
        status: "error",
      });
    }
  }

  return (
    <div className="py-6 md:py-20 md:mt-6 font-raleway relative isolate border-t-2 border-darkMahron">
      <div className="text-center text-darkMahron pb-5">
        <h2 className="text-4xl">Treatments</h2>
        <p className="m-2 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
          faucibus.
        </p>
      </div>

      <Container>
        <div className="hidden mx-auto w-full md:max-w-5xl md:flex justify-center items-center flex-col bg-[#F6E9CE] md:bg-transparent">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <div className="md:bg-[#F6E9CE]  py-3 md:rounded-full md:px-12  flex flex-col md:flex-row items-center  mt-6">
                <div className="flex justify-between items-center flex-col md:flex-row">
                  <FormSelect
                    selectItems={selectItems}
                    placeholder="Filters"
                    name="goal"
                    customClass="min-w-60"
                  />
                  <span className="h-full w-[1px] text-2xl text-darkMahron hidden md:block mx-5">
                    |
                  </span>
                  <div>
                    <Link href="/compare-treatment">
                      <Button
                        variant="myCustom"
                        size="lg"
                        className="rounded-full px-4 min-w-60  mb-4 md:mb-0 md:mr-4 py-3  h-12"
                      >
                        Compare Treatments
                      </Button>
                    </Link>
                  </div>
                  <span className="h-full w-[1px] text-2xl text-darkMahron hidden md:block mx-5">
                    |
                  </span>
                </div>

                <div className="flex relative mt-4 md:mt-0">
                  <div>
                    <Search
                      name="goal"
                      placeholder="Search for Treatment"
                      formControl={form.control}
                    />
                  </div>
                  <div className=" absolute right-2 md:right-6 bottom-6 md:bottom-2">
                    <Button
                      type="submit"
                      variant="myCustom"
                      size="sm"
                      className="rounded-full"
                    >
                      Book Now!
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </Form>
        </div>
      </Container>


      <div className="container my-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ">
          {dummyData.map((item, index) => (
            <TreatmentCard key={index} {...item} imageHeightWeb={"[350px]"} />
          ))}
        </div>
      </div>
      
     <div className="md:hidden flex justify-end items-end sticky bottom-3 left-3">
  <Link href={'/compare-treatment'} className="py-2 px-4 bg-darkMahron text-white rounded-full shadow-md transform transition-transform hover:scale-105">
    Compare
  </Link>
</div>
    </div>
  );
};

export default TreatmentPage;
