const persistence = "MONGO";

let productsService;
let cartService;
let messagesService;
switch (persistence) {
    case "MEMORY":
        const {default:MemProduct} = await import('./MemoryDAO/Products.js');
        const {default:MemCart} = await import('./MemoryDAO/Carts.js');
        productsService = new MemProduct();
        cartService = new MemCart();
        break;
    case "FILESYSTEM":
        const {default:FileProduct} = await import('./FileDAO/Products.js');
        const {default:FileCart} = await import('./FileDAO/Carts.js');
        productsService = new FileProduct();
        cartService = new FileCart();
        break;
    case "MONGO":
        const {default:ProductsMongo} = await import('./MongoDAO/Products.js');
        const {default:CartsMongo} = await import('./MongoDAO/Carts.js');
        const {default:MessageMongo} = await import('./MongoDAO/Messages.js');
        productsService = new ProductsMongo();
        cartService = new CartsMongo();
        messagesService = new MessageMongo();
}

const services = {
    productsService,
    cartService,
    messagesService
}

export default services;