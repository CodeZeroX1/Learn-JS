class Product {
  // title = "Default";
  // imgUrl;
  // price;

  constructor(title, imgUrl, price) {
    this.title = title;
    this.imgUrl = imgUrl;
    this.price = price;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log("Adding Product List...");
    console.log(this.product);
  }
  render() {
    const prodEl = document.createElement("li");
    prodEl.className = "product-item";
    prodEl.innerHTML = `
            <div>
            <img src="${this.product.imgUrl}" alt="${this.product.title}">
            <div class="product-item__content">
                  <h2>/${this.product.title}</h2>
                  <h3>\$ ${this.product.price}</h3>
              <button> Add To Cart</button>
            </div>
            </div>
            `;
    const addCartButton = document.querySelector("button");
    addCartButton.addEventListener("click", this.addToCart.bind(this));
    return prodEl;
  }
}

class ProductList {
  products = [
    new Product("Bantal", "Gambar", 15000),
    new Product("Bantal", "Gambar", 15000),
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("li");
    prodList.className = "product-list";
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

const productList = new ProductList();
productList.render();
