function clickedClass() {

    navbar = document.querySelectorAll(".pn")

    navbar.forEach(element => {
        element.addEventListener("click", function () {
            navbar.forEach(nav => nav.classList.remove("clicked"))

            this.classList.add("clicked");
        })

    });

}

clickedClass()

function clickedClassNav() {

    headerNav = document.querySelectorAll(".nav-content")

    headerNav.forEach(element => {
        element.addEventListener("click", function () {
            headerNav.forEach(nav => nav.classList.remove("active"))

            this.classList.add("active");
        })

    });

}

clickedClassNav()

function clickedClassBurger() {

    burgerNav = document.querySelectorAll(".burger-nav-content")

    burgerNav.forEach(element => {
        element.addEventListener("click", function () {
            burgerNav.forEach(nav => nav.classList.remove("active"))

            this.classList.add("active");
        })

    });

}

clickedClassBurger()

function showBurger() {
    burgerButton = document.querySelector(".burger")

    hamburgerMenu = document.querySelector(".hamburger-menu");
    emptyBody = document.querySelector(".empty-body");
    body = document.querySelector('body')

    burgerButton.addEventListener('click', function () {
        hamburgerMenu.classList.add('burger-active');
        emptyBody.classList.add('burger-active');
        body.classList.add('burger-active')

    })

    emptyBody.addEventListener('click', function () {
        hamburgerMenu.classList.remove('burger-active');
        emptyBody.classList.remove('burger-active');
        body.classList.remove('burger-active')
    })
}

showBurger()