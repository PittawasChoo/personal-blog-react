import React, { useContext } from "react";

import BigCard from "components/Card/BigCard";

import { FilterContext } from "contexts/FilterContext";

import products from "./all-products.json";
import { ScBody, ScBodyContainer, ScCardContainer } from "./styles";

const Products = () => {
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

    return (
        <ScBodyContainer>
            <ScBody>
                {products.map((product) => {
                    return (
                        <ScCardContainer key={product.id}>
                            <BigCard
                                imgUrl={product.imgUrl}
                                brand={product.brand}
                                name={product.name}
                                price={product.price}
                                promotionPrice={product.promotionPrice}
                            />
                        </ScCardContainer>
                    );
                })}
            </ScBody>
        </ScBodyContainer>
    );
};

export default Products;
