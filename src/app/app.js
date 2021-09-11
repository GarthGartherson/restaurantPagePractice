
import Bread from '../imgs/Bread.jpg'
import Pasta from '../imgs/Pasta.jpg'
import Kebab from '../imgs/Kebab.jpg'
import Sandwich from '../imgs/Sandwich.jpg'
const menuInit = (content) => {
    content.innerHTML = content.innerHTML + 
    `<div class="content_main">
            <div class="content_items-container">
                <div class="menu_item">
                    <div class="menu_image-container">
                        <img class="menu_item-image breadImage "src="" alt="">
                    </div>
                    <div class="menu_item-title">
                        Greek Salad
                    </div>
                    <div class="menu_item-price">
                        15
                    </div>
                    <div class="menu_item-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, nemo!
                    </div>
                </div>
                <div class="menu_item">
                    <div class="menu_image-container">
                        <img class="menu_item-image pastaImage" src="" alt="">
                    </div>
                    <div class="menu_item-title">
                        Greek Pasta
                    </div>
                    <div class="menu_item-price">
                        20
                    </div>
                    <div class="menu_item-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit vitae, sunt corporis 
                    </div>
                </div>
                <div class="menu_item">
                    <div class="menu_image-container">
                        <img class="menu_item-image sandwichImage" src="" alt="">
                    </div>
                    <div class="menu_item-title">
                        Greek Salad
                    </div>
                    <div class="menu_item-price">
                        15
                    </div>
                    <div class="menu_item-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum perferendis quos minus.
                    </div>
                </div>
                <div class="menu_item">
                    <div class="menu_image-container">
                        <img class="menu_item-image kebabImage" src="" alt="">
                    </div>
                    <div class="menu_item-title">
                        Kebab
                    </div>
                    <div class="menu_item-price">
                        23
                    </div>
                    <div class="menu_item-description">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, maxime?
                    </div>
                </div>
            </div>
        </div>
    `;
    const bread = document.querySelector('.breadImage')
    const pasta = document.querySelector('.pastaImage')
    const kebab = document.querySelector('.kebabImage')
    const sandwich = document.querySelector('.sandwichImage')

    bread.src = `${Bread}`;
    pasta.src = `${Pasta}`;
    kebab.src = `${Kebab}`;
    sandwich.src = `${Sandwich}`;
}

export default menuInit;