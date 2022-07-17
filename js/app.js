let but = document.getElementById("but")
let code = document.getElementById("code")
let box_content = document.getElementById("box-content")




//first way
let symbols = '0123456789ABCDEF'

function generateColor() {
    but.addEventListener("click", (event) => {
        color = '#'
        for (let index = 0; index < 6; index++) {
            color += symbols[Math.floor(Math.random() * 10)]
        }
        document.body.style.backgroundColor = color;
        code.innerHTML = color;
    })

}

console.log(generateColor())
// second way
// colors = ['black', '#3393FF', 'red', 'pink']




// let i = 0
// but.addEventListener("click", (event) => {

//     document.body.style.background = colors[i];
//     code.innerHTML = colors[i++];

//     if (code.innerHTML == 'undefined') {
//         code.innerHTML = ''
//         document.body.style.background = 'white'
//     }
// })





