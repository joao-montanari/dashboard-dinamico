import { Outlet } from "react-router-dom";

import './styles.sass';
import Header from "@Components/Header";
import Sidebar from "@Components/Sidebar";

const DefaultLayout = () => {
    return (
        <div className="default-layout-container">
            <Sidebar/>
            <div className="default-layout-content">
                <Header/>
                <Outlet/>
            </div>
        </div>
    )
}

export default DefaultLayout;