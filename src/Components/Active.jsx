import React from "react";
import MainHeading from "./MainHeading";
import { Link } from 'react-router-dom';
import{MagnifyingGlassIcon,ArrowRightStartOnRectangleIcon,ChevronDownIcon}from"@heroicons/react/24/outline";
import {EnvelopeIcon}from "@heroicons/react/24/outline";

const Transaction = [
    {
        name: "Jane cooper",
        email: 'esraa@gmail.com',
        phone: '0101245698',
       role: 'student',
        nuid: '2000241',
        tags: ['footaball','supply'],
       
        date:'7 jun 2023',
        edite:'   '
    },
    {
        name: "Cody Fisher",
        email: 'esraa@gmail.com',
        phone: '0101245698',
       role: 'student',
        nuid: '2000241',
        
        tags:['footaball','supply'],
        date:'7 jun 2023',
        edite:'   '
    },
    {
        name: "Esther Howard",
        email: 'esraa@gmail.com',
        phone: '0101245698',
       role: 'student',
        nuid: '2000241',
        tags: ['footaball','supply'],
        
        date:'7 jun 2023',
        edite:'   '
    },
    {
        name: "jenny Wilson",
        email: 'esraa@gmail.com',
        phone: '0101245698',
       role: 'student',
        nuid: '2000241',
        tags: ['footaball','supply'],
        
        date:'7 jun 2023',
        edite:'   '
    },
    {
        name: "Kristin Watson",
        email: 'esraa@gmail.com',
        phone: '0101245698',
       role: 'student',
        nuid: '2000241',
        tags: ['footaball','supply'],
       
        date:'7 jun 2023',
        edite:'   '
    },
    {
        name: "Cameron Williamson",
        email: 'esraa@gmail.com',
        phone: '0101245698',
       role: 'student',
        nuid: '2000241',
        tags: ['footaball','supply'],
        
        date:'7 jun 2023',
        edite:'   '
    },
    {
        name: "hane cooper",
        email: 'esraa@gmail.com',
        phone: '0101245698',
       role: 'student',
        nuid: '2000241',
        tags: ['footaball','supply'],
       
        date:'7 jun 2023',
        edite:'          '
    },  {
        name: "cody fisher",
        email: 'esraa@gmail.com',
        phone: '0101245698',
       role: 'student',
        nuid: '2000241',
        tags: ['footaball','supply'],
       
        date:'7 jun 2023',
        edite:'          '
    },  
]

const Active = () =>{
    return (<div className=" ">
       
        
        <div className="mt-5  border   rounded-md border-gray-200 bg-white   ">
            

            <table className=" flex-col  table-fixed flex w-full  border-b-2 border-gray-200 ">

 <thead className=" py-4 bg-gray-50 border-b-2 border-gray-300">
<tr className=" px-6 text-gray-900 text-sm font-light flex justify-between items-center" >
<th className=" pr-40 text-base font-medium leading-4 tracking-wide text-left text-gray-500 uppercase bg-gray-50 space-x-4 grow-1">Name</th>
<th className=" pr-6 text-base font-medium leading-4 tracking-wide text-left text-gray-500 uppercase bg-gray-50 space-x-4">Email</th>
<th className="  text-base font-medium leading-4 tracking-wide text-left text-gray-500 uppercase bg-gray-50 space-x-4">Phone Number</th>
<th className=" pr-4 text-base font-medium leading-4 tracking-wide text-left text-gray-500 uppercase bg-gray-50 space-x-4">Role</th>
<th className="pr-12 text-base font-medium leading-4 tracking-wide text-left text-gray-500 uppercase bg-gray-50 space-x-4">NUID</th>
<th className=" pr-4 text-base font-medium leading-4 tracking-wide text-left text-gray-500 uppercase bg-gray-50 space-x-4">Tags</th>
<th className=" pl-8 text-base font-medium leading-4 tracking-wide text-left text-gray-500 uppercase bg-gray-50 space-x-4">Date Joined</th>
<th className=" pr-8 text-base font-medium leading-4 tracking-wide text-left text-gray-500 uppercase bg-gray-50 space-x-4">Actions</th>
</tr>
</thead> 





    {/* <thead className="px-16 py-4 bg--50 "> 
        <tr className="  text-gray-900 text-sm font-light flex justify-between items-center ">
            
            <th className=" font-semibold">Name</th>
            <th className="font-semibold">Email</th>
            <th className=" font-semibold">Phone Number</th>
            <th className=" font-semibold">ROLE</th>
            <th className="font-semibold">NU ID</th>
            <th className=" font-semibold">TAGS</th>
            
            <th className=" font-semibold">DATA JOINED</th>
            <th className="grid justify-items-end font-semibold">hhhh</th>
            
            
        </tr>
    </thead> */}
    {/* <tbody className="flex flex-col divide-y-2  px-5  bg--50  justify-between "> */}
    <tbody className=" w-full divide-y-2 " >
        {Transaction.map((Transaction)=>(
        <tr key={Transaction.name} >
            <td className="p-3 pr-16 pl-6 text-sm font-semibold ">
                <span >{Transaction.name}</span>
                
                </td>
                
            <td className="pr-8 pl-8"> {Transaction.email}</td>
            <td className="px-6">{Transaction.phone}</td>
            <td className="px-6">{Transaction.role}</td>
            <td className="px-6">{Transaction.nuid}</td>
            <td className={Transaction.tags}>
            <div class="flex space-x-2 px-6">
<span class=" bg-[#3beda9] text-[#429e2b] text-sm/[20px] font-bold border-2 border-transparent rounded-full  " role="checkbox" tabindex="0">football</span>
<span class=" bg-[#FBE6E5] text-[#429e2b] text-base/2 font-bold border-2 border-transparent rounded-full    ">supplychain</span>
</div>

</td>
             <td className="pr-6">{Transaction.date}</td>
             <td>{Transaction.edite}<div class="flex space-x-2 px-1">
                {/* <p className="text-blue-500">delete</p>
                <p className="text-red-500">edite</p> */}
<button class="px-2 py-1 bg-[#00629D] text-white rounded">delete</button>
<button class="px-2 py-1 bg-green-500 text-white rounded">update</button>

</div>
</td>
            
             </tr>))}
             
             
            



           

        
    </tbody>

</table>
            





            
        </div>
        <div className="flex justify-between bg-[#f3f4f6] py-2  ">
       <div className="flex    text-{#84878d} font-light text-5m  border-b border-gray-200  drop-shadow-md ">
       <button
    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
    type="button">
        
        <ArrowRightStartOnRectangleIcon className="w-5 h-5"/>
        next 
    
  </button>
       </div>
       
      
        <div className="flex space-x-2 items-end">
          
<button
    className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
    type="button">
        next 
        <ArrowRightStartOnRectangleIcon className="w-5 h-5"/>
    
    
  </button>
        </div>
       
        
       
       

    </div>
    </div>);
};
export default Active;



