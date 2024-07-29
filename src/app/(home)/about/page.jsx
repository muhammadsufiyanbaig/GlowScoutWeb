import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";

const page = () => {
  return (
    <div className="container py-6 md:mt-6 font-raleway  mb-4">
      <div className="border-t-2 border-darkMahron">
        <div className="text-center py-5">
          <h2 className="text-6xl text-darkMahron">About Us</h2>
          <p className="mt-2 text-xl text-darkMahron">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut nibh
            faucibus.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
          <div className=" ">
            <TreatmentCard
              image="/images/about-page-1.png"
              imageAlt="Featured Blog"
            />
          </div>
          <div className="flex justify-center items-start flex-col gap-4 p-5">
            <h2 className="text-4xl md:text-6xl font-light text-darkMahron">
              What is Glow Scout?
            </h2>
            <p className="mt-2 text-lg md:text-2xl text-darkMahron font-thin">
              &rdquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut ut nibh faucibus. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut ut nibh faucibus.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
              nibh faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut ut nibh faucibus. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.
            </p>
          </div>
        </div>
        <p className="px-6">
          This About Us outlines the manner in which Glow Scout collects, uses,
          maintains, and discloses information gathered from users
          (&rdquo;you&rdquo; or &rdquo;your&rdquo;) of our website, products,
          and services. By accessing or using our website, products, or
          services, you consent to the practices described in this Privacy
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
            <div>
              <h2 className="font-semibold text-lg">
                2. How We Use Collected Information:
              </h2>
              <p className="mt-2">
                We may use the information we collect for the following
                purposes:
              </p>
              <ul className="list-disc list-inside mt-2">
                <li>To improve customer service</li>
                <li>To personalize user experience</li>
                <li>To process transactions</li>
                <li>To send periodic emails</li>
                <li>To improve our website, products, and services</li>
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                3. How We Protect Your Information:
              </h2>
              <p className="mt-2">
                We adopt appropriate undefined collection, storage, and
                processing practices, and security measures to protect against
                unauthorized access, alteration, disclosure, or destruction of
                your personal information, username, password, transaction
                information, and undefined stored on our site.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-lg">
                4. Sharing Your Personal Information:
              </h2>
              <p className="mt-2">
                We do not sell, trade, or rent users&rdquo; personal
                identification information to others. We may share generic
                aggregated demographic information not linked to any personal
                identification information regarding visitors and users with our
                business partners, trusted affiliates, and advertisers for the
                purposes outlined above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
