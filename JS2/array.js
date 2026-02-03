const elementTxt = document.getElementById("elements");

let arr = [];

arr.push("Apple");
arr.push("Banana");
arr.push("Orange");
arr.push("Mango");
arr.push("Grapes");

elementTxt.innerHTML = arr.join("<br>");

console.log(arr);
