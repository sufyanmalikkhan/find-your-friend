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
import { AddSubCategory } from "@/components/ui/AddSubCategory/AddSubCategory";

  const subcategories= [
    {
    title: "Cricket",
    category:"Sport",
    thumbnails:"https://plus.unsplash.com/premium_photo-1681841200807-458beeca3d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlydGhkYXklMjBldmVudHN8ZW58MHx8MHx8fDA%3D",
    description:"Birthday Cummunity all member",
   
  }, {
    title: "tenis",
    category:"Sport",
    thumbnails:"https://plus.unsplash.com/premium_photo-1681841200807-458beeca3d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlydGhkYXklMjBldmVudHN8ZW58MHx8MHx8fDA%3D",
    description:"Birthday Cummunity all member",
   
  },  {
    title: "fotball",
    category:"Sport",
    thumbnails:"https://plus.unsplash.com/premium_photo-1681841200807-458beeca3d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmlydGhkYXklMjBldmVudHN8ZW58MHx8MHx8fDA%3D",
    description:"Birthday Cummunity all member",
   
  }
]

export default function Subcategories() {
  return (
    <div className="screen-full px-10">
      <div className="flex justify-between items-center my-4">
        <h1 className="font-bold text-xl ">
         SubCategory
        </h1>
        <AddSubCategory/>
      </div>
       <Table>
      <TableCaption>A list of your Subcategories.</TableCaption>
      <TableHeader>
        <TableRow>
        <TableHead>Title</TableHead>
          <TableHead className="w-[100px]">ProfileImage</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader> 
      <TableBody>
        {subcategories.map((Subcategories) => (
          <TableRow key={Subcategories.title}>
            <TableCell className="font-medium">{Subcategories.title}</TableCell>
            <TableCell><img src={Subcategories.thumbnails} height={60} width={60}/></TableCell>
            <TableCell>{Subcategories.category}</TableCell>
            <TableCell>{Subcategories.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
     
    </Table>
    </div>
        
  );
}