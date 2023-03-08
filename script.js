// Navigation menus and dropdowns

const container = document.querySelector('.container'),
    header = document.querySelector('.header'),

    menuBtn = document.querySelector('.nav .menu-btn'),
    menuBtnBurgerImg = document.querySelector('.nav .menu-btn .burger-img'),
    menuBtncloseImg = document.querySelector('.nav .menu-btn .close-img'),
    navMenu = document.querySelector('.nav__menu'),
    
    dropdown = document.querySelector('.dropdown'),
    dropdownBtnContent = document.querySelector('.dropdown .btn-content'),
    dropdownBtnImg = document.querySelector('.dropdown .btn-content img'),
    dropdownMenu = document.querySelector('.dropdown__menu'),
    iconArrowDown = document.querySelector('.icon-arrow-up'),
    iconArrowUp = document.querySelector('.icon-arrow-down');

menuBtn.addEventListener('click', () => {
    if (navMenu.classList.contains('open')) {
        // navMenu.classList.add('hide');
        navMenu.classList.remove('open');
        header.classList.remove('menu-opened');

        menuBtnBurgerImg.classList.remove('hide');
        menuBtncloseImg.classList.add('hide');
    } else {
        // navMenu.classList.remove('hide');
        navMenu.classList.add('open');
        header.classList.add('menu-opened');

        menuBtnBurgerImg.classList.add('hide');
        menuBtncloseImg.classList.remove('hide');
    }
});

dropdown.addEventListener('click', () => {
    if (dropdownMenu.classList.contains('open')) {
        dropdownMenu.classList.remove('open');
        dropdownBtnContent.classList.remove('menu-opened');
        iconArrowDown.classList.add('hide');
        iconArrowUp.classList.remove('hide');
    } else {
        dropdownMenu.classList.add('open');
        dropdownBtnContent.classList.add('menu-opened');
        iconArrowDown.classList.remove('hide');
        iconArrowUp.classList.add('hide');
    }
});

dropdown.addEventListener('mouseover', () => {
    if (!dropdownMenu.classList.contains('open')) {
        dropdownMenu.classList.add('open');
        dropdownBtnContent.classList.add('menu-opened');
        iconArrowDown.classList.remove('hide');
        iconArrowUp.classList.add('hide');
    }
});

dropdown.addEventListener('mouseout', () => {
    if (dropdownMenu.classList.contains('open')) {
        dropdownMenu.classList.remove('open');
        dropdownBtnContent.classList.remove('menu-opened');
        iconArrowDown.classList.add('hide');
        iconArrowUp.classList.remove('hide');
    }
});
// -----------------------------------------------------------------

// Responsiveness

const widthSs = window.matchMedia("(max-width: 350px)"),
    widthXs = window.matchMedia("(max-width: 576px)"),
    widthSm = window.matchMedia("(max-width: 768px)"),
    widthMd = window.matchMedia("(max-width: 936px)"),
    widthLg = window.matchMedia("(max-width: 1400px)"),
    widthXl = window.matchMedia("(max-width: 1600px)"),
    widthSl = window.matchMedia("(max-width: 99999999px)"),

    navFixedCenterLinks = document.querySelector('.nav__fixed--center .links');

const hideElement = (e) => {
    if (e.matches) {
        navFixedCenterLinks.style.display = 'none';
    } else {
        navFixedCenterLinks.style.display = 'flex';
    }
};

widthSs.addListener(hideElement);
hideElement(widthSs);


// const showNav = (e) => {
//     if (e.matches) {
//         navMenu.classList.add('hide');
//     } else {
//         navMenu.classList.remove('hide');
//     }
// };

// widthMd.addListener(showNav);
// showNav(widthMd)


// -------------------------------------------------------------------

// Images select

const productMainImgContainer = document.querySelector('.product__main--image-container'),
    productImg1 = document.querySelector('#product-img-1'),
    productImg2 = document.querySelector('#product-img-2'),
    productImg3 = document.querySelector('#product-img-3');

productImg1.addEventListener('click', () => {
    if (!productImg1.classList.contains('active')) {
        productImg1.classList.add('active');
        productImg2.classList.remove('active');
        productImg3.classList.remove('active');
    }

    if (productImg1.classList.contains('active')) {
        productMainImgContainer.innerHTML = `<img src="../../resources/images/glasses/glasses1.webp" alt="">`;
    }
});

productImg2.addEventListener('click', () => {
    if (!productImg2.classList.contains('active')) {
        productImg2.classList.add('active');
        productImg1.classList.remove('active');
        productImg3.classList.remove('active');
    }

    if (productImg2.classList.contains('active')) {
        productMainImgContainer.innerHTML = `<img src="../../resources/images/glasses/glasses10.webp" alt="">`;
    }
});

productImg3.addEventListener('click', () => {
    if (!productImg3.classList.contains('active')) {
        productImg3.classList.add('active');
        productImg2.classList.remove('active');
        productImg1.classList.remove('active');
    }

    if (productImg3.classList.contains('active')) {
        productMainImgContainer.innerHTML = `<img src="../../resources/images/glasses/glasses3.webp" alt="">`;
    }
});

// ------------------------------------------------------------------------
