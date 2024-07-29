import TreatmentCard from "@/components/reuseableComponenet/TreatmentCard";
import Container from "@/components/reuseableComponenet/Container";
import BlogProgress from "@/components/reuseableComponenet/BlogProgress";

const page = ({ params }) => {
  const id = params.id;

  return (
    <div className="container py-6 font-raleway mb-4 relative">
<div className="border-t-2 border-darkMahron">

      <div className="text-center py-10">
        <h2 className="text-4xl md:text-6xl font-thin text-darkMahron  ">
          Reviewing the latest beauty <br /> innovations in 2024
        </h2>
        {/* <p> blog id: {id}</p> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
        <div className="">
          <TreatmentCard
            image={"/images/blog/single-1.png"}
            imageAlt={"blog"}
            label={"Featured Blog"}
            
          />
        </div>
        <Container>
          <div>
            <div>
              <p className="my-2 text-muted-foreground">
                Dive into the enchanting world of fall-inspired makeup trends.
                From warm hues to bold lip colours, discover the latest beauty
                trends that will elevate your autumn beauty routine.Brands are
                integrating AR technology into their platforms, allowing users
                to virtually try on makeup, experiment with different
                hairstyles, and test skincare products before making a purchase.
                This immersive online shopping experience enhances user
                engagement and confidence in product selection.
              </p>
            </div>

            <div>
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Biometric Beauty</h2>
                <p className="text-muted-foreground">
                  Biometric technology is making its mark in the beauty world.
                  Customized skincare formulations based on individual biometric
                  undefined, such as DNA and skin microbiome analysis, are
                  becoming more prevalent. These personalized approaches ensure
                  that beauty products are tailored to meet the specific needs
                  of each user, unlocking the potential for truly individualized
                  skincare. Virtual try-ons and augmented reality (AR)
                  experiences are transforming the way we shop for beauty
                  products online. Brands are integrating AR technology into
                  their platforms, allowing users to virtually try on makeup,
                  experiment with different hairstyles, and test skincare
                  products before making a purchase. This immersive online
                  shopping experience enhances user engagement and confidence in
                  product selection.
                </p>
              </section>
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Neurocosmetics</h2>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>
                    Neurocosmetics, blending neuroscience and beauty, is gaining
                    momentum.
                  </li>
                  <li>
                    Products enhance mood and well-being through sensory
                    experiences.
                  </li>
                  <li>
                    Skincare and makeup infused with ingredients promote
                    relaxation and stress relief.
                  </li>
                </ul>
              </section>
              <section>
                <h2 className="text-xl font-semibold mb-2">
                  Virtual Try-Ons and AR Experiences
                </h2>
                <ol className="list-decimal list-inside text-muted-foreground">
                  <li>AR technology transforms online beauty shopping.</li>
                  <li>
                    Virtual try-ons allow users to experiment with makeup,
                    hairstyles, and skincare products.
                  </li>
                  <li>
                    Immersive online experiences enhance user confidence and
                    engagement.
                  </li>
                </ol>
              </section>

              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">
                  What is Glow Scout?
                </h2>
                <p className="text-muted-foreground">
                  Biometric technology is making its mark in the beauty world.
                  Customized skincare formulations based on individual biometric
                  undefined, such as DNA and skin microbiome analysis, are
                  becoming more prevalent. These personalized approaches ensure
                  that beauty products are tailored to meet the specific needs
                  of each user, unlocking the potential for truly individualized
                  skincare. Virtual try-ons and augmented reality (AR)
                  experiences are transforming the way we shop for beauty
                  products online. Brands are integrating AR technology into
                  their platforms, allowing users to virtually try on makeup,
                  experiment with different hairstyles, and test skincare
                  products before making a purchase. This immersive online
                  shopping experience enhances user engagement and confidence in
                  product selection.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </div>
      <BlogProgress />
      </div>
    </div>
  );
};

export default page;
