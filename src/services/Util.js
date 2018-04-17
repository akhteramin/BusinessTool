export const capitalizeFirstLetter = string => {
    return string.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

export const replaceSpace = string => string.split(' ').join('_');