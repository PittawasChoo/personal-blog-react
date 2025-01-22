import React from "react";
import PropTypes from "prop-types";
import SlidingPane from "react-sliding-pane";
import Checkbox from "@mui/material/Checkbox";
import { grey } from "@mui/material/colors";

import "react-sliding-pane/dist/react-sliding-pane.css";

import "./stylesheet.css";
import {
    ScFilterContainer,
    ScFilterHeaderContainer,
    ScFilterHeaderLabel,
    ScFilterOptionContainer,
    ScFilterOptionLabel,
    ScFixedHeader,
    ScFixedResetButton,
    ScPaneHeaderLabel,
    ScPaneHeaderSpaceReserve,
    ScResetButtonSpaceReserve,
    ScRoot,
} from "./styles";

const SortPane = ({
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
    };

    const resetFilter = () => {
        setSelectedBrands([]);
        setSelectedSizes([]);
        setSelectedTypes([]);
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
                <ScFixedResetButton onClick={resetFilter}>Reset</ScFixedResetButton>

                {/* Header */}
                <ScPaneHeaderSpaceReserve />

                {/* Type */}
                <ScFilterContainer $hideBorderBottom={false}>
                    <ScFilterHeaderContainer>
                        <ScFilterHeaderLabel>TYPE</ScFilterHeaderLabel>
                    </ScFilterHeaderContainer>
                    <div>
                        {types.map((type) => {
                            return (
                                <ScFilterOptionContainer onClick={() => toggleSelectedType(type)}>
                                    <Checkbox
                                        size="small"
                                        sx={{
                                            color: grey[800],
                                            "&.Mui-checked": {
                                                color: grey[600],
                                            },
                                        }}
                                        value={type}
                                        checked={selectedTypes.includes(type)}
                                    />
                                    <ScFilterOptionLabel>{type}</ScFilterOptionLabel>
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
                                <ScFilterOptionContainer onClick={() => toggleSelectedSize(size)}>
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
                        {brands.map((brand) => {
                            return (
                                <ScFilterOptionContainer onClick={() => toggleSelectedBrand(brand)}>
                                    <Checkbox
                                        size="small"
                                        sx={{
                                            color: grey[800],
                                            "&.Mui-checked": {
                                                color: grey[600],
                                            },
                                        }}
                                        value={brand}
                                        checked={selectedBrands.includes(brand)}
                                    />
                                    <ScFilterOptionLabel>{brand}</ScFilterOptionLabel>
                                </ScFilterOptionContainer>
                            );
                        })}
                    </div>
                </ScFilterContainer>

                <ScResetButtonSpaceReserve />
            </ScRoot>
        </SlidingPane>
    );
};

SortPane.propTypes = {
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
};

export default SortPane;
