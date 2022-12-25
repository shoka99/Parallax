const cloud = document.querySelectorAll('.cloud'),
    boat = document.querySelector('.boat')
window.addEventListener('scroll', () => {
    let windowY = this.scrollY
    cloud.forEach(clouds => {
        let speed = clouds.getAttribute('data-speed')
        clouds.style.transform = `translateX(${windowY * speed}px)`
    })
    boat.style.transform = `translateX(${windowY}px)`

})
const title = document.querySelector('.title')

let txt = title.innerHTML

title.innerHTML = ""
let i = 0
function typing() {
    title.innerHTML += txt[i]
    i++
    if (i < txt.length) {
        setTimeout(() => {
            typing()
        }, 300);
    }
}
setTimeout(() => {
    typing()
}, 1000);

const div = document.querySelector('.div'),
    img = document.querySelectorAll('.img')

div.addEventListener('mousemove', (e) => {
    for (let i = 0; i < img.length; i++) {
        const images = img[i];
        let speed = images.getAttribute('data-speed')
        let x = (window.innerWidth - e.pageX * speed) / 10
        let y = (window.innerHeight - e.pageY * speed) / 10
        images.style.transform = `translate(${x}px,${y}px)`
    }
})

const item = document.querySelector('.item'),
    timer = document.querySelectorAll('.timer')

window.addEventListener('scroll', function scroll() {

    if (this.scrollY > item.offsetTop - item.clientHeight * 2) {
        for (let i = 0; i < timer.length; i++) {
            const timers = timer[i];
            let count = +timers.getAttribute('count')
            timers.innerHTML = 0
            let k = 0
            function rec() {
                timers.innerHTML = k
                if (timers.innerHTML < count) {
                    setTimeout(() => {
                        k++
                        rec()
                    }, 10);
                }
            }
            rec()
        }
        window.removeEventListener('scroll', scroll)
    }




})
const btns = document.querySelectorAll('.btn'),
    root = document.querySelector(":root")
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        root.style.setProperty('--red', '#000')
        root.style.setProperty('--body', '#000')
    })
})


btns.forEach(btn => {
    window.addEventListener('mousemove', function (e) {
        // console.log(e.pageY);
        // console.log(btn.offsetTop);
        // console.log(e.pageX);

        let x = e.pageX - btn.offsetLeft
        let y = e.pageY - btn.offsetTop
        btn.style.setProperty('--x', `${x}px`)
        btn.style.setProperty('--y', `${y}px`)

    })
})

const cards = document.querySelectorAll(".card_box")


cards.forEach(card => {
    card.addEventListener("mousemove", rotate)
    card.addEventListener('mouseout', remove)

})
function rotate(e) {
    let halfHeight = this.clientHeight / 2
    let x = e.offsetX - halfHeight
    let y = e.offsetY - halfHeight
    this.innerHTML = `${x}X ${y}Y`
    this.style.transform = `rotateY(${(e.offsetX - halfHeight) / 2}deg)
     rotateX(${-(e.offsetY - halfHeight) / 2}deg)`
   

}
function remove() {
    this.style.transform = `rotate(0)`
}