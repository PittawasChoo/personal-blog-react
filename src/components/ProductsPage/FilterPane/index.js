import React from "react";
import PropTypes from "prop-types";

import Checkbox from "@mui/material/Checkbox";
import CircularProgress from "@mui/material/CircularProgress";
import SlidingPane from "react-sliding-pane";
import { grey } from "@mui/material/colors";
import { orderBy } from "lodash";

import ErrorRetry from "components/ErrorRetry";

import "./stylesheet.css";
import {
    ScErrorContainer,
    ScFilterContainer,
    ScFilterHeaderContainer,
    ScFilterHeaderLabel,
    ScFilterOptionContainer,
    ScFilterOptionLabel,
    ScFixedHeader,
    ScFixedResetButton,
    ScLoaderContainer,
    ScPaneHeaderLabel,
    ScPaneHeaderSpaceReserve,
    ScResetButtonSpaceReserve,
    ScRoot,
} from "./styles";

import "react-sliding-pane/dist/react-sliding-pane.css";

const FilterPane = ({
    brands,
    isOpen,
    onClose,
    sizes,
    types,
    selectedBrands,
    setSelectedBrands,
    selectedSizes,
    setSelectedSizes,
    selectedTypes,
    setSelectedTypes,
    isLoading,
    isError,
    refetch,
    onFilterChange,
}) => {
    const toggleSelectedType = (value) => {
        const isSelected = selectedTypes.includes(value);

        if (isSelected) {
            const filteredTypes = selectedTypes.filter((type) => type !== value);
            setSelectedTypes(filteredTypes);
        } else {
            const updatedTypes = [...selectedTypes, value];
            setSelectedTypes(updatedTypes);
        }

        onFilterChange();
    };

    const toggleSelectedSize = (value) => {
        const isSelected = selectedSizes.includes(value);

        if (isSelected) {
            const filteredSizes = selectedSizes.filter((size) => size !== value);
            setSelectedSizes(filteredSizes);
        } else {
            const updatedSizes = [...selectedSizes, value];
            setSelectedSizes(updatedSizes);
        }

        onFilterChange();
    };

    const toggleSelectedBrand = (value) => {
        const isSelected = selectedBrands.includes(value);

        if (isSelected) {
            const filteredBrands = selectedBrands.filter((brand) => brand !== value);
            setSelectedBrands(filteredBrands);
        } else {
            const updatedBrands = [...selectedBrands, value];
            setSelectedBrands(updatedBrands);
        }

        onFilterChange();
    };

    const resetFilter = () => {
        setSelectedBrands([]);
        setSelectedSizes([]);
        setSelectedTypes([]);
    };

    const getBodyContent = () => {
        if (isLoading) {
            return (
                <ScLoaderContainer>
                    <CircularProgress style={{ color: "grey" }} />
                </ScLoaderContainer>
            );
        } else if (isError) {
            return (
                <ScErrorContainer>
                    <ErrorRetry size="m" label="filter options" onRetry={refetch} />
                </ScErrorContainer>
            );
        } else
            return (
                <>
                    {/* Type */}
                    <ScFilterContainer $hideBorderBottom={false}>
                        <ScFilterHeaderContainer>
                            <ScFilterHeaderLabel>TYPE</ScFilterHeaderLabel>
                        </ScFilterHeaderContainer>
                        <div>
                            {types.map((type) => {
                                return (
                                    <ScFilterOptionContainer
                                        key={type.id}
                                        onClick={() => toggleSelectedType(type.id)}
                                    >
                                        <Checkbox
                                            size="small"
                                            sx={{
                                                color: grey[800],
                                                "&.Mui-checked": {
                                                    color: grey[600],
                                                },
                                            }}
                                            value={type.id}
                                            checked={selectedTypes.includes(type.id)}
                                        />
                                        <ScFilterOptionLabel>{type.name}</ScFilterOptionLabel>
                                    </ScFilterOptionContainer>
                                );
                            })}
                        </div>
                    </ScFilterContainer>

                    {/* Size */}
                    <ScFilterContainer $hideBorderBottom={false}>
                        <ScFilterHeaderContainer>
                            <ScFilterHeaderLabel>SIZE</ScFilterHeaderLabel>
                        </ScFilterHeaderContainer>
                        <div>
                            {sizes.map((size) => {
                                return (
                                    <ScFilterOptionContainer
                                        key={size}
                                        onClick={() => toggleSelectedSize(size)}
                                    >
                                        <Checkbox
                                            size="small"
                                            sx={{
                                                color: grey[800],
                                                "&.Mui-checked": {
                                                    color: grey[600],
                                                },
                                            }}
                                            value={size}
                                            checked={selectedSizes.includes(size)}
                                        />
                                        <ScFilterOptionLabel>{size}</ScFilterOptionLabel>
                                    </ScFilterOptionContainer>
                                );
                            })}
                        </div>
                    </ScFilterContainer>

                    {/* Brand */}
                    <ScFilterContainer $hideBorderBottom={true}>
                        <ScFilterHeaderContainer>
                            <ScFilterHeaderLabel>BRAND</ScFilterHeaderLabel>
                        </ScFilterHeaderContainer>
                        <div>
                            {orderBy(brands, "name").map((brand) => {
                                return (
                                    <ScFilterOptionContainer
                                        key={brand.id}
                                        onClick={() => toggleSelectedBrand(brand.id)}
                                    >
                                        <Checkbox
                                            size="small"
                                            sx={{
                                                color: grey[800],
                                                "&.Mui-checked": {
                                                    color: grey[600],
                                                },
                                            }}
                                            value={brand.id}
                                            checked={selectedBrands.includes(brand.id)}
                                        />
                                        <ScFilterOptionLabel>{brand.name}</ScFilterOptionLabel>
                                    </ScFilterOptionContainer>
                                );
                            })}
                        </div>
                    </ScFilterContainer>
                </>
            );
    };

    return (
        <SlidingPane isOpen={isOpen} onRequestClose={onClose} width="275px" hideHeader>
            <ScRoot>
                <ScFixedHeader>
                    <ScPaneHeaderLabel>FILTER</ScPaneHeaderLabel>
                    <img
                        src="/images/shared/close.png"
                        alt="close"
                        width={16}
                        height={16}
                        onClick={onClose}
                    />
                </ScFixedHeader>
                <ScPaneHeaderSpaceReserve />

                {getBodyContent()}

                <ScFixedResetButton onClick={resetFilter}>Reset</ScFixedResetButton>
                <ScResetButtonSpaceReserve />
            </ScRoot>
        </SlidingPane>
    );
};

FilterPane.propTypes = {
    brands: PropTypes.array.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    sizes: PropTypes.array.isRequired,
    types: PropTypes.array.isRequired,
    selectedBrands: PropTypes.array.isRequired,
    setSelectedBrands: PropTypes.func.isRequired,
    selectedSizes: PropTypes.array.isRequired,
    setSelectedSizes: PropTypes.func.isRequired,
    selectedTypes: PropTypes.array.isRequired,
    setSelectedTypes: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    isError: PropTypes.bool.isRequired,
    refetch: PropTypes.func.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default FilterPane;
