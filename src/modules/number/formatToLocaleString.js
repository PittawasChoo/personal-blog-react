export const formatToLocaleString = (number) => {
    return number.toLocaleString(undefined, { maximumFractionDigits: 2 });
};
