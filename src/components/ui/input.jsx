import * as React from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const [passwordType, setPasswordType] = React.useState(type);

  return (
    <div className="relative">
      {type !== "password" && (
        <input
          type={type}
          className={cn(
            "flex h-9 w-full rounded-sm border-b-[1px] border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
      )}
      {type === "password" && (
        <div className="relative flex justify-start items-center h-9 w-full max-w-80 border-b-[1px] border-input rounded-sm  bg-transparent shadow-sm">
          <input
            type={passwordType}
            className={cn(
              "w-full bg-transparent px-3 py-2 text-sm transition-colors  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
            ref={ref}
            {...props}
          />
          {passwordType === "password" ? (
            <FaRegEyeSlash
              onClick={() => setPasswordType("text")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 cursor-pointer"
            />
          ) : (
            <FaRegEye
              onClick={() => setPasswordType("password")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500 cursor-pointer"
            />
          )}
        </div>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
