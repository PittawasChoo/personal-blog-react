import React, { useEffect } from "react";

import { useLocation } from "react-router-dom";

const Product = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.search]);

    return <div>Cart</div>;
};

export default Product;
