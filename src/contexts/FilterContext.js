import React, { createContext, useState } from "react";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
    // search state
    const [searchParam, setSearchParam] = useState("");

    // filter state
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);

    // sort state
    const [sortBy, setSortBy] = useState("featured");

    return (
        <FilterContext.Provider
            value={{
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
            }}
        >
            {children}
        </FilterContext.Provider>
    );
};

export { FilterContext, FilterProvider };
