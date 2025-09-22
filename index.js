const form = document.querySelector("#form");
const itemInput = document.querySelector("#item");
const pricePerUnit = document.querySelector("#pricePerUnit");
const quantityInput = document.querySelector("#quantity");
const api_url = "http://localhost:3000/p";
// console.log(pricePerUnit.value);


form.addEventListener("submit", (event) => {
    event.preventDefault(); //prevents form from refreshing


    const price = (pricePerUnit.value);
    const quantity = (quantityInput.value);

    const amount = price * quantity;

    const newProduct = {
        item: itemInput.value,
        price: price,
        quantity: quantity,
        amount: amount,

    };

    // console.log(amount);


    fetch(api_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",

        },
        body: JSON.stringify(newProduct)


    })

    // const li = itemInput.value

    // const li = document.createElement('li');
    // li.textContent = itemInput.value
    
    //  ul.appendChild(li);







})



