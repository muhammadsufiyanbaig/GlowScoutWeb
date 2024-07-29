import BookNow from "@/components/reuseableComponenet/BookNow";
import TrandingTreatment from "@/components/reuseableComponenet/TrandingTreatment";
import ClientTestimonials from "@/components/reuseableComponenet/ClientTestimonials";
import HeroSection from "@/components/helper/homeComponet/HeroSection";
import ScotWorkSection from "@/components/helper/homeComponet/ScotWorkSection";
import AboutGlow from "@/components/helper/homeComponet/AboutGlow";
import SignupAsBusiness from "@/components/helper/homeComponet/SinupAsBusiness";

export default function page() {
  return (
    <>
      <HeroSection />
      {/* <div className="mb-5">
        <BookNow />
      </div> */}

      {/* home scot work start  */}

      <ScotWorkSection />
      {/* home scot work end  */}

      {/* tranding treatment start */}

      <TrandingTreatment />

      {/* tranding treatment end */}

      {/* client testimonial start */}

      <ClientTestimonials />

      {/* client testimonial end  */}

      {/* about glow start  */}

      <AboutGlow />

      {/* about glow end  */}

      {/* signup for business section start  */}

      <SignupAsBusiness />

      {/* signup for business section  end*/}
    </>
  );
}
