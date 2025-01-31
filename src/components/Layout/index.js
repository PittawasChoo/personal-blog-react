import { useLocation } from "react-router-dom";

import Footer from "components/Footer";
import Navbar from "components/Navbar";

import { ScBody, ScNavbarSpaceReserve, ScRoot } from "./styles";

const Layout = ({ children }) => {
    const location = useLocation();

    // Define routes where the Navbar should start with transparent
    const transparentNavBarRoutes = ["/"];
    const alwaysShowBackground = !transparentNavBarRoutes.includes(location.pathname);

    return (
        <ScRoot>
            <Navbar alwaysShowBackground={alwaysShowBackground} />
            {alwaysShowBackground && <ScNavbarSpaceReserve />}

            <ScBody $hasPaddingTop={alwaysShowBackground}>{children}</ScBody>

            <Footer />
        </ScRoot>
    );
};

export default Layout;
