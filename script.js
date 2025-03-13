// // aim hai bubbles banana jo ki pathako ki trha phutenge. 
// // pehle div bnayenge. js ka use karke.
// // fir body mai ayega position absolute ke sath.
// // random function se top and left set karenge.
// // circle ke liye border-radius denge. 
// // animation ke liye css ka use kar lenge normal tag ki trha. 
// // kafi sare div's ke liye for loop chalayenge.

function randomcolor() {
    let r = Math.floor(Math.random() * 254);
    let g = Math.floor(Math.random() * 254);
    let b = Math.floor(Math.random() * 254);
    return `rgb(${r}, ${g}, ${b})`
}
let ballon = document.createElement("div");                     // create a div.
let maxy = Math.floor(Math.random() * (window.innerHeight - 300) + 300);        // height ki random value 
let xcor = Math.floor(Math.random() * window.innerWidth);         // width ki random value.

ballon.classList.add("ballon");                                 //class add.
ballon.style.left = `${xcor}px`;                                // style left 
ballon.style.bottom = "-50px";                                  // width diya
ballon.style.backgroundColor = randomcolor();                   // background color
document.body.appendChild(ballon);                              // DOM ke andar dal diya.
ballon.style.setProperty("--maxy", `${maxy}px`);                // css varable bnaya


for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 10; j++) {

        var color = document.createElement("div");          // color element create ho gya
        let clr = randomcolor();
        color.style.backgroundColor = clr;                // use random background color de diya.
        color.classList.add("color");
        let y = Math.floor(Math.random() * (200 - Math.floor(Math.random()*400)));                           // x ki random value bnai 0 se 100 ke bich mai
        let x = Math.floor(Math.random() * (200 - Math.floor(Math.random()*400)));                           // y ki random value bnai 0 se 100 ke bich mai
        color.style.setProperty("--x", `${x}px`);                         // css variables bna diye value ke sath.
        color.style.setProperty("--y", `${y}px`);                         // css variables bna diye value ke sath.
        color.style.boxShadow = `0px 4px 15px 20px ${clr}`
        document.querySelectorAll(".ballon")[i].appendChild(color);
    }

    let ballon = document.createElement("div");                     // create a div.
    let maxy = Math.floor(Math.random() * (window.innerHeight - 300) + 300);        // height ki random value 
    let xcor = Math.floor(Math.random() * window.innerWidth);         // width ki random value.

    ballon.classList.add("ballon");                                 //class add.
    ballon.style.left = `${xcor}px`;                                // style left 
    ballon.style.bottom = "-50px";                                  // width diya
    ballon.style.backgroundColor = randomcolor();                   // background color
    document.body.appendChild(ballon);                              // DOM ke andar dal diya.
    ballon.style.setProperty("--maxy", `${maxy}px`);
}

let img = document.getElementsByClassName("img2")[0].children[0];
console.log(img)
img.addEventListener("mousemove", (e)=>{
    console.log(e.clientX);
})
