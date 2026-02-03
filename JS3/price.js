const priceTxt = document.getElementById("price");
const taxTxt = document.getElementById("tax");
const totalTxt = document.getElementById("total");
let totalPrice = 0;

function calculateTotal(price, tax) {
    return price + (price * (tax / 100));
}

function showTotal() {
    if (priceTxt.value === "" || taxTxt.value === "") {
        totalTxt.innerHTML = "Please enter values!";
        return;
    }

    const price = parseFloat(priceTxt.value);
    const tax = parseFloat(taxTxt.value);

    totalPrice = calculateTotal(price, tax); 
    totalTxt.innerHTML = "₱" + totalPrice.toFixed(2);
}

function clearEntries() {
    priceTxt.value = "";
    taxTxt.value = "";
    totalTxt.innerHTML = "";
    totalPrice = 0;
}
