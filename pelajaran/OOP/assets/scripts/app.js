const productList = {
  product: [
    {
      title: "Bantal",
      imgUrl:
        "https://www.google.com/search?q=Bantal&safe=strict&sxsrf=ALeKk03ZZBMtkxRmEcbNHpKEyS7fhZvbaQ:1613201214228&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-1MzqqubuAhVj7nMBHfC_AOAQ_AUoAXoECAgQAw&biw=1171&bih=995#imgrc=i9iOqaKWtBwS-M",
      price : 15000   
    },
    {
      title: "Bantal",
      imgUrl:
        "https://www.google.com/search?q=Bantal&safe=strict&sxsrf=ALeKk03ZZBMtkxRmEcbNHpKEyS7fhZvbaQ:1613201214228&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi-1MzqqubuAhVj7nMBHfC_AOAQ_AUoAXoECAgQAw&biw=1171&bih=995#imgrc=i9iOqaKWtBwS-M",
      price : 15000   
    },
  ],

  render() {
      const renderHook = document.getElementById('app')
      const prodList = document.createElement('ul')
     prodList.className = 'product-list';
     for (const prod of this.productList) {
          const prodEl = document.createElement('li')
          prodEl.className = 'product-item';
          prodEl.innerHTML = `
          <div>
          <img src="${prod.imgUrl}" alt="${prod.title}">
          <div class="product-item__content">
                <h2>/${prod.title}</h2>
                <h3>/${prod.price}</h3>
            <button> Add To Cart</button>
          </div>
          </div>
          `;
          prodList.append(prodEl);
     }
     renderHook.append(prodList)
  }
};
