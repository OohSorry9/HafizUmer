window.onload = function(){

const hamburger = document.querySelector('.hamburger')
const overlay = document.getElementById('overlay')

hamburger.addEventListener('click', () => {

    overlay.classList.toggle('active')  
    overlay.classList.toggle('animation')

})


const list = Array.from(document.getElementsByClassName('list'))


list.forEach( (e) => {
    e.addEventListener('click', (item) => {
        overlay.classList.remove('active')
        overlay.classList.remove('animation')
    })
})


gsap.registerPlugin(ScrollTrigger);


gsap.from(".text",{
    scrollTrigger:".text",
    duration: 2,
    delay: 0.5,
    x: "-100vw",
    ease: "power3.out"
})

gsap.from(".text_anim",{
    scrollTrigger:".text_anim",
    duration: 2,
    delay: 1,
    opacity: 0,
    stagger: 0.7,
    ease: "power3.out"
})

gsap.from(".image", {
    scrollTrigger:".image",
    duration: 2,
    x: "100vw",
    ease: "power3.out",
})


gsap.from(".skills_one", {
    scrollTrigger:".skills_one",
    duration: 2,
    delay: 0,
    x: "100vw",
    ease: "power3.out"
})

gsap.from("#skills", {
    scrollTrigger: "#skills",
    duration: 2,
    delay: 0,
    x: "-100vw",
    ease: "power3.out"
})

gsap.from(".skill-item",{
    scrollTrigger:".skill-item",
    duration:2,
    delay: 1,
    opacity:0,
    stagger: 0.5,
    ease: "power3.out",
})


gsap.from(".subHeading_one",{
    scrollTrigger:".subHeading_one",
    duration: 2,
    delay: 1,
    opacity: 0,
    ease: "power3.out" 
})
gsap.from(".subHeading_two",{
    scrollTrigger:".subHeading_two",
    duration: 2,
    delay: 2,
    opacity: 0,
    ease: "power3.out" 
})


gsap.from(".sec-heading_one",{
    scrollTrigger:".sec-heading_one",
    duration: 2,
    delay: 0.5,
    opacity: 0,
    ease: "power3.out" 
})

gsap.from(".card",{
    scrollTrigger:".card",
    duration: 2,
    delay: 1,
    opacity: 0,
    stagger: 0.5,
    ease: "power3.out"  
})

gsap.from(".sec-heading_two",{
    scrollTrigger:".sec-heading_two",
    duration: 2,
    delay: 0.5,
    opacity: 0,
    ease: "power3.out" 
})
gsap.from(".sec-heading_three",{
    scrollTrigger:".sec-heading_three",
    duration: 2,
    delay: 0.5,
    opacity: 0,
    ease: "power3.out" 
})

gsap.from(".skills_two",{
    scrollTrigger:".skills_two",
    duration: 2,
    delay: 1,
    x: "-100vw",
    ease: "power3.out" 
})
gsap.from(".description", {
    scrollTrigger:".description",
    duration: 2,
    stagger: 0.5,
    delay: 1,
    opacity: 0,
    ease: "power3.out"
})
}
