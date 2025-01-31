import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import CircularProgress from "@mui/material/CircularProgress";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import ErrorRetry from "components/ErrorRetry";

import { FilterContext } from "contexts/FilterContext";

import FilterPane from "./FilterPane";
import {
    ScColon,
    ScDynamicSizeHeaderContainer,
    ScErrorContainer,
    ScHeaderContainer,
    ScHeaderLabel,
    ScHeaderToolsContainer,
    ScInput,
    ScOrangeDot,
    ScRemoveIconContainer,
    ScRemoveInput,
    ScRoot,
    ScSearchContainer,
    ScSearchIconContainer,
    ScSortingLoadingContainer,
    ScToolButtonContainer,
} from "./styles";

const ProductPage = ({ title, children }) => {
    // search params controller
    const [, setSearchParams] = useSearchParams();
    const onFilterChange = () => {
        setSearchParams((searchParams) => {
            searchParams.delete("page");
            return searchParams;
        });
    };

    // context to set and pass to children component to be fetch parameters
    const {
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

    // search controller
    const [searchInput, setSearchInput] = useState("");

    // filter pane controller
    const [isFilterPaneOpen, setIsFilterPaneOpen] = useState(false);

    const hasFilter =
        selectedBrands.length > 0 || selectedSizes.length > 0 || selectedTypes.length > 0;

    // block scrolling when the pane is opened
    isFilterPaneOpen
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");

    // sorting drop down controller
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleSelectSorting = (selectedMethod) => {
        setSortBy(selectedMethod);
        setAnchorEl(null);
        onFilterChange();
    };

    // header controller
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

    // get filter and sorting options
    const {
        data: brandsData,
        isError: isBrandsFetchingError,
        isFetching: isLoadingBrands,
        refetch: refetchBrands,
    } = useQuery({
        queryKey: ["brands"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3001/brands");
            return await response.json();
        },
    });
    const {
        data: typesData,
        isError: isTypesFetchingError,
        isFetching: isLoadingTypes,
        refetch: refetchTypes,
    } = useQuery({
        queryKey: ["types"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3001/types");
            return await response.json();
        },
    });
    const {
        data: sizesData,
        isError: isSizesFetchingError,
        isFetching: isLoadingSizes,
        refetch: refetchSizes,
    } = useQuery({
        queryKey: ["sizes"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3001/sizes");
            return await response.json();
        },
    });
    const {
        data: sortingOptionsData,
        isError: isSortingOptionsFetchingError,
        isFetching: isLoadingSortingOptions,
        refetch: refetchSortingOptions,
    } = useQuery({
        queryKey: ["sortings"],
        queryFn: async () => {
            const response = await fetch("http://localhost:3001/sorting-options");
            return await response.json();
        },
    });

    const brands = brandsData || [];
    const types = typesData || [];
    const sizes = sizesData || [];
    const sortingOptions = sortingOptionsData || [];

    const isLoadingFilterOptions = isLoadingBrands || isLoadingTypes || isLoadingSizes;
    const isFilterOptionsFetchingError =
        isBrandsFetchingError || isTypesFetchingError || isSizesFetchingError;
    const refetchFilterOptions = () => {
        refetchBrands();
        refetchTypes();
        refetchSizes();
    };

    const getSortingOptionsPopover = () => {
        if (isLoadingSortingOptions) {
            return (
                <ScSortingLoadingContainer>
                    <CircularProgress style={{ color: "grey" }} />
                </ScSortingLoadingContainer>
            );
        } else if (isSortingOptionsFetchingError) {
            return (
                <ScErrorContainer>
                    <ErrorRetry label="sorting options" onRetry={refetchSortingOptions} />
                </ScErrorContainer>
            );
        } else {
            return (
                <>
                    {sortingOptions.map((option) => {
                        return (
                            <MenuItem
                                key={option.key}
                                selected={sortBy === option.key}
                                onClick={() => handleSelectSorting(option.key)}
                            >
                                {option.label}
                            </MenuItem>
                        );
                    })}
                </>
            );
        }
    };

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
                isLoading={isLoadingFilterOptions}
                isError={isFilterOptionsFetchingError}
                refetch={refetchFilterOptions}
                onFilterChange={onFilterChange}
            />

            <ScDynamicSizeHeaderContainer
                variants={{
                    showShadow: { boxShadow: "-5px 2px 18px -4px rgba(0,0,0,0.2)" },
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
                        <ScHeaderLabel>{title.split(" ").join("  ")}</ScHeaderLabel>
                        <ScColon>:</ScColon>
                    </motion.div>

                    <ScHeaderToolsContainer>
                        <ScSearchContainer>
                            <ScInput
                                label="search"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                placeholder="Search"
                                onKeyUp={(event) => {
                                    if (event.key === "Enter") {
                                        setSearchParam(searchInput);
                                    }
                                }}
                            />
                            <ScRemoveInput>
                                {searchInput && (
                                    <ScRemoveIconContainer
                                        onClick={() => {
                                            setSearchInput("");
                                            setSearchParam("");
                                        }}
                                    >
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
                            {hasFilter && <ScOrangeDot />}
                        </ScToolButtonContainer>

                        {/* Sort */}
                        <ScToolButtonContainer onClick={handleClick}>
                            <img src="/images/shared/sort.png" alt="sort" width={16} height={16} />
                            SORT
                            {sortBy !== "featured" && <ScOrangeDot />}
                        </ScToolButtonContainer>

                        {/* Sorting Options */}
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                "aria-labelledby": "basic-button",
                            }}
                        >
                            {getSortingOptionsPopover()}
                        </Menu>
                    </ScHeaderToolsContainer>
                </ScHeaderContainer>
            </ScDynamicSizeHeaderContainer>

            {children}
        </ScRoot>
    );
};

ProductPage.propTypes = {
    title: PropTypes.string.isRequired,
};

export default ProductPage;
