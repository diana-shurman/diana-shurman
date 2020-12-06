

// main function for getting values and calculating them

function calculate() {

    //getting values

    let selectedAngryDianaValue = document.getElementById("angryDiana").value;
    let selectedBlamedEvgenyValue = document.getElementById("blamedEvgeny").value;
    let enoughChocolates = document.getElementById("enoughChocolates").value;

    // checking selectors

    if (selectedAngryDianaValue === "0" || selectedBlamedEvgenyValue === "0") {
       alert("enter values");
       return;
    }

     // checking input with chocolates

    if (enoughChocolates <= 1 || enoughChocolates >= 50 ) {
        enoughChocolates = 2;
    } else if (isNaN(enoughChocolates)) {
        alert("Only numbers");
        return;
    } 

    let chocolates = Math.round((selectedAngryDianaValue * selectedBlamedEvgenyValue) / (enoughChocolates ** 2)); 

    // calculating amount of money

    let money = chocolates * 32;

    console.log(chocolates);
    document.getElementById("amountChocolates").innerHTML = chocolates;
    document.getElementById("amountMoney").innerHTML = money;
    }

// showing hidden div

    function show() {
        var x = document.getElementById("resultChocolates");
        if (x.style.display === "none") {
          x.style.display = "block";
        }
    }

