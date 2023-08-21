import React from "react";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router-dom";

function Root() {
    return (
        <div className="App">
            <div className="posts">
                <Outlet />
            </div>
            <div className="navBar box">
                <SideBar/>
            </div>
            
        </div>
    )
}
export default Root;