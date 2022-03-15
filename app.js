function updateProductNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(product + '-number');
    let productNumber = caseInput.value;
    if (isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    caseInput.value = productNumber;
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    calculateTotal();
}

//working with phone plus btn
document.getElementById('phone-plus').addEventListener('click',
    function () {
        updateProductNumber('phone', 1219, true);
    });
//working with phone MINUS btn
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})



//working with case plus btn
document.getElementById('case-plus').addEventListener('click',
    function () {
        updateProductNumber('case', 59, true);
    });
//working with case MINUS btn
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})

//dealing with subtotal section
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;

    const subTotal = phoneTotal + caseTotal;

    document.getElementById('sub-total').innerText = subTotal;

    //calculate tax
    const tax = (subTotal * 5) / 100;

    document.getElementById('tax-amount').innerText = tax;
    const grandTotal = subTotal + tax;
    
    document.getElementById('grand-total').innerText = grandTotal;
    
    // console.log(phoneTotal);
    // console.log(caseTotal);

    // console.log(phoneTotal + caseTotal);
}