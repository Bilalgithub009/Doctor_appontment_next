import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


export default function HeroSection(){
return(
<>
<section className="text-gray-600 body-font">
  <div className="container font-bold mx-auto mt-1 flex ms-2 p-7   md:flex-row flex-col justify-between">
    <div className="lg:flex-grow md:w-3/4 md: pr-16 flex flex-col md:items-start md: text-left mb-16 md:mb-0 items-center  ">
    <h1 className=" mt-2 font-bold sm:text-4xl text-2xl mb-4  text-black ">
        Welcome Fatima Bai Tai          
        <br className="mt-2 hidden mb- lg:inline-block" />
       Hospital Managment System
      </h1>
      <p className="text-xl mb-8 leading-relaxed font-sans text-black">
      Fatima Bai Hospital is located at Siddiqabad Fb Area Block 3 , Karachi, Sindh, Pakistan.
      </p>
      <div className="flex justify-between items-center">


          <Button variant="outline" className="gap-2">Find Your Doctor You Need</Button>
         <Link href={"/Doctors/apply"}><Button className="ms-4">Apply as a Doctor</Button></Link>

        
      </div>
    </div>
    <div className=" container mx-auto lg:max-w-lg lg:w-full md:w-1/2 w-5/1 flex justify-end">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        height={450}
        width={450}
        src="https://images.unsplash.com/photo-1605684954998-685c79d6a018?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRvY3RvciUyMGltYWdlfGVufDB8fDB8fHww"
      />
    </div>


  </div>
</section>




</>



)

}