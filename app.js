function updateCaseNumber (product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if(isIncreasing){
        caseNumber  = parseInt(caseNumber) + 1; 
    }
    else if(caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
}

//working with phone plus btn
document.getElementById('phone-plus').addEventListener('click',
    function () {
        updateCaseNumber('phone', 1219, true);
    });

//working with phone MINUS btn
document.getElementById('phone-minus').addEventListener('click', function(){
    updateCaseNumber('phone', 1219, false);
})



//working with case plus btn
document.getElementById('case-plus').addEventListener('click',
    function () {
        updateCaseNumber('case', 59, true);
    });

//working with case MINUS btn
document.getElementById('case-minus').addEventListener('click', function(){
    updateCaseNumber('case', 59, false);
})