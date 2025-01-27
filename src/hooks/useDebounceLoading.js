import { useEffect, useState } from "react";

const useDebounceLoading = (isLoading, delay = 300) => {
    const [shouldShowLoading, setShouldShowLoading] = useState(false);

    useEffect(() => {
        let timer;

        if (isLoading) {
            // When `isLoading` becomes `true`, immediately show loading
            setShouldShowLoading(true);
        } else {
            // When `isLoading` becomes `false`, delay changing the loading state to false >> longer time to show loading page
            timer = setTimeout(() => {
                setShouldShowLoading(false);
            }, delay);
        }

        return () => clearTimeout(timer); // Cleanup timer on unmount or before re-triggering
    }, [isLoading, delay]);

    return shouldShowLoading;
};

export default useDebounceLoading;
