import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

import BigCard from "components/Card/BigCard";
import Footer from "components/Footer";
import Navbar from "components/Navbar";

import brands from "./brands.json";
import products from "./all-products.json";
import sizes from "./sizes.json";
import types from "./types.json";

import FilterPane from "./FilterPane";
import {
    ScBody,
    ScBodyContainer,
    ScCardContainer,
    ScDynamicSizeHeaderContainer,
    ScHeaderContainer,
    ScHeaderToolsContainer,
    ScInput,
    ScNavbarSpaceReserve,
    ScPageContainer,
    ScRedDot,
    ScRemoveIconContainer,
    ScRemoveInput,
    ScRoot,
    ScSearchContainer,
    ScSearchIconContainer,
    ScToolButtonContainer,
} from "./styles";

const SORTING_OPTIONS = [
    { label: "Featured", value: "featured" },
    { label: "Name: A-Z", value: "nameAscending" },
    { label: "Name: Z-A", value: "nameDescending" },
    { label: "Price: Low-High", value: "priceAscending" },
    { label: "Price: High-Low", value: "priceDescending" },
    { label: "Newest", value: "dateAscending" },
    { label: "Oldest", value: "dateDescending" },
];

const AllProducts = () => {
    // search state
    const [searchInput, setSearchInput] = useState("");
    const [searchParam, setSearchParam] = useState("");

    // filter state
    const [isFilterPaneOpen, setIsFilterPaneOpen] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);

    // sort state
    const [sortBy, setSortBy] = useState("featured");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [bigText, setBigText] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrollPosition(latest);

        if (latest > 80) setBigText(false);
        else setBigText(true);
    });

    const getHeaderContainerSize = () => {
        return scrollPosition <= 120 ? 200 - scrollPosition : 80;
    };

    const handleSelectSorting = (selectedMethod) => {
        setSortBy(selectedMethod);
        setAnchorEl(null);
    };

    const hasFilter =
        selectedBrands.length > 0 || selectedSizes.length > 0 || selectedTypes.length > 0;

    // block scrolling when the pane is opened
    isFilterPaneOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");

    return (
        <ScRoot>
            <FilterPane
                brands={brands}
                isOpen={isFilterPaneOpen}
                onClose={() => setIsFilterPaneOpen(false)}
                sizes={sizes}
                types={types}
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
                selectedSizes={selectedSizes}
                setSelectedSizes={setSelectedSizes}
                selectedTypes={selectedTypes}
                setSelectedTypes={setSelectedTypes}
            />

            <Navbar alwaysShowBackground />
            <ScNavbarSpaceReserve />

            <ScPageContainer>
                <ScDynamicSizeHeaderContainer
                    variants={{
                        showShadow: { boxShadow: "-5px 2px 18px 2px rgba(0,0,0,0.2)" },
                        hideShadow: { boxShadow: "none" },
                    }}
                    animate={!bigText ? "showShadow" : "hideShadow"}
                    transition={{ duration: 0.2, ease: "linear" }}
                    style={{
                        height: `${getHeaderContainerSize()}px`,
                    }}
                >
                    <ScHeaderContainer>
                        <motion.div
                            variants={{
                                bigText: { fontSize: "70px", lineHeight: "60px" },
                                smallText: { fontSize: "35px", lineHeight: "35px" },
                            }}
                            animate={bigText ? "bigText" : "smallText"}
                            transition={{ duration: 0.2, ease: "linear" }}
                        >
                            ALL&nbsp;&nbsp;PRODUCTS
                        </motion.div>

                        <ScHeaderToolsContainer>
                            <ScSearchContainer>
                                <ScInput
                                    label="search"
                                    value={searchInput}
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        setSearchInput(e.target.value);
                                    }}
                                    placeholder="Search"
                                />
                                <ScRemoveInput>
                                    {searchInput && (
                                        <ScRemoveIconContainer onClick={() => setSearchInput("")}>
                                            <img
                                                src="/images/shared/close.png"
                                                alt="filter"
                                                width={8}
                                                height={8}
                                            />
                                        </ScRemoveIconContainer>
                                    )}
                                </ScRemoveInput>
                                <ScSearchIconContainer onClick={() => setSearchParam(searchInput)}>
                                    <img
                                        src="/images/shared/search.png"
                                        alt="filter"
                                        width={12}
                                        height={12}
                                    />
                                </ScSearchIconContainer>
                            </ScSearchContainer>

                            {/* Filter */}
                            <ScToolButtonContainer onClick={() => setIsFilterPaneOpen(true)}>
                                <img
                                    src="/images/shared/filter.png"
                                    alt="filter"
                                    width={16}
                                    height={16}
                                />
                                FILTER
                                {hasFilter && <ScRedDot />}
                            </ScToolButtonContainer>

                            {/* Sort */}
                            <ScToolButtonContainer onClick={handleClick}>
                                <img
                                    src="/images/shared/sort.png"
                                    alt="sort"
                                    width={16}
                                    height={16}
                                />
                                SORT
                                {sortBy !== "featured" && <ScRedDot />}
                            </ScToolButtonContainer>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    "aria-labelledby": "basic-button",
                                }}
                            >
                                {SORTING_OPTIONS.map((option) => {
                                    return (
                                        <MenuItem
                                            key="value"
                                            selected={sortBy === option.value}
                                            onClick={() => handleSelectSorting(option.value)}
                                        >
                                            {option.label}
                                        </MenuItem>
                                    );
                                })}
                            </Menu>
                        </ScHeaderToolsContainer>
                    </ScHeaderContainer>
                </ScDynamicSizeHeaderContainer>

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

                <Footer />
            </ScPageContainer>
        </ScRoot>
    );
};

export default AllProducts;
