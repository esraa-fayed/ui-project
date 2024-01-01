import React from "react";
import {PrinterIcon 
    }
    from"@heroicons/react/24/outline";
const ProfileButtons = [
    {name:"Report",bg:"bg-[#00629D]", color:"text-white" , hoverBg:"bg-indigo-700",icon: <PrinterIcon />},
];
const ProfileHeader = ()=>{
    return <div className=" flex justify-between py-8 bg-[#E5F2FA] w-100 h-100  ">
         <div></div>
          
    <div className=" flex gap-x-1  items-center font-bold text-4xl  ">Active User
    
    </div>
   
    {/* <div className="flex space-x-2 items-end"> 
{/* //<span className="">List Of Active NU App Users</span>  */}
{/* </div>  */}
<button
    class="align-middle select-none font-sans font-bold text-center  transition-all disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-lg bg-[#0261A5] text-white shadow-md  hover:shadow-lg  flex items-center gap-3"
    type="button">
   <PrinterIcon className="w-5 h-5"/>
   Report
  </button> 
 {/* <div>
 <div className="flex space-x-2 items-end"> 
<span className="">List Of Active NU App Users</span>  
 </div> */}
 
</div>; 
};

export default ProfileHeader;
//hover:bg-opacity-[90%]
//<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  ">
///<PrinterIcon className="h-4 w-5"/>Filter
//</button>


 