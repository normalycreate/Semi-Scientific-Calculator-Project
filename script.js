console.log("Javascript berjalan")
let developmentMessage = "Fitur masih dalam tahap pengembangan";
let succesfullInput = "Elemen berhasil diklik";
const displayOutput = document.getElementById('display');
const inputButton = document.querySelectorAll('.numButton');

// The themes changing function.
const themesPallete = ['default', 'white', 'dark'];
let choosingThemesPallete = 0;
const themeChangging = document.querySelector('.theme');
const getBodyElement = document.body

const rememberChoosingThemes = localStorage.getItem('calculatorThemesItemStorage');
if (rememberChoosingThemes && themesPallete.includes(rememberChoosingThemes)) {
    choosingThemesPallete = themesPallete.indexOf(rememberChoosingThemes);
    getBodyElement.setAttribute('theme-option', themesPallete[choosingThemesPallete]);
}

themeChangging.addEventListener('click', function() {
    console.log(succesfullInput);
    choosingThemesPallete = (choosingThemesPallete + 1) % themesPallete.length;
    const addTheme = themesPallete[choosingThemesPallete];
    getBodyElement.setAttribute('theme-option', addTheme);
    localStorage.setItem('calculatorThemesItemStorage', addTheme);
})

// Calculator Function
inputButton.forEach(button => {
    button.addEventListener('click', function(e) {
        const buttonTarget = e.currentTarget;
        const action = buttonTarget.getAttribute('data-action');
        let takeButtonValue = buttonTarget.getAttribute('data-value');
        // Calculator Logical
        if(action === 'clear') {
            displayOutput.value = '';
        } else if(action === 'delete') {
            displayOutput.value = displayOutput.value.slice(0, -1);
        } else if(action === 'equal') {
            try {
                let calculateAll = math.evaluate(displayOutput.value);
                if (!Number.isInteger(calculateAll) && calculateAll.toString().split('.')[1]?.length > 7) {
                    displayOutput.value = parseFloat(calculateAll.toFixed(8));
                } else {
                    displayOutput.value = calculateAll;
                }
            } catch {
                displayOutput.value = 'Error';
            }
        } else if(action === 'squareRoot') {
            try {
                let currentValue = math.evaluate(displayOutput.value);
                displayOutput.value = Math.sqrt(currentValue).toFixed(8);
            } catch {
                displayOutput.value = 'Error';
            }
        } else if(action === 'numberGenerator') {
            try {
                let randomizing = math.random(displayOutput.value).toFixed(0);
                if (randomizing < 0) {
                    displayOutput.value = 'Error';
                } else {
                    displayOutput.value = randomizing;
                }
            } catch {
                displayOutput.value = 'Error';
            }
        } else if(action === 'gcd') {
            console.log("Fitur Masih Dalam Tahap Pengembangan");
        } else if(action === 'hcf') {
            console.log("Fitur Masih Dalam Tahap Pengembangan");
        } else if(action === 'rounding') {
            console.log("Fitur Masih Dalam Tahap Pengembangan");
        } else if(action === 'sin') {
            console.log("Fitur Masih Dalam Tahap Pengembangan");
        } else if(action === 'cos') {
            console.log("Fitur Masih Dalam Tahap Pengembangan");
        } else if(action === 'tan') {
            console.log("Fitur Masih Dalam Tahap Pengembangan");
        } else if(action === 'pi') {
            console.log("Fitur Masih Dalam Tahap Pengembangan");
        } else if(action === 'cosecan') {
            console.log("Fitur Masih Dalam Tahap Pengembangan");
        } else if(action === 'secan') {
            console.log("Fitur Masih Dalam Tahap Pengembangan");
        } else if(action === 'cotan') {
            console.log("Fitur Masih Dalam Tahap Pengembangan");
        } else if(action === 'logarithm') {
            console.log("Fitur Masih Dalam Tahap Pengembangan");
        } else {
            if (takeButtonValue != "") {
                displayOutput.value += takeButtonValue;
            }   
        }
    });
});

//Button Swapping
const toggleAdvancedBtn = document.querySelector('.advanced');
const basicFunctionToggle = document.querySelector('.calculator'); 

toggleAdvancedBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    basicFunctionToggle.classList.toggle('mode-advanced');
});
