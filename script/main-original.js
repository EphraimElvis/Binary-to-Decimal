
//get the number field of the text input
const getBinaryNumber = document.querySelector('.binary-number');
const getDecimalNumber = document.querySelector('.show-result');
const invalidResult = document.querySelector('.invalid-result');
invalidResult.style.display = 'none';

const result = {
    binary: [],
    invalidNumber: []
}

//checking valid number format
const isValid = (num) => {
    // if (num === 'Backspace' || num === 'ArrowLeft') {
    //     getDecimalNumber.style.display = 'block';
    //     invalidResult.style.display = 'none';
    //     return;
    // }
    const biNum = parseInt(num, 2)
    if (!biNum) {
        
        console.log(biNum, 'Invalid binary number format');
        getDecimalNumber.style.display = 'none';
        invalidResult.style.display = 'block';
        // getDecimalNumber.remove();
        // const invalidNode = document.createElement('label');
        // invalidNode.setAttribute('class', 'show-result invalid');
        // invalidNode.innerHTML = 'Invalid binary number format';
        // container.appendChild(invalidNode)
        return;
    } else {
        result.binary.push(biNum);
        getDecimalNumber.style.display = 'block';
        invalidResult.style.display = 'none';
    }
    return num;
}

const displayResult = () => {
    let biResult = "";
    for (let i = 0; i < result.binary.length; i++) {
        biResult += result.binary[i];
    }
    let convertToDecimal = parseInt(biResult, 2);
    getDecimalNumber.textContent = convertToDecimal; 
    return convertToDecimal;
}

//check if number is a binary number
getBinaryNumber.addEventListener('keyup', (e) => {
    console.log(e)

    //checking for backspace
    if (e.key === 'Backspace') {
        //alert();
       
        //steps to take to implement backspacing
            //have a variable to store the value of backspacing
            // when backspaing, let the variable of 'show-result'
            // get the value from the textfield

        console.log('backspacing -- ', getBinaryNumber.value);

    }

    if (e.key === 'ArrowLeft') {
        alert('Backspace')
    }

    isValid(e.key);
    displayResult();
});

//deleting invlid number



