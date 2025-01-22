import CssBaseline from "@mui/material/CssBaseline";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import AboutUs from "pages/AboutUs";
import AllProducts from "pages/AllProducts";
import ContactUs from "pages/ContactUs";
import Main from "pages/Main";
import NewArrival from "pages/NewArrival";
import Promotion from "pages/Promotion";

const DARK_THEME = createTheme({
    palette: {
        mode: "dark",
    },
});

const App = () => {
    return (
        <ThemeProvider theme={DARK_THEME}>
            <CssBaseline />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/all-products/*" element={<AllProducts />} />
                    <Route path="/new-arrival/*" element={<NewArrival />} />
                    <Route path="/promotion/*" element={<Promotion />} />
                    <Route path="/about-us/*" element={<AboutUs />} />
                    <Route path="/contact-us/*" element={<ContactUs />} />
                    {/* Todo: not found page */}
                    {/* <Route path="*" element={<PageNotFound />} /> */}
                </Routes>
            </LocalizationProvider>
        </ThemeProvider>
    );
};

export default App;
