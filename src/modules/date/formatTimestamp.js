export const formatTimestamp = (timestamp) => {
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "numeric",
    };
    return new Date(timestamp).toLocaleDateString(undefined, options);
};
