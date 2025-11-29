// q1......................................
// let p = document.querySelector("p");
// p.style.backgroundColor = "black";
// p.style.color = "green";

// let btn = document.createElement("button");
// btn.innerText = "click Me";
// p.prepend(btn);


// let box = document.querySelector(".box");
// let classValue = box.getAttribute("class");
// box.setAttribute("class", `${classValue} random`)

function changeTagName(oldNode, newTagName){
    if (oldNode instanceof Element ){
        let p = document.createElement(newTagName);
        p.innerText = oldNode.innerText;

        for (let attr of oldNode.attributes){
            // console.log(attr.name, attr.value);
            p.setAttribute(attr.name, attr.value)
        }
        oldNode.replaceWith(p);

    }
    else{
        console.error("invalid node")
    }
    
}
let div = document.querySelector(".box");
changeTagName(div, "p");