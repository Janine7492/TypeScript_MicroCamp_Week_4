interface Products {
    [productId: number]: Product;
  }
  
  interface Images {
    [imageId: number]: Image;
  }

  interface Product {
    name: string;
      producId: number;
      imageId?: number
  }

  interface Image{
    imageUrl: string;
    imageData: string;
    altText: string
  }

  type ProductImage = Product & Image;
  
  const images: Images = {
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
  
  const products: Products = {
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

  function generateProducts(ids: number[]): (Product | ProductImage)[] {
    const productsList = ids.map((id) => {
      const product = products[id];
      if (product.imageId !== undefined && images[product.imageId] !== undefined) {
        const { imageUrl, imageData, altText } = images[product.imageId];
        const productImage = { ...product, imageUrl, imageData, altText };
        return productImage;
      }
      return product;
    });
  
    console.log(productsList);
  
    return productsList;
  }
  
  generateProducts([10, 12]);

  interface Order {
    OrderNumber: number;
    Amount: number;
    ProductIds: number[];
  }

  interface Paypal{
    email: string;
  }

  interface Creditcard {
    ccn: number
  }

  type CreditCardOrder = Order & Creditcard;

  type PaypalOrder = Order & Paypal;

  function processCreditCardOrder(order: CreditCardOrder): void {
    console.log("Contacting Credit Card Company for Order ", order);
  }
  
  function processPaypalOrder(order: PaypalOrder): void {
    console.log("Contacting PayPal for Order ", order);
  }
  
  function isCreditCardOrder(order: CreditCardOrder | PaypalOrder): order is CreditCardOrder {
   return "ccn" in (order as CreditCardOrder);
  };

  function processOrders(orders: (PaypalOrder|CreditCardOrder)[]){
    orders.forEach((order) => {
        if(isCreditCardOrder(order as CreditCardOrder)){
            processCreditCardOrder(order as CreditCardOrder)
        } else{
            processPaypalOrder(order as PaypalOrder)
        }
    })
  };

  const order1: CreditCardOrder | PaypalOrder = {
    OrderNumber : 1,
    Amount: 345342,
    ProductIds: [10, 12],
    email: "adfgi@ewr.de"
  }
  const order2: CreditCardOrder | PaypalOrder = {
    OrderNumber : 2,
    Amount:67675,
    ProductIds: [12, 16, 10],
    ccn: 23453654764723
  }

  const order3: CreditCardOrder | PaypalOrder = {
    OrderNumber : 3,
    Amount: 3453,
    ProductIds: [10, 17],
    email: "adfgi@ewr.de"
  }

  const order4: CreditCardOrder | PaypalOrder = {
    OrderNumber : 4,
    Amount: 345342,
    ProductIds: [13, 16, 11],
    ccn: 23456546323
  }

  processOrders([order1, order2, order3, order4]);