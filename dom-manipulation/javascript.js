function createNode(element, color, text) {

    const node = document.createElement(element);
    node.style["color"] = color;
    node.textContent = text;

    return node;

}


const container = document.querySelector("#container");

const paragraph = createNode("p", "red", "Hey I'm red!");
const header = createNode("h3", "blue", "I'm a blue h3!");

const div = document.createElement("div");
div.style["background-color"] =  "pink";
const divHeader = createNode("h1", "black", "I'm in a div");
const divPrgh = createNode("p", "black", "ME TOO!")

div.appendChild(divHeader);
div.appendChild(divPrgh);

container.appendChild(paragraph);
container.appendChild(header);
container.appendChild(div);


