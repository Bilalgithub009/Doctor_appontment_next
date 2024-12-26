import { Button } from "@/components/ui/button"
import { DatePicker } from "@/components/ui/DatePicker"
import { Input } from "@/components/ui/input"
import { doctor } from "@/lib/data"
import { TimerIcon } from "lucide-react"
import Image from "next/image"

export default function DoctorDetail({params}){

 const doctorInfo = doctor.find((doctor)=> doctor.id == params.id)   
return(
<>
<div className="min-h-screen">
  <div className="container py-10 px-5 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
    <div className="relative w-full lg:w-1/2 h-64 lg:h-auto rounded overflow-hidden">
  <Image
    alt="ecommerce"
    height={400}
    width={400}
    src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9jdG9yfGVufDB8fDB8fHww"
    className="w-full h-full object-cover object-center"
  />
</div>

      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
          {doctorInfo.category}
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          {doctorInfo.name}
        </h1>
        
        <p className="leading-relaxed">
          Fam locavore kickstarter distillery. Mixtape chillwave tumeric
          sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps
          cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine
          tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean
          shorts keytar banjo tattooed umami cardigan.
        </p>
        
        <div className="mt-3 flex justify-between border border-gray-30 py-2 px-2 hover:bg-gray-100">
        
        <h1 className="font-bold ">Gender</h1>
        <h1 className="font-semibold  ">{doctorInfo.gender}</h1>
        
        </div>
        <div className="mt-3 flex justify-between border border-gray-30 py-2 px-2 hover:bg-gray-100">

        <h1 className="font-bold">Fees</h1>
        <h1 className="font-semibold ">${doctorInfo.fees}</h1>
        
        </div>
        <div className="mt-3 flex justify-between border border-gray-30 py-2 px-2 hover:bg-gray-100">

        <h1 className="font-bold">Appointment Time</h1>
        <h1 className="font-semibold ">{doctorInfo.appointmentTime}</h1>
        
        </div>
        
        <div className="mt-3 flex justify-between border border-gray-30 py-2 px-2 hover:bg-gray-100">
        <h1 className="font-bold">Hospital</h1>
        <h1 className="font-semibold ">{doctorInfo.hospital}</h1>
        
        </div>

        <DatePicker/>
        
       <Button className="w-full mt-3">Book Your Appointment</Button>

        
    </div>
  </div>
</div>


</div>



</>


)


}