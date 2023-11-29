const fs = require('fs');

class ProductManager {
    constructor(path) {
        this.path = path;
    }

    static id = 0;

    async addProducts(product) {
        ProductManager.id++;
        if (!product.title || !product.description || !product.price || !product.thumnail || !product.code || !product.stock) {
            console.error("Todos los campos son obligatorios.")
            return;
        }
        const { title, description, price, thumnail, code, stock } = product;
        const products = await this.getProducts();
        const newProduct = {
            id: ProductManager.id,
            title,
            description,
            price,
            thumnail,
            code,
            stock
        }
        console.log(newProduct)
        products.push(newProduct);
        const productsFile = await fs.promises.writeFile(this.path, JSON.stringify(products), "utf-8");
    }

    async updateProduct(product, id) {
        const products = await this.getProducts();
        const index = products.findIndex(product => product.id === id);
        if (index !== -1) {
            products[index] = { ...products[index], ...product };
            await fs.promises.writeFile(this.path, JSON.stringify(products), "utf-8")
            console.log(`Producto con ID ${id} actualizado exitosamente.`);
        } else {
            console.log(`No se encontró un producto con el ID ${id}.`);
        }
    }

    async getProducts() {
        try {
            const products = await fs.promises.readFile(this.path, "utf-8");
            const parsedData = JSON.parse(products);
            return parsedData;
        } catch (error) {
            return [];
        }
    }

    async getProductById(id) {
        const products = await this.getProducts();
        const productId = products.find(product => product.id === id);
        if (productId) {
            console.log(productId);
        } else {
            console.error("El producto no fue encontrado o no existe");
        }
    }

    async deleteProduct(id) {
        const products = await this.getProducts();
        const productId = products.findIndex(product => product.id === id);
        if (productId !== -1) {
            products.splice(productId, 1);
            await fs.promises.writeFile(this.path, JSON.stringify(products), "utf-8")
            console.log(`El producto con el ID ${id} fue eliminado.`)
        } else {
            console.error(`No se encontró un producto con el ID ${id}.`);
        }
    }
}

const test = async () => {
    const productManager = new ProductManager("./products.json");
    let data = await productManager.getProducts();
/*     const product1 = {
        title: "Banana",
        description: "Fruta tropical",
        price: 100,
        thumnail: "https://www.freepik.com/free-photo/single-banana-isolated-white-background_47770123.htm#query=banana&position=0&from_view=search&track=sph&uuid=e9f83245-e09e-4d5d-bc14-f4c178675c35",
        code: "A1",
        stock: 15
    }
    const product2 = {
        title: "Manzana",
        description: "Fruto del manzano",
        price: 50,
        thumnail: "https://www.freepik.com/free-photo/front-view-fresh-red-apples-dark-background-color-tree-mellow-ripe-vitamine-apple-pear-juice-food-diet_22290922.htm#query=manzana&position=14&from_view=search&track=sph&uuid=97db285c-1ac8-41e6-812d-23b7841a9218",
        code: "A2",
        stock: 20
    }
    await productManager.addProducts(product1);
    await productManager.addProducts(product2); */
    const product3 = {
        title: "Naranja",
        description: "Fruto del naranjo",
        price: 70,
        thumnail: "https://www.freepik.com/free-photo/cut-orange-parts-whole-fruit-with-green-leaves_8132443.htm#query=naranja&position=2&from_view=search&track=sph&uuid=e709b9d0-6610-4619-8e18-c3f53a4282f2",
        code: "A3",
        stock: 23
    }
    productManager.getProductById(2);
/*     productManager.updateProduct(product3, 2); */
    productManager.deleteProduct(1);
}

test();