import React from "react";
import Container from "./Container";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="border-t-2 border-darkMahron pt-8">
      <Container>
        <div className="bg-black text-white p-8 rounded-lg min-h-60">
          <div className="flex flex-col md:flex-row justify-around">
            <div className="flex justify-center items-center w-15">
              <h2 className="text-6xl font-valky text-lighttext">
                Glow <br /> Scout
              </h2>
            </div>
            <div className="flex flex-col md:flex-row  md:space-y-0 md:space-x-24 font-raleway text-center text-lighttext">
              <div>
                <h3 className="font-semibold mb-2 text-lg">Quick Links</h3>
                <ul className="py-2">
                  <li>
                    <Link href="/" className="hover:underline">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/treatment" className="hover:underline">
                      Treatments
                    </Link>
                  </li>
                  <li>
                    <Link href="/spas" className="hover:underline">
                      Spas
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:underline">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3>
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy{" "}
                  </Link>
                </h3>
                <ul className="py-2">
                  <li>
                    <Link href="/terms-conditions" className="hover:underline">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:underline">
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-lg">Follow Us</h3>
                <ul className="py-2">
                  <li>
                    <Link href="#" className="hover:underline">
                      Instagram
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:underline">
                      YouTube
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
