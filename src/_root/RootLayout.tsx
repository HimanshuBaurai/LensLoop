//similar to AuthLayout page we will have a RootLayout page
//this page will have a navbar,sidebar,etc, and the pages will change inside it depending on the route

import { Outlet } from "react-router-dom";

import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";

const RootLayout = () => {
    return (
        <div className="w-full md:flex">
            <Topbar />
            <LeftSidebar />

            <section className="flex flex-1 h-full">
                <Outlet />
            </section>

            <Bottombar />
        </div>
    );
};

export default RootLayout;