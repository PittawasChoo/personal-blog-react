export const FormatToLocaleString = (number) => {
    return number.toLocaleString(undefined, { maximumFractionDigits: 2 });
};
