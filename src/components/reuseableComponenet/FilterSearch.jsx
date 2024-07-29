"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import Search from "@/components/reuseableComponenet/Search";
import { usePathname } from "next/navigation";
import Link from "next/link";
import FormSelect from "./FormSelect";
import Container from "./Container";

function FilterSearch({
  schema,
  placeholder,
  buttonText,
  selectItems,
  onSubmit,
}) {
  const { toast } = useToast();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(schema),
  });

  function handleSubmit(data) {
    try {
      onSubmit(data);
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
    <Container>
      <div className="w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto flex justify-center items-center flex-col bg-[#F6E9CE] md:bg-transparent">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="w-full">
            <div className="md:bg-[#F6E9CE] py-2 md:rounded-full md:px-12 flex flex-col md:flex-row items-center mt-6">
              <div className="flex justify-between items-center flex-col md:flex-row w-full">
                <FormSelect
                  selectItems={selectItems}
                  placeholder="Filters"
                  name="goal"
                  customClass="min-w-30"
                />
                <span className="h-full w-[1px] text-2xl text-darkMahron hidden md:block mx-5">
                  |
                </span>
                <div>
                  {pathname === "/treatment" ? (
                    <Link href="/compare-treatment">
                      <Button
                        variant="myCustom"
                        size="lg"
                        className="rounded-full px-4 min-w-40 mb-4 md:mb-0 md:mr-4 h-10"
                      >
                        Compare Treatments
                      </Button>
                    </Link>
                  ) : (
                    <Input
                      placeholder="Please enter your location"
                      type="search"
                      className="border-darkMahron border-2 text-darkMahron px-4 min-w-40 rounded-full mb-4 md:mb-0 md:mr-4  w-40 h-10"
                    />
                  )}
                </div>
                <span className="h-full w-[1px] text-2xl text-darkMahron hidden md:block mx-5">
                  |
                </span>
              </div>
              <div className="flex relative mt-4 md:mt-0 w-full ">
                <Search
                  name="goal"
                  placeholder={placeholder}
                  formControl={form.control}
                  className=""
                />
                <div className="absolute right-2 md:right-6 bottom-6 md:bottom-2">
                  <Button
                    type="submit"
                    variant="myCustom"
                    size="sm"
                    className="rounded-full"
                  >
                    {buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </Container>
  );
}

export default FilterSearch;
