class Products {
    constructor() {
        this.classNameActive = ' products-element__btn_active';
        this.labelAdd = 'Добавить в корзину';
        this.labelRemove = 'Удалить из корзины';
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);
        
        if (pushProduct){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, src, price}) => {
            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1){
                activeText = this.labelAdd;
            } else {
                activeText = this.labelRemove;
                activeClass = this.classNameActive;
            }

            htmlCatalog += `
                <li class="products-element">
                    <span class="products-element__name">${name}</span>
                    <img src="${src}" class="products-element__img"/>
                    <span class="products-element__price">${price.toLocaleString()} USD</span>
                    <button class="products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                        ${activeText}
                    </button>
                </li>
            `;
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    } //отображает данные на страничке
}

const productsPage = new Products();
productsPage.render();