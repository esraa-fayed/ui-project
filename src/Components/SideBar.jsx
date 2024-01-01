
import {HomeIcon, ClockIcon, ScaleIcon, CreditCardIcon, 
    UserGroupIcon, DocumentChartBarIcon,UsersIcon,BellIcon,ShieldExclamationIcon,PresentationChartLineIcon,EnvelopeOpenIcon
    }
    from"@heroicons/react/24/outline";
import React from "react";
import Menu from "./Menu";


                
const SideBar = ()=>{
    const Tabs = {
        upperTabs: [{
        icons:<HomeIcon/>,
        name: "Dashboard",
             current:"fale",
        },{
            icons:<UsersIcon/>,
            name: "Active Users",
                 current:"fale",
            },
            {
                icons:<ScaleIcon/>,
                name: "Gate Activity",
                     current:"fale",
                },
                {
                    icons:<CreditCardIcon/>,
                    name: "Events",
                         current:"fale",
                    },
                    {
                        icons:<PresentationChartLineIcon/>,
                        name: "News",
                             current:"fale",
                        },{
                            icons:<BellIcon/>,
                            name: "Notifications",
                                 current:"fale",
                            },{
                                icons:<EnvelopeOpenIcon/>,
                                name: "Guest Inivitations",
                                     current:"fale",
                                },
                        {
                            icons:<ShieldExclamationIcon/>,
                            name: "Manage Gate Access",
                                 current:"fale",
    }],};
    return(

        <div className="bg-[#00629D]   overflow-hidden px-3 py-10 w-full">
         <div className="flex items-center ">
         <img src="./logo_white.png" alt="logo" className="w-15 h-12  mb-4 flex " />
            <p className="px-4 text-white font-bold text-2xl">Admin Panal</p>
         </div>
            

           
        <Menu Tabs= {Tabs}/>

    </div>
    ) ;
};
export default SideBar;