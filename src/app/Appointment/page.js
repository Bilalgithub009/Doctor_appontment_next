"use client"
import { appendMutableCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import {  columns , } from "../component/AppointmentTable/columns";
import { AppointmentTable } from "../component/AppointmentTable/data_table";
import { appointments } from "@/lib/data";
// import { AppointmentTable } from "../component/AppointmentTable/data_table";

export default function Appointments(){
return(
<>
<div className="container mx-auto">
<div className="my-10">
 <AppointmentTable columns={columns} data={appointments}   />

</div>
  {/* <h1 className="text-3xl mt-4 font-bold text-center">APPOINTMENT</h1>   */}


</div>
</>



)


}