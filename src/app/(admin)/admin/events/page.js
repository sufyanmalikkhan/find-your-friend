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
    title: "Birthday event",
    description:"Birthday Cummunity all member",
    location:"Karachi",
    thumbnails:"https://plus.unsplash.com/premium_photo-1681841200807-458beeca3d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlydGhkYXklMjBldmVudHN8ZW58MHx8MHx8fDA%3D",
    date: new Date ().toLocaleDateString(),
  },  {
    title: "Cycling Marathon",
    description:"Cycling Marathon All Member",
    location:"Karachi",
    thumbnails:"https://media.istockphoto.com/id/1688423980/photo/a-smiling-female-tourist-in-a-yellow-coat-enjoys-the-weather-in-the-autumn-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=uTlmrx8bI-Z6m4QBMUshV4R4lTPv99gzzF6hnPj9euM=",
    date: new Date ().toLocaleDateString(),
  },  {
    title: "Fotball event",
    description:"Fotball Marathon ",
    location:"Karachi",
    thumbnails:"https://plus.unsplash.com/premium_photo-1677146014998-01764d1b0ab1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvdGJhbGwlMjBtYXJhdGhvbnxlbnwwfHwwfHx8MA%3D%3D",
    date: new Date ().toLocaleDateString(),
  },
]

export default function events() {
  return (
    <div className="screen-full px-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl ">
         Events
        </h1>
        </div>
       <Table>
      <TableCaption>A list of your recent events.</TableCaption>
      <TableHeader>
        <TableRow>
        <TableHead>Title</TableHead>
          <TableHead className="w-[100px]">ProfileImage</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Location</TableHead>
          <TableHead className="text-right">Date</TableHead>
        </TableRow>
      </TableHeader> 
      <TableBody>
        {users.map((events) => (
          <TableRow key={events.title}>
            <TableCell className="font-medium">{events.title}</TableCell>
            <TableCell><img src={events.thumbnails} height={60} width={60}/></TableCell>
            <TableCell>{events.description}</TableCell>
            <TableCell className="text-right">{events.location}</TableCell>
            <TableCell className="text-right">{events.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
     
    </Table>
    </div>
        
  );
}