// Shopping list references

const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    
    let inputText = input.value;

    input.value = "";

    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const itemButton = document.createElement("button");

    //Append span  and item button as children of the list item

    listItem.appendChild(span);
    listItem.appendChild(itemButton);

    span.textContent = inputText;
    itemButton.textContent = "Delete"
    itemButton.classList.add("delete-btn");

    list.appendChild(listItem);

})

list.addEventListener("click", (event) => {
    if(event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
})

