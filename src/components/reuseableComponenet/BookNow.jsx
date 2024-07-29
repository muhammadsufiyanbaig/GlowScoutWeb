"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import Container from "./Container";
import { BookSchema } from "@/validation/common.validation";
import FormSelect from "./FormSelect";

function SelectForm() {
  const itemsDate = [
    {
      value: "newYork",
      label: "New York",
    },
    {
      value: "losAngeles",
      label: "Los Angeles",
    },
  ];

  const goalData = [
    {
      value: "saveMoney",
      label: "Save Money",
    },
    {
      value: "travel",
      label: "Travel",
    },
  ];
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(BookSchema),
  });

  function onSubmit(data) {
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full">
        <div className="bg-[#F6E9CE99]  shadow-lg py-3 md:rounded-full grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5 md:flex-row container grid-flow-row-dense items-center justify-center">
          <div class="md:col-span-2 flex">
            <FormSelect
              selectItems={goalData}
              placeholder="Select your Goals"
              name="goal"
              Control={form.control}
              // customClass="md:min-w-60"
            />
            <span className="h-full w-[1px] text-2xl text-[#35112033] hidden md:block pl-6 ">
              |
            </span>
          </div>

          <div class="md:col-span-2">
            <FormSelect
              selectItems={itemsDate}
              placeholder="Select your Location"
              name="location"
              Control={form.control}
              customClass="w-full"
            />
          </div>

          <div class="col-span-2 md:col-span-1 flex justify-center">
            <Button
              type="submit"
              variant="myCustom"
              size="lg"
              className="rounded-full w-full"
            >
              Book Now!
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

export default SelectForm;
