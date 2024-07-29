import "@/app/globals.css";
import BusinessHeader from "@/components/helper/businessDashboard/BusinessHeader";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";
import Image from "next/image";

const valky = localFont({
  src: [
    {
      path: "../../../../../public/fonts/ValkyRegular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-valky",
});

const raleway = localFont({
  src: [
    {
      path: "../../../../../public/fonts/Raleway-Regular.ttf",
      weight: "400",
    },
  ],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Business Dashboard",
  description:
    "Business Dashboard is a beauty and wellness platform that connects you to the best spas and salons in your area. Book your next appointment with Business Dashboard.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${valky.variable} ${raleway.variable} font-sans`}
    >
      <body>
        <div>
          <BusinessHeader />

          {children}
          <Toaster />
          
        </div>
       
      </body>
    </html>
  );
}
