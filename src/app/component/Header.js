import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { tree } from "next/dist/build/templates/app-page";

  

export default function Header(){

const session = {name: "bilal"};
return(
<>
<div className="bg-secondary p-4">
    <div className="flex container mx-auto justify-between  ">
<Link href={"/"}><h1 className="text-2xl font-bold font-mono ms-4  ">LOGO</h1></Link> 
{/* <Image src={"https://medicall.pk/storage/img/hospitals/19564736160722952867.jpg"}/> */}
{
session ?
<Menubar>
  <MenubarMenu>
    <MenubarTrigger className=" border-none bg-transparent">
    <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    </MenubarTrigger>
    <MenubarContent>
      
      <Link href={'/profile'}><MenubarItem>Profile</MenubarItem></Link>
      <MenubarSeparator />

      <Link href={'/Appointment'}><MenubarItem>My Appointment</MenubarItem></Link>
      <MenubarSeparator />
      <MenubarItem>Logout</MenubarItem>
      <MenubarSeparator />

    </MenubarContent>
  </MenubarMenu>
</Menubar>
:
<Link href={"/Signin"}><Button className="me-2" variant = {"outline"}>Login</Button></Link>

}

    </div>


</div>




</>




)

}