import Coffeeshop from '../imgs/coffeeShop.jpg'

const homeInit = (content) => {
    content.innerHTML = content.innerHTML + 
        `
        <div class="content_main">
            <div class="content_items-container">
                <div class="home_image-container"> 
                    <img class="home_image" src="../src/coffeeShop.jpg" alt="">
                </div>
                <div class="content_items-name">
                    Big Pauli's Greek
                </div>
                <div class="content_items-address">
                    321 Adrianou Street
                </div>
            </div>
        </div>
        `
        const homeImage = document.querySelector('.home_image')
        homeImage.src = `${Coffeeshop}`
}

export default homeInit