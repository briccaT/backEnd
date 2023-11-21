class ProductManager {
    constructor() {
        this.products = [];
    }

    static id = 0;

    addProducts(title, description, price, thumnail, code, stock) {
        ProductManager.id++;
        const product = {
            id: ProductManager.id,
            title,
            description,
            price,
            thumnail,
            code,
            stock
        }
        if (!product.title || !product.description || !product.price || !product.thumnail || !product.code || !product.stock) {
            console.error("Todos los campos son obligatorios.")
            return;
        }
        if (newProduct.products.some(product => product.code === code)) {
            console.error('Ya existe un producto con el mismo código.');
            return;
        }
        this.products.push(product);
    }

    getProducts() {
        console.log(this.products);
        return this.products;
    }

    getProductById(id) {
        const productSearch = this.products.find(product => product.id === id);
        if (productSearch) {
            console.log("Producto encontrado", productSearch);
        } else {
            console.error("Not found");
        }
    }
}

const newProduct = new ProductManager();

newProduct.addProducts("Banana", "Fruta tropical", 100, "https://www.freepik.com/free-photo/single-banana-isolated-white-background_47770123.htm#query=banana&position=0&from_view=search&track=sph&uuid=e9f83245-e09e-4d5d-bc14-f4c178675c35", "A1", 15);
newProduct.addProducts("Manzana", "Fruto del manzano", 90, "https://www.freepik.com/free-photo/front-view-fresh-red-apples-dark-background-color-tree-mellow-ripe-vitamine-apple-pear-juice-food-diet_22290922.htm#query=manzana&position=14&from_view=search&track=sph&uuid=97db285c-1ac8-41e6-812d-23b7841a9218", "A2", 20);
newProduct.addProducts("Naranja", "Fruto del naranjo", 50, "https://www.freepik.com/free-photo/cut-orange-parts-whole-fruit-with-green-leaves_8132443.htm#query=naranja&position=2&from_view=search&track=sph&uuid=e709b9d0-6610-4619-8e18-c3f53a4282f2", "A3", 23);
newProduct.getProducts();
newProduct.getProductById(1);