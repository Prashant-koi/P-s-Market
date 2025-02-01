import { Outlet } from "react-router-dom";
import FrontPage from "./frontpage";
import Header from "./header";

export default function Layout(){
    return(
        <>
        <Header />
        <Outlet />
        </>
    )
}