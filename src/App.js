import CssBaseline from "@mui/material/CssBaseline";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Layout from "components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import { AuthProvider } from "contexts/AuthContext";

import AboutUs from "pages/AboutUs";
import AllProducts from "pages/AllProducts";
import Cart from "pages/Cart";
import Checkout from "pages/Checkout";
import ContactUs from "pages/ContactUs";
import History from "pages/History";
import Login from "pages/Login";
import Main from "pages/Main";
import NewArrival from "pages/NewArrival";
import Product from "pages/Product";
import Promotion from "pages/Promotion";
import PurchaseSuccess from "pages/PurchaseSuccess";
import Register from "pages/Register";
import RegisterSuccess from "pages/RegisterSuccess.js";

// Create a client
const THEME = createTheme({
    palette: {
        mode: "light",
    },
});

const App = () => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={THEME}>
                <CssBaseline />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <AuthProvider>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<Main />} />
                                <Route path="/all-products/*" element={<AllProducts />} />
                                <Route path="/new-arrival/*" element={<NewArrival />} />
                                <Route path="/promotion/*" element={<Promotion />} />
                                <Route path="/about-us/*" element={<AboutUs />} />
                                <Route path="/contact-us/*" element={<ContactUs />} />
                                <Route path="/product/*" element={<Product />} />
                                <Route path="/cart/*" element={<Cart />} />
                                <Route
                                    path="/checkout/*"
                                    element={
                                        <ProtectedRoute>
                                            <Checkout />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route
                                    path="/purchase-success/*"
                                    element={
                                        <ProtectedRoute>
                                            <PurchaseSuccess />
                                        </ProtectedRoute>
                                    }
                                />
                                <Route path="/login/*" element={<Login />} />
                                <Route path="/register/*" element={<Register />} />
                                <Route path="/register-success/*" element={<RegisterSuccess />} />
                                <Route
                                    path="/history/*"
                                    element={
                                        <ProtectedRoute>
                                            <History />
                                        </ProtectedRoute>
                                    }
                                />

                                {/* Todo: not found page */}
                                {/* <Route path="*" element={<PageNotFound />} /> */}
                            </Routes>
                        </Layout>
                    </AuthProvider>
                </LocalizationProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;
