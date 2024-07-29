"use client";

import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";
import Link from "next/link";
import { SearchSchema } from "@/validation/common.validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import Search from "@/components/reuseableComponenet/Search";
import FormSelect from "@/components/reuseableComponenet/FormSelect";
import Container from "@/components/reuseableComponenet/Container";

const SpaPage = () => {
  let dummyData = [
    {
      image: "/images/salon-spas/salon-1.png",
      imageAlt: "Salon 1",
      label: "Lorem Ipsum",
      title: "Salon 1",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      image: "/images/salon-spas/salon-2.png",
      imageAlt: "Salon 2",
      label: "Lorem Ipsum",
      title: "Salon 2",
      description: "Consectetur adipiscing elit.",
    },
    {
      image: "/images/salon-spas/salon-3.png",
      imageAlt: "Salon 3",
      label: "Lorem Ipsum",
      title: "Salon 3",
      description: "Ut ut nibh faucibus.",
    },
    {
      image: "/images/salon-spas/salon-4.png",
      imageAlt: "Salon 4",
      label: "Lorem Ipsum",
      title: "Salon 4",
      description: "Etiam sed dolor ac diam.",
    },
    {
      image: "/images/salon-spas/salon-5.png",
      imageAlt: "Salon 5",
      label: "Lorem Ipsum",
      title: "Salon 5",
      description: "Pellentesque at vehicula elit.",
    },
    {
      image: "/images/salon-spas/salon-6.png",
      imageAlt: "Salon 5",
      label: "Lorem Ipsum",
      title: "Salon 5",
      description: "Pellentesque at vehicula elit.",
    },
    {
      image: "/images/salon-spas/salon-7.png",
      imageAlt: "Salon 5",
      label: "Lorem Ipsum",
      title: "Salon 5",
      description: "Pellentesque at vehicula elit.",
    },
    {
      image: "/images/salon-spas/salon-8.png",
      imageAlt: "Salon 2",
      label: "Lorem Ipsum",
      title: "Salon 2",
      description: "Consectetur adipiscing elit.",
    },
    {
      image: "/images/salon-spas/salon-1.png",
      imageAlt: "Salon 1",
      label: "Lorem Ipsum",
      title: "Salon 1",
      description: "Lorem ipsum dolor sit amet.",
    },
    {
      image: "/images/salon-spas/salon-2.png",
      imageAlt: "Salon 2",
      label: "Lorem Ipsum",
      title: "Salon 2",
      description: "Consectetur adipiscing elit.",
    },
    {
      image: "/images/salon-spas/salon-3.png",
      imageAlt: "Salon 3",
      label: "Lorem Ipsum",
      title: "Salon 3",
      description: "Ut ut nibh faucibus.",
    },
    {
      image: "/images/salon-spas/salon-4.png",
      imageAlt: "Salon 4",
      label: "Lorem Ipsum",
      title: "Salon 4",
      description: "Etiam sed dolor ac diam.",
    },
    {
      image: "/images/salon-spas/salon-5.png",
      imageAlt: "Salon 5",
      label: "Lorem Ipsum",
      title: "Salon 5",
      description: "Pellentesque at vehicula elit.",
    },
    {
      image: "/images/salon-spas/salon-6.png",
      imageAlt: "Salon 5",
      label: "Lorem Ipsum",
      title: "Salon 5",
      description: "Pellentesque at vehicula elit.",
    },
    {
      image: "/images/salon-spas/salon-7.png",
      imageAlt: "Salon 5",
      label: "Lorem Ipsum",
      title: "Salon 5",
      description: "Pellentesque at vehicula elit.",
    },
    {
      image: "/images/salon-spas/salon-8.png",
      imageAlt: "Salon 2",
      label: "Lorem Ipsum",
      title: "Salon 2",
      description: "Consectetur adipiscing elit.",
    },
  ];

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

  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(SearchSchema),
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
        <h2 className="text-4xl">Salons & Spas</h2>
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
                  <Input
                    placeholder="Please enter your location"
                    type="search"
                    className="border-darkMahron border-2 text-darkMahron  px-4 min-w-80 rounded-full mb-4 md:mb-0 md:mr-4 py-3 w-80 h-12"
                  />
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-2">
          {dummyData.map((item, index) => (
            <Link href={`spa-single/${index}`} key={index}>
              <TreatmentCard key={index} {...item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpaPage;