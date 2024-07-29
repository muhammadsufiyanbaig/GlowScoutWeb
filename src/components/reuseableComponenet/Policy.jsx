import React from "react";
import Link from "next/link";

const Policy = ({ title, content }) => {
  return (
    <div className="container py-6 font-raleway  mb-4">
      <div className="border-t-2 border-darkMahron">
      <div>
        <div className="text-center py-10">
          <h2 className="text-6xl font-thin text-darkMahron">{title}</h2>
          <p className="mt-2 text-lg md:text-xl font-thin text-darkMahron">{content}</p>
        </div>
        <p className="px-6">
          This {title} outlines the manner in which{" "}
          <Link href={"/"} className=" font-bold text-darkMahron">
            Glow Scout
          </Link>{" "}
          collects, uses, maintains, and discloses information gathered from
          users (&rdquo;you&rdquo; or &rdquo;your&rdquo;) of our website,
          products, and services. By accessing or using our website, products,
          or services, you consent to the practices described in this Privacy
          Policy.
        </p>
      </div>
      <div className="my-5">
        <div className="p-6 text-darkMahron">
          <div className="space-y-6">
            <div>
              <h2 className="font-semibold text-lg">
                1. Information We Collect:
              </h2>
              <p className="mt-2">
                We may collect personal and non-personal information from users
                in various ways, including but not limited to:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li className="font-semibold">Personal Information:</li>
                <ul className="list-disc list-inside ml-6">
                  <li>Name</li>
                  <li>Contact information (email address, phone number)</li>
                  <li>Billing information</li>
                  <li>Any information voluntarily provided by the user</li>
                </ul>
                <li className="font-semibold mt-4">
                  Non-personal Information:
                </li>
                <ul className="list-disc list-inside ml-6">
                  <li>Browser type</li>
                  <li>Device type</li>
                  <li>IP address</li>
                  <li>Usage patterns and preferences</li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Policy;
