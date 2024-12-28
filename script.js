var tl = gsap.timeline()

tl.to("#photo", {

    y: "100vh",
    scale: 0.6,
    duration: 0
   
})

tl.to("#photo", {

    y: "0vh",
    duration: 1.3,
    delay: 0.3
})

tl.to("#photo",{

    rotate: 360,
    scale: 1
})