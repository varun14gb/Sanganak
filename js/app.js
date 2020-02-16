window.addEventListener('load', () => {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
});

navSlide = () => {
    const nav = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");
    const links = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-open");
        burger.classList.toggle("active");

        links.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navSlide 1s ease forwards ${index/6 + 0.16}s`;
            }
        });
    });
}

onLink = () => {
    const nav = document.querySelector(".nav-links");
    const burger = document.querySelector(".burger");
    const links = document.querySelectorAll(".nav-links li");

    nav.classList.toggle("nav-open");
    burger.classList.toggle("active");
    links.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation = ``;
        } else {
            link.style.animation = `navSlide 1s ease forwards ${index/6 + 0.16}s`;
        }
    });
}

var countDownDate = new Date(2020, 02, 02).getTime();

var x = setInterval(() => {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);

function expandImage(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.children[0].src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.children[0].alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

function animateValue(id, value) {
    let current = 0;
    let increment = value > 0 ? 1 : -1 ;
    let time = Math.abs(Math.floor(2000 / value));
    let obj = document.getElementById(id);
    var timer = setInterval(() => {
        current += increment;
        obj.innerHTML = current;
        if (current == value) {
            clearInterval(timer);
        }
    }, time);
}

var app = () => {
    navSlide();
    expandImage(document.querySelector(".slider li"));
    animateValue("summaryDays", 2);
    animateValue("summaryEvents", 10);
    animateValue("summarySeminars", 2);
}

app();