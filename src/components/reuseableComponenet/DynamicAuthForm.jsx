"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import SignupFormField from "./InputFormField";

const DynamicAuthForm = ({
  formType,
  title,
  schema,
  linkText,
  linkHref,
  onSubmit,
}) => {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues:
      formType === "login"
        ? { email: "", password: "" }
        : { email: "" },
  });

  function handleSubmit(data) {
    onSubmit(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-0">
      <h3 className="py-4 text-[#351120] text-3xl mb-4">{title}</h3>
      {["signup", "login"].includes(formType) && (
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-4">
          <Button className="bg-white flex items-center justify-center w-full md:w-auto">
            <Image
              src="/images/auth/search-2.png"
              alt="Google"
              className="mr-2"
              width={20}
              height={20}
            />
            Sign up with Google
          </Button>
          <Button className="bg-white flex items-center justify-center w-full md:w-auto">
            <Image
              src="/images/auth/facebook-1.png"
              alt="Facebook"
              className="mr-2"
              width={20}
              height={20}
            />
            Sign up with Facebook
          </Button>
        </div>
      )}
      {formType !== "forgot-password" && (
        <div className="text-center text-zinc-500 mb-4">- or -</div>
      )}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full md:w-2/3 space-y-6"
        >
          {formType !== "login" && (
            <SignupFormField
              name="name"
              placeholder="Full Name"
              formControl={form.control}
            />
          )}
          <SignupFormField
            name="email"
            placeholder="Email"
            formControl={form.control}
          />
          {["signup", "login"].includes(formType) && (
            <SignupFormField
              name="password"
              placeholder="Password"
              inputType="password"
              formControl={form.control}
            />
          )}
          {linkText && (
            <div className="text-zinc-500 mb-4">
              {linkText}
              <Link href={linkHref} className="text-[#351120] font-bold">
                Click here
              </Link>
            </div>
          )}
          <div className="flex justify-center items-center">
            <Button
              type="submit"
              variant="myCustom"
              size="lg"
              className="rounded-full"
            >
              {formType === "login"
                ? "Log In"
                : formType === "signup"
                ? "Sign Up"
                : "Send Code"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default DynamicAuthForm;
