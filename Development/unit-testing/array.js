const removeEvens = () => {
    const oddArray = array.filter((number) => number % 2 != 0)
    return oddArray;
}
module.exports = removeEvens

const getTotalArrLength = (array) => {
    return array.length
}

module.exports = {removeEvens, getTotalArrLength}