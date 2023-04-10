const images = {
    1: {
        imageUrl: "https://testImages.com/book",
        imageData: "This is a Book",
        altText: "Sorry could not load this book",
    },
    2: {
        imageUrl: "https://testImages.com/cd",
        imageData: "This is a CD",
        altText: "Sorry could not load this cd",
    },
    4: {
        imageUrl: "https://testImages.com/calculator",
        imageData: "This is a Calculator",
        altText: "Sorry could not laod this Calculator",
    },
};
const products = {
    10: {
        name: "book",
        producId: 10,
        imageId: 1,
    },
    11: {
        name: "cd",
        producId: 11,
        imageId: 2,
    },
    12: {
        name: "laptop",
        producId: 12,
    },
    13: {
        name: "calculator",
        producId: 13,
        imageId: 4,
    },
};
function generateProducts(ids) {
    const productsList = ids.map((id) => {
        const product = products[id];
        if (product.imageId !== undefined && images[product.imageId] !== undefined) {
            const { imageUrl, imageData, altText } = images[product.imageId];
            const productImage = Object.assign(Object.assign({}, product), { imageUrl, imageData, altText });
            return productImage;
        }
        return product;
    });
    console.log(productsList);
    return productsList;
}
generateProducts([10, 12]);
function processCreditCardOrder(order) {
    console.log("Contacting Credit Card Company for Order ", order);
}
function processPaypalOrder(order) {
    console.log("Contacting PayPal for Order ", order);
}
function isCreditCardOrder(order) {
    return "ccn" in order;
}
;
function processOrders(orders) {
    orders.forEach((order) => {
        if (isCreditCardOrder(order)) {
            processCreditCardOrder(order);
        }
        else {
            processPaypalOrder(order);
        }
    });
}
;
const order1 = {
    OrderNumber: 1,
    Amount: 345342,
    ProductIds: [10, 12],
    email: "adfgi@ewr.de"
};
const order2 = {
    OrderNumber: 2,
    Amount: 67675,
    ProductIds: [12, 16, 10],
    ccn: 23453654764723
};
const order3 = {
    OrderNumber: 3,
    Amount: 3453,
    ProductIds: [10, 17],
    email: "adfgi@ewr.de"
};
const order4 = {
    OrderNumber: 4,
    Amount: 345342,
    ProductIds: [13, 16, 11],
    ccn: 23456546323
};
processOrders([order1, order2, order3, order4]);
//# sourceMappingURL=uebung.js.map