import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";

import BigCard from "components/Card/BigCard";

import { FilterContext } from "contexts/FilterContext";

import { ScBody, ScBodyContainer, ScCardContainer } from "./styles";

const Products = () => {
    // Todo: fetch with filter below
    const {
        searchParam,
        setSearchParam,
        selectedBrands,
        setSelectedBrands,
        selectedSizes,
        setSelectedSizes,
        selectedTypes,
        setSelectedTypes,
        sortBy,
        setSortBy,
    } = useContext(FilterContext);

    const { data, error, isFetching } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3001/products");
            return await response.json();
        },
    });

    const products = data || [];

    return (
        <ScBodyContainer>
            <ScBody>
                {products.map((product) => {
                    return (
                        <ScCardContainer key={product.id}>
                            <BigCard
                                imgUrl={`http://localhost:3001/images/${product.imgName}`}
                                brand={product.brand}
                                name={product.name}
                                price={Number(product.price)}
                                promotionPrice={Number(product.promotionPrice)}
                            />
                        </ScCardContainer>
                    );
                })}
            </ScBody>
        </ScBodyContainer>
    );
};

export default Products;
