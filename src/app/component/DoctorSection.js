

import { Categories, doctor, data } from "@/lib/data";
// import Header from "./component/Header";
// import HeroSection from "./component/HeroSection";
// import {data} from "@/lib/data"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  // isHome,
} from "@/components/ui/select"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { AvatarImage } from "@radix-ui/react-avatar";
import { Banknote, HomeIcon, HospitalIcon } from "lucide-react";
import Doctors from "../Doctors/page";

  


export default  function DoctorSection({isHome}) {
 
  const filtered = isHome? doctor.slice(0,6) : doctor;

  return (
    <>
    <div className="container mx-auto my-2 p-7">
  <div className=" flex justify-between mt-10">
   <h1 className="font-bold text-3xl ms-2 font ">Premium Doctors</h1>
   
   
   {isHome ? (
          <Link href={"/Doctors"}>
            <Button>See All</Button>
          </Link>
        ) : (
          <div>
            
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                
                {Categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
                </div>
        )}

   
  
   
   
  </div>
  
<div className="grid my-3 grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-3">

    {
   filtered.map((doctor)=> <Card>
   <CardHeader className="flex  justify-evenly">
   <Avatar>
    <AvatarImage src="https://github.com/shadcn.png"/>
    <AvatarFallback>DAS</AvatarFallback>
    </Avatar>
     <CardTitle>{doctor.name}</CardTitle>
     <CardDescription className="font-bold">{doctor.category}</CardDescription>
   </CardHeader>
   {
    !isHome &&
    <CardContent>
    <h2 className="font-bold">{doctor.hospital}</h2>

    <h1 className="font-bold mt-3 flex justify-between"><h1>Fee </h1>{doctor.fees}</h1>
    <div className="flex justify-between">
     <div className="flex gap-2 justify-between ">
     {/* <HomeIcon /> */}
     


     <h1 className="font-bold">Gender</h1>
     </div>
    <h1 className="font-semibold  ">{doctor.gender}</h1>

    </div>
    {/* <div className="mt-3 flex justify-between"> */}

   <div className="flex justify-between  ">

    <h1 className="font-bold ">AppointmentTime</h1>
    <h1 className=" ms-3 font-bold flex justify-between">{doctor.appointmentTime}</h1>
    
   </div>
   

   
 
  </CardContent>

   }
   
   
   <CardFooter>
    <Link href={`/Doctors/${doctor.id}`}>
    <Button >see Details</Button>
    </Link>
   </CardFooter>
   
 </Card>
 
   

 )}
 


</div>
    </div>


  
    
    
    </>
  );
}
