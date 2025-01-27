import React, { useState } from "react";

import Pagination from "@mui/material/Pagination";
import { FilterProvider } from "contexts/FilterContext";
import { useSearchParams } from "react-router-dom";

import ProductPage from "components/ProductsPage";

import Products from "./Products";
import { ScPaginationContainer } from "./styles";

const Promotion = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page") || 1;
    const [currentPage, setCurrentPage] = useState(page);
    const [pageCount, setPageCount] = useState(1);
    const [showPagination, setShowPagination] = useState(true);

    return (
        <FilterProvider>
            <ProductPage title="PROMOTION">
                <Products
                    page={page}
                    setShowPagination={setShowPagination}
                    setPageCount={setPageCount}
                    setCurrentPage={setCurrentPage}
                />
                {showPagination && (
                    <ScPaginationContainer>
                        <Pagination
                            size="large"
                            defaultPage={1}
                            count={pageCount}
                            page={currentPage}
                            onChange={(e, page) => {
                                setSearchParams((searchParams) => {
                                    if (page === 1) {
                                        searchParams.delete("page");
                                    } else {
                                        searchParams.set("page", page);
                                    }
                                    return searchParams;
                                });
                            }}
                        />
                    </ScPaginationContainer>
                )}
            </ProductPage>
        </FilterProvider>
    );
};

export default Promotion;
