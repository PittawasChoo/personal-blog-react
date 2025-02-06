import React, { useState } from "react";

import { ScImage, ScLoading, ScRoot } from "./styles";

const LazyImage = ({ src, alt, style, ...props }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <ScRoot
            style={{
                ...style,
            }}
        >
            {/* Placeholder / Skeleton */}
            {!loaded && <ScLoading />}

            <ScImage
                $loaded={loaded}
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                {...props}
            />
        </ScRoot>
    );
};

export default LazyImage;
