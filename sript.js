let active = 3;
let circles = document.querySelectorAll(".mincircle");
let rights=document.querySelectorAll(".right");

gsap.to(circles[active - 1], {
    opacity: .8,
})
gsap.to(rights[active - 1], {
    filter:"blur(0px)",
    
})


circles.forEach(function (val, index) {
    val.addEventListener("click", function (e) {
        gsap.to(".circle", {
            rotate: (3 - (index + 1)) * 10,

        })
        greayout();
        gsap.to(this, {
            opacity: .5,
            ease: Expo.easeInOut,
            duration: 1
        })
        gsap.to(rights[index], {
            filter:"blur(0px)",
            
        })

    })
})

function greayout() {
    gsap.to(circles, {
        opacity: .08,
    })
    gsap.to(rights, {
        filter:"blur(10px)",
        
    })
}
gsap.to(".circle", {
    rotate: 0,   // Full rotation
    ease: Expo.easeInOut,
    duration: 2
});
console.log("hello");


