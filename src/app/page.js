import About from "../../public/assets/components/About";
import AvoidMyths from "../../public/assets/components/AvoidMyths";
import BookQuote from "../../public/assets/components/BookQuote";
import Download from "../../public/assets/components/Download";
import Footer from "../../public/assets/components/Footer";
import FormSection from "../../public/assets/components/FormSection";
import HeroSection from "../../public/assets/components/HeroSection"; 


export default function Home() {
  return (
   <div className=" bg-[#010101]">
      <HeroSection/>
      <Download/>
      <FormSection/>
      <BookQuote/>
      <About/>
      <AvoidMyths/>
      <Footer/>
   </div>
  
  );
}
