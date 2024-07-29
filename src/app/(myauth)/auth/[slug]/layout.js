import "@/app/globals.css";
import { Toaster } from "@/components/ui/toaster";
import localFont from "next/font/local";

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
  title: "Glow Scout",
  description:
    "Glow Scout is a beauty and wellness platform that connects you to the best spas and salons in your area. Book your next appointment with Glow Scout.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${valky.variable} ${raleway.variable} font-sans`}
    >
      <body>
        <div>
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
