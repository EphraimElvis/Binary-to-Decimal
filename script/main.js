const getBinaryNumber = document.querySelector('.binary-number');
const getDecimalNumber = document.querySelector('.show-result');
const invalidResult = document.querySelector('.invalid-result');
const invalidTitle = document.querySelector('.invalid-title');
const validTitle = document.querySelector('.valid-title');
invalidResult.style.display = 'none';
invalidTitle.style.display ='none';
validTitle.style.display = 'none';

let field = getBinaryNumber.value;

getBinaryNumber.addEventListener('keyup', (e) => {
    
    let val = getBinaryNumber.value;
    let currentChar = parseInt(e.key, 2);
    

    //checking for backspace
    if (e.key === 'Backspace') {
       
        if(val.length === 0) {
            getDecimalNumber.textContent = '';
            validTitle.style.display = 'none';
            invalidTitle.style.display ='none';
            invalidResult.style.display = 'none';
            return
        }
    }
    const setTime = setTimeout(()=> {
        validateBinaryNumber(val);
    }, 10);

    if (setTime === 0) {
        clearTimeout(settime)
    }
    
});



//checking for valid decimal number
const validateBinaryNumber = (nm) => {
    for (let i = 0; i < nm.length; i++) {
        if (nm[i] === '0' || nm[i] === '1') {
            getDecimalNumber.textContent = parseInt(nm, 2);
            console.log('valid binary number ', parseInt(nm[i], 2));
            getDecimalNumber.style.display = 'block';
            invalidResult.style.display = 'none';
            invalidTitle.style.display ='none';
            validTitle.style.display = 'block';
        } else {
            getDecimalNumber.style.display = 'none';
            invalidResult.style.display = 'block';
            invalidTitle.style.display ='block';
            validTitle.style.display = 'none';
            console.log('invalid binary number ', parseInt(nm[i], 2));
            return;
        }
    }
}

