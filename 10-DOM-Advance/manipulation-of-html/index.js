// MANIPULATING THE HTML 
// let h1 = document.querySelector("h1");
// console.log(h1.tagName); /* tag name */
// console.log(h1.nodeName); /* tag name, text node, comment node */
// console.log(h1.firstChild.tagName);
// console.log(h1.firstChild.nodeName);
// h1.tagName = "p";
// console.log(h1);

// h1.innerText = "Hello sam how are you..."
// h1.innerHTML = "<p>     this is para inside h1</p>";
// console.log(h1);
// console.log(h1.firstChild);

// console.log(h1.textContent);
// console.log(h1.innerText);

// INSERTING ELEMENTS 
// let div = document.querySelector("div");
// let para = document.createElement("p");
// para.innerText = "new paragraph";
// div.append(para)
// div.prepend(para)
// div.after(para)
// div.before(para);
// div.remove()

// console.log(div);
// console.log(para);

// PARENT NODE 
// let alpha = document.getElementById("alpha");
// alpha.style.backgroundColor = "teal";
// let parentNode = alpha.parentElement;
// parentNode.append(para);

// let newElem = document.createElement("div");
// newElem.innerText = "Sam";

// parentNode.replaceChild(newElem, alpha);

// let lastPara = div.children[2];
// div.insertBefore(para, lastPara)
// console.log(parentNode);
// console.log(alpha);



// ATTRIBUTES 
let div = document.querySelector("div");
// console.log(div.attributes);
// console.log(div.getAttribute("class"));
let classValue = div.getAttribute("class");
// console.log(classValue);

div.setAttribute("class", `${classValue} random`)
console.log(div.attributes.class.value);