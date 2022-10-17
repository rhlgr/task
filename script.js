gsap.to(".imagecontainer",{
width:"100%",
ease:Expo.easeInOut,
duration:2,
stagger:2,
repeat:-1
})
gsap.to(".text h1", {
    ease:Expo.easeInOut,
    stagger:2,
    top:0,
     repeat:-1,
     duration:2
})
gsap.to(".text h1", {
    delay:2,
    ease:Expo.easeInOut,
    stagger:2,
    top:"-100%",
    repeat:-1,
    duration:2
})
// gsap.to(".para p",{
//     ease:Expo.easeInOut,
//     stagger:3,
//     top:0,
//     repeat:-1,
//     duration:2

// })
// gsap.to(".para p",{
//     delay:3,
//     ease:Expo.ease,
//     stagger:2,
//     top:"-100%",
//     repeat:-1,
//     duration:2
// })