const generateHeader = (content) => {
    // content.innerHTML = ''
    content.innerHTML = 
    `
    <div class="header">
        <div class="header_title">Greek Restaurant</div>
        <div class="header_tabs">
            <div class="header_tab header_tab-home">Home</div>
            <div class="header_tab header_tab-menu">Menu</div>
            <div class="header_tab header_tab-about">About</div>
        </div>
    </div>
    `
}

export default generateHeader;