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

    list.appendChild(listItem);

    itemButton.addEventListener("click", () => {
        list.removeChild(listItem);
    })
})

