import './app/stylesheets/menu.css';
import './app/stylesheets/home.css'
import './app/stylesheets/about.css'
import './app/stylesheets/shared.css'

import menuInit from './app/app.js'
import aboutInit from './app/about';
import generateHeader from './app/header';
import homeInit from './app/home';

const content = document.querySelector('.content')

document.addEventListener('DOMContentLoaded', (e) => {
    generateHeader(content)
    homeInit(content)
})



document.addEventListener('click', (e) => {
    if(e.target.classList.contains('header_tab-menu')){
        console.log('found menu')
        generateHeader(content)
        menuInit(content)
    }
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('header_tab-about')){
        generateHeader(content)
        aboutInit(content)
    }
})
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('header_tab-home')){
        console.log('found home')
        generateHeader(content)
        homeInit(content)
    }
})

console.log('greetings')


 