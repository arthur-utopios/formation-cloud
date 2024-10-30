
export const keysAreValid = (obj, keys) => Object.keys(obj).every(key => keys.includes(key));

export const allKeysArePresent = (obj, keys) => {
    const objKeys = Object.keys(obj);
    return keys.every(key => objKeys.includes(key));
};


export const validDockerInputImage = (image) => {
    const re = /[a-z0-9]+(?:[._-]{1,2}[a-z0-9]+)*/;
    return re.test(image)
}
