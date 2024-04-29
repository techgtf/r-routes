import { Outlet } from "react-router-dom";
import Header from "./component/HeaderFooter/Header";
import Footer from "./component/HeaderFooter/Footer";

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
export default Layout;