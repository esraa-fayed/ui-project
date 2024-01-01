import React from "react";
import ProfileBody from "./ProfileBody";
import ProfileHeader from "./ProfileHeader";


const Profile = ()=>{
    return ( <div className=" divide-y-1 divide-gray-100   border-b border-gray-200  drop-shadow-md">
        
     
        <ProfileBody />
            
        
        <ProfileHeader />
    </div>)
};
export default Profile;