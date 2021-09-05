class Preloader {
    handleClear(){
        ROOT_PRELOADER.innerHTML = '';
    }

    render(){
        const html = `
            <div class="preloader-container">
                <img class="preloader__img" src="components/Preloader/img/preloader.svg">
            </div>
        `;

        ROOT_PRELOADER.innerHTML = html;
    }
}

const preloaderPage = new Preloader();
