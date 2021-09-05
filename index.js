function render(){
    const productsStore = localStorageUtil.getProducts();
    headerPage.render(productsStore.length);

    productsPage.render();  
}
preloaderPage.render();

let CATALOG = [];

fetch('http://myjson.dit.upm.es/api/bins/1vow')
                .then(res => res.json())
                .then(body => {
                    CATALOG = body;
                    preloaderPage.handleClear();
                    render();
                })
                .catch(error => {
                    preloaderPage.handleClear();
                    errorPage.render();
                })

