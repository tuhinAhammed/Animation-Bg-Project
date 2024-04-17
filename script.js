var slideElement = document.querySelectorAll('.slide-element')

var count = 1
setInterval(() => {
    count++
    let curretnElement = document.querySelector(".counter")
    curretnElement.classList.remove("counter")
    console.log(count);
if (count > slideElement.length){
    slideElement[0].classList.add("counter")
    count= 1
}
else{
    curretnElement.nextElementSibling.classList.add("counter")
}

} , 2000)