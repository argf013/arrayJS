function solution(inputArray) {
    let maxProduct = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length - 1; i++) {
        const product = inputArray[i] * inputArray[i+1];
        console.log(product)
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
    return maxProduct;
}
