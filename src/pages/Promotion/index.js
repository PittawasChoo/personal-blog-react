import React from "react";
import { FilterProvider } from "contexts/FilterContext";

import ProductPage from "components/ProductsPage";

import Products from "./Products";

const AllProducts = () => {
    return (
        <FilterProvider>
            <ProductPage title="PROMOTION">
                <Products />
            </ProductPage>
        </FilterProvider>
    );
};

export default AllProducts;
