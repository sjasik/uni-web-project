scrollUpButton = document.getElementById("scroll-up-button");

window.onscroll = () => scrollFunction();

const scrollFunction = () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) scrollUpButton.style.display = "block";
    else scrollUpButton.style.display = "none";
}

const scrollUp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}