function capitalize(str) {
    if (str.length > 0) {
        return str.charAt(0).toUpperCase() + str.substring(1);
    }

    return str;
}

export default capitalize;
