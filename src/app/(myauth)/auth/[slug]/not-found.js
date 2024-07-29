import { Button } from "@/components/ui/button";
import Link from "next/link";

function NotFound() {
  return (
    <div className=" h-screen flex justify-center items-center flex-col font-raleway gap-3">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">
        <Button variant="myCustom" size="lg" className=" rounded-full">
          Return Home
        </Button>
      </Link>
    </div>
  );
}

export default NotFound;
