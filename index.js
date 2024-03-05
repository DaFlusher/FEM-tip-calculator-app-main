const initialBill = document.getElementById('initial-bill');

const number = document.getElementById('people');
//calculate the tip percents

const customPercent = document.getElementById('custom-tip');

const allPercent = document.querySelectorAll("input[name='tip-percent']");

//reset button
const tipAmount=  document.getElementById('tip-per-person');
const total= document.getElementById('total-per-person');

//addding event listeners to the input fields and radio buttons
allPercent.forEach(radio=>
    radio.addEventListener('input', ()=>{
        
        calculateTip();
}));

initialBill.addEventListener('input',()=>{
    calculateTip()
});

number.addEventListener('input',()=>{
    calculateTip()
});

customPercent.addEventListener('input',()=>{
    calculateTip();
})

//event handler
const calculateTip=()=>{
    let bill= parseFloat(initialBill.value);
    let tipPercent= 0;
    let numberofPersons = parseInt(number.value);
    allPercent.forEach(percent=>{
        if(percent.checked){
            tipPercent= parseFloat(percent.value);
            customPercent.value= null;
            customPercent.disabled= true;

        }
        else if(!tipPercent){
            tipPercent= parseFloat(customPercent.value/100);
    
        }
    });

    if(allPercent===false){
        tipPercent= parseFloat(customPercent.value/100)
    }

    if(bill && tipPercent && numberofPersons){
            
    tipPerPerson = (tipPercent*bill)/numberofPersons;
    totalperPerson= (bill/numberofPersons)+ tipPerPerson;
    
    total.textContent= totalperPerson.toFixed(2);
    tipAmount.textContent = tipPerPerson.toFixed(2);
    }
}

//reset button
const resetBtn = document.getElementById('reset');

// event handler for resetting
resetBtn.addEventListener('click', () => {
    initialBill.value = '';
    number.value = '';
    customPercent.value = '';
    customPercent.disabled = false;
    allPercent.forEach(radio => {
        radio.checked = false;
    });
    tipAmount.textContent = '0.00';
    total.textContent = '0.00';
});