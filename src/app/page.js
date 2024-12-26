
import { Categories ,doctor } from "@/lib/data";
import Header from "./component/Header";
import HeroSection from "./component/HeroSection";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import DoctorSection from "./component/DoctorSection";



export default function Home() {
  return (
    <>
  <div className="min h-screen">
   
   {/* <Header/> */}

    <HeroSection/>

    <DoctorSection isHome={true}/>
  
  </div>
    
    
    </>
  );
}
