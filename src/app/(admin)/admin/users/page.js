import Image from "next/image";
import { Button } from "@/components/ui/button"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

  const users= [
    {
    fullname: "M moen",
    email:"sufyan123@gmail.com",
    location:"Karachi",
    profileImage:"https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhdGFyfGVufDB8fDB8fHww",
    events:"5"
  },{
    fullname: "M Waseem",
    email:"Waqar123@gmail.com",
    location:"Karachi",
    profileImage:"https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww",
    events:"5"
  },{
    fullname: "M Ali",
    email:"Ali123@gmail.com",
    location:"Karachi",
    profileImage:"https://plus.unsplash.com/premium_photo-1664536392779-049ba8fde933?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fHww",
    events:"5"
  }
]

export default function Users() {
  return (
    <div className="screen-full px-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl ">
         Users
        </h1>
        </div>
       <Table>
      <TableCaption>A list of your recent events.</TableCaption>
      <TableHeader>
        <TableRow>
        <TableHead>Fullname</TableHead>
          <TableHead className="w-[100px]">ProfileImage</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Location</TableHead>
          <TableHead className="text-right">Events</TableHead>
        </TableRow>
      </TableHeader> 
      <TableBody>
        {users.map((Users) => (
          <TableRow key={Users.events}>
            <TableCell className="font-medium">{Users.fullname}</TableCell>
            <TableCell><Image src={Users.profileImage} height={60} width={60}/></TableCell>
            <TableCell>{Users.email}</TableCell>
            <TableCell className="text-right">{Users.location}</TableCell>
            <TableCell className="text-right">{Users.events}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
    </div>
        
  );
}