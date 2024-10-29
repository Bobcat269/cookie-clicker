const buttonElement = document.querySelector('#brownieButton')
const spanElement = document.querySelector('#counter')



// console.dir(buttonElement)

setTimeout(function(){}, 500)

buttonElement.addEventListener('click', () => {
spanElement.textContent++
console.log(spanElement.textContent)

//Trying something new again https://www.sitepoint.com/delay-sleep-pause-wait/
if (Number(spanElement.textContent) === 4) {
    setTimeout(() => {alert("A paltry amount of brownies\nFor a paltry baker")}, 200)
} else if (Number(spanElement.textContent) === 13) {
    setTimeout(() => {alert("A baker\'s dozen!\nPerhaps I judged you too harsly...")}, 200)
} else if (Number(spanElement.textContent) === 20) {
    setTimeout(() => {alert("20 brownies!\nCould you be the chosen baker...")}, 200)
} 
}
)