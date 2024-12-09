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
import { AddCategory } from "@/components/ui/AddCategory/AddCategory";

  const categories= [
    {
    title: "Birthday event",
    thumbnails:"https://plus.unsplash.com/premium_photo-1681841200807-458beeca3d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlydGhkYXklMjBldmVudHN8ZW58MHx8MHx8fDA%3D",
    description:"Birthday Cummunity all member",
   
  },   {
    title: "Indoor sport",
    thumbnails:"https://images.unsplash.com/photo-1513028738826-f000cded30a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZG9vciUyMHNwb3J0fGVufDB8fDB8fHww",
    description:"Birthday Cummunity all member",
   
  },  {
    title: "Sports",
    thumbnails:"https://plus.unsplash.com/premium_photo-1685303469251-4ee0ea014bb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnRzfGVufDB8fDB8fHww",
    description:"Birthday Cummunity all member",
   
  },
]

export default function Categories() {
  return (
    <div className="screen-full px-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl ">
         Category
        </h1>
        <AddCategory/>
      </div>
       <Table>
      <TableCaption>A list of your Categories.</TableCaption>
      <TableHeader>
        <TableRow>
        <TableHead>Title</TableHead>
          <TableHead className="w-[100px]">ProfileImage</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader> 
      <TableBody>
        {categories.map((Categories) => (
          <TableRow key={Categories.title}>
            <TableCell className="font-medium">{Categories.title}</TableCell>
            <TableCell><img src={Categories.thumbnails} height={60} width={60}/></TableCell>
            <TableCell>{Categories.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
     
    </Table>
    </div>
        
  );
}