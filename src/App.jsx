import React from "react";
import Profile from "./Components/Profile";
import SideBar from "./Components/SideBar";
import Dashboard from "./Components/Dashboard"
const App = ()=>{
    return (
        <div className="  mx-auto min-h-screen lg:max-w-10xl  border border-gray-200 rounded-md overflow-hidden   ">
        
        <div className="grid grid-cols-5  ">
            <SideBar/>
        <div className="col-span-4 w-full">
            <Profile/>
            <Dashboard/>
        </div>
        </div>
    </div>
    );
};
export default App;
