const elementTxt = document.getElementById("elements");

let arr = [];

// Add items to the array
arr.push("Apple");
arr.push("Banana");
arr.push("Orange");
arr.push("Mango");
arr.push("Grapes");

// Display items dynamically
elementTxt.innerHTML = arr.join("<br>");

console.log(arr);
