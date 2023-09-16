function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}


window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 50);
})


// Animation
// const block = document.querySelectorAll('.main__content-block')

// window.onscroll = () => {
//     block.forEach(sec => {
//         const top = window.scrollY;
//         const offset = sec.offsetTop;
//         const height = sec.offsetHeight

//         if (top >= offset && top < offset + height) {
//             sec.classList.add('show-animate')
//         } 
        
    
//         else {
//             sec.classList.remove('show-animate')
//         }
//     })
// }