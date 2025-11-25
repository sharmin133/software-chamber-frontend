import DevelopmentProcess from "@/components/Home/DevelopmentProcess";
import { Hero } from "@/components/Home/Hero";
import WhyChoose from "@/components/Home/WhyChoose";

export default function Home() {
  return (
    <div>
      <Hero />

     <div className="overflow-hidden">
       <div className="containerbg ">
        <WhyChoose />
      </div>

      
      <div className="bg-white">
        <DevelopmentProcess />
      </div>
     </div>
     

    </div>
  );
}

