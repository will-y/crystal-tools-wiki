function breakIntoRows(array, num_per_row) {
    const result = [];
    let resultIndex = -1;
    for (let i = 0; i < array.length; i++) {
        if ((i % num_per_row) === 0) {
            resultIndex++;
            result.push([]);
        }
        result[resultIndex].push(array[i]);
    }

    return result;
}

export default breakIntoRows;
