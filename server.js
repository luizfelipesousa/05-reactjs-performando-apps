module.exports = () => {
    const data = {
        product: []
    }

    for (let index = 1; index <= 1000; index++) {

        data.product.push({
            id: index,
            name: `Product ${index}`,
            price: 80
        });
    }

    return data;
}