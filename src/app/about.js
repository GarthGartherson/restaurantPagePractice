import RestaurantImage from '../imgs/RestaurantFront.jpg'

const aboutInit = (content) => {
    content.innerHTML = content.innerHTML + 
        `        
        <div class="content_main">
            <div class="content_items-container">
                <div class="about_items-container">
                    <div class="about_header">
                        About Us
                    </div>
                    <div class="about_image-container"> 
                        <img src="" alt="">
                    </div>
                    <div class="about_description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt soluta quasi enim non repellendus amet error, 
                        quaerat quibusdam odio dolore? Quos expedita quam dolores vero, porro itaque consectetur dolor fugiat?
                    </div>
                </div>
            </div>
        </div>
        `
        const aboutImage = document.querySelector('.about_image-container img')
        aboutImage.src = `${RestaurantImage}`
}

export default aboutInit