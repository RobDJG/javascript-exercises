// Button 2
const btn2 = document.querySelector("#btn2");
btn2.onclick = () => alert("Hello World");

// Button 3
const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", (e) => {
    alert("Hello World");
    console.log(e)
},);

//Buttons

const colorButton = document.querySelector("#color-button")

colorButton.addEventListener("click", () => {
    
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.style.background = "blue";
    })

})



