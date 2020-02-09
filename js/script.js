/*
Here is my javascript file for my 3rd project, I will be aiming for exceeds expectations
    To do: 
        8: Play around with CSS
            Color
            BG Color
            font
            transitions
            animations
            box shadows
            text shadows
        9: Test cross browser
    *Extra*
        // 1: Hide the 'Color' label and select menu until design is selected
        2: Conditional error message
        3: Real time error messages
*/
//Here I will define any variables I need
const name = document.getElementById('name');
const jobRole = document.getElementById('title');
const otherTitle = document.getElementById('other-title');
//the constant for the t-shirt design selector
const tShirtDesign = document.getElementById('design');
//the constant for the t-shirt color div
const tShirtColor = document.getElementById('colors-js-puns');
//constant for the t-shirt color selector
const tShirtColorSelect = document.getElementById('color');
//constant for the activities field
const act = document.querySelector('.activities');
//constant for the input fields in the activities field
const actInputs = act.querySelectorAll('input');
//Here I create a div-tag for the running total of activities cost
const cost = document.createElement('div');
//Here I make a variable to hold the total cost of activities
let totalCost = 0;


//Here I use .focus() on the name input field, making it active from the beginning
name.focus();
//Here I hide the other job title input field
otherTitle.hidden = true;
//Here I hide the t-shirt 'select' option
tShirtDesign.firstElementChild.hidden = true;
//Here I hide the 'Color' div when no t-shirt design is selected
if (tShirtDesign.value !== "js puns" || tShirtDesign.value !== "heart js") {
    tShirtColor.hidden = true;
};
//Here I append the div-tag for the running total to the activities field
act.appendChild(cost);

//Here I will create functions that will be used later in the project

//Here I will create event listners
    //Here I add an event listener for selecting the other option and showing and hiding the otherTitle field
    jobRole.addEventListener("change", () => {
        if (jobRole.value !== "other") {
            //Here I hide the other job title input field
            otherTitle.hidden = true;
        } else if (jobRole.value === "other") {
            //here the other job input field is revealed if the 'other' option is selected
            otherTitle.hidden = false;
        };
        });
//Here I create an event listener for the t-shirt selection
tShirtDesign.addEventListener('change', () => {
    //if no design is selected, hide the color options
    if (tShirtDesign.value !== "js puns" && tShirtDesign.value !== "heart js") {
        tShirtColor.hidden = true;
    } else if (tShirtDesign.value === "js puns") {
        //when the js puns design is selected the colors are shown
        tShirtColor.hidden = false;
        //the color selector selects the first relevant color
        tShirtColorSelect.selectedIndex = 0;
        for (let i = 0; i < tShirtColorSelect.options.length; i++) {
            if (i >= 3) {
                //irrelevent colors are hidden
                tShirtColorSelect.options[i].hidden = true;
            } else if (i <= 2) {
                //relevent colors are shown
                tShirtColorSelect.options[i].hidden = false;
            }
        }
    } else if (tShirtDesign.value === "heart js") {
        //when the I <3 js design is chosen the colors are shown
        tShirtColor.hidden = false;
        //the first relevent color is selected
        tShirtColorSelect.selectedIndex = 3;
        for (let i = 0; i < tShirtColorSelect.options.length; i++) {
            if (i <= 2) {
                //irrelevent colors are hidden
                tShirtColorSelect.options[i].hidden = true;
            } else if (i >= 3) {
                //relevent colors are shown
                tShirtColorSelect.options[i].hidden = false;
            }
        }
    }
});

//Event listener for activities
//Attached to the field set with class 'activities'
act.addEventListener('change', (e) => {
    //The constant for the event target
    const click = e.target;
    //Here I get the data for the day and time of the clicked input
    const clickTime = click.getAttribute('data-day-and-time');
    //The cost of the clicked input
    const clickCost = Number(click.getAttribute('data-cost'));
    //Adding and subtracting the cost of checked and unchecked boxes
    if (click.checked) {
        totalCost += clickCost;
    } else {
        totalCost -= clickCost;
    }
    cost.innerHTML = `<p>Total cost: $${totalCost}</p>`
    
//Iterate through inputs
for (let i = 0; i < actInputs.length; i++) {
    //create a variable for the time of the iterated checkboxes
    const checkTime = actInputs[i].getAttribute('data-day-and-time');
    if (clickTime === checkTime && click !== actInputs[i]) {
        if(click.checked) {
            //disabling conflicting times
            actInputs[i].disabled = true;
        } else {
            //enabling no longer conflicting times
            actInputs[i].disabled = false;
        }
    }
}
});


//Working on payment area here
//Storing the payment in a constant for future use
const pay = document.querySelector('#payment');
const cc = document.getElementById('credit-card');
const pp = document.getElementById('paypal');
const bc = document.getElementById('bitcoin');
//Hiding the select payment option
pay.firstElementChild.hidden = true;
//Hiding the paypal and bit coin options
pp.hidden = true;
bc.hidden = true;
pay.addEventListener('change', (e) => {
    const clickPay = e.target;
    if (clickPay.value === 'credit card') {
        cc.hidden = false;
        pp.hidden = true;
        bc.hidden = true;
    } else if (clickPay.value === 'paypal') {
        cc.hidden = true;
        pp.hidden = false;
        bc.hidden = true;
    } else if (clickPay.value === 'bitcoin') {
        cc.hidden = true;
        pp.hidden = true;
        bc.hidden = false;
    }
});
//creating the name error message
const nameError = document.createElement('div');
nameError.innerHTML = `<p>Please enter your first and last name.</p>`
name.insertAdjacentElement('beforebegin', nameError);
//message is initially hidden
nameError.hidden = true;
//error text is red
nameError.firstChild.style.cssText = "color: red;";
//defining a regex for the the name input
const nameRegex = new RegExp (/^[a-z]+\s[a-z]+$/, 'i')
//defining regex for email
const mailRegex = new RegExp (/^\w+@\w+\.[a-z]{3}$/, 'i')
//creating email error message
const mail = document.getElementById('mail')
const mailError = document.createElement('div');
mailError.innerHTML = `<p>Please enter a valid email address.</p>`
mail.insertAdjacentElement('beforebegin', mailError);
//message is initially hidden
mailError.hidden = true;
//error text is red
mailError.firstChild.style.cssText = "color: red;";
//Making a regex for the cc feild inputs
const ccInput = document.getElementById('cc-num')
const zipInput = document.getElementById('zip');
const cvvInput = document.getElementById('cvv')
const ccRegex = new RegExp (/^[\d]{13,16}$/);
const zipRegex = new RegExp (/^[\d]{5}$/);
const cvvRegex = new RegExp (/^[\d]{3}$/);
//Making error messages for all the cc inputs
const ccEmptyError = document.createElement('div');
//Conditional error message if the cc input is empty
    ccEmptyError.innerHTML = `<p>Please enter a credit card number.</p>`;
    ccEmptyError.hidden = true;
    ccEmptyError.firstChild.style.cssText = "color: red;";
    ccInput.insertAdjacentElement('beforebegin', ccEmptyError);
const ccError = document.createElement('div');
//conditional error message if the input has more or less than 13-16 digits
    ccError.innerHTML = `<p>Please enter a credit card number between 13 and 16 digits.</p>`
    ccError.hidden = true;
    ccError.firstChild.style.cssText = "color: red;";
    ccInput.insertAdjacentElement('beforebegin', ccError);
const zipError = document.createElement('div');
    zipError.innerHTML = `<p>Please enter a valid zip code.</p>`
    zipError.hidden = true;
    zipError.firstChild.style.cssText = "color: red;";
    zipInput.insertAdjacentElement('beforebegin', zipError);
const cvvError = document.createElement('div');
    cvvError.innerHTML = `<p>Please enter your CVV.</p>`
    cvvError.hidden = true;
    cvvError.firstChild.style.cssText = "color: red;";
    cvvInput.insertAdjacentElement('beforebegin', cvvError);
//Createing an error indicator for the activities section
const actError = document.createElement('div');
actError.innerHTML = `<p>Please select at least one (1) activity:</p>`;
const actLegend = document.querySelector('.activities legend');
actLegend.insertAdjacentElement('afterend', actError);
actError.firstElementChild.setAttribute('style', 'color: red; font-size: 1.5em');
actError.hidden = true;

//Adding event listener to the submit button
document.querySelector('button').addEventListener('click', (e) => {
    if (nameRegex.test(name.value) === false ) {
        //if the name field is incorrectly filled, error messages appear
        name.setAttribute('style', 'border: 5px solid red');
        nameError.hidden = false;
        console.log('Name has been blocked.')
        e.preventDefault();
    } else if (nameRegex.test(name.value) === true) {
        //if the input error is resolved, the error indicators are removed
        nameError.hidden = true;
        name.setAttribute('style', 'border: 2px solid rgb(111, 157, 220)')
    }
    if (mailRegex.test(mail.value) === false) {
        //if the email field is entered incorrectly an error indicator is triggered
        mail.setAttribute('style', 'border: 5px solid red');
        mailError.hidden = false;
        e.preventDefault();
        console.log('Mail has been blocked.')
    } else if (mailRegex.test(mail.value) === true) {
        //if the input error is resolved, the error indicators are removed
        mailError.hidden = true;
        mail.setAttribute('style', 'border: 2px solid rgb(111, 157, 220)')
    }
    //Here I 'check' that at least one checkbox is checked
    //I do this by checking the total cost, if it's 0 then no activity has been checked
    if (totalCost === 0) {
        e.preventDefault();
        console.log('Activity blocked');
        actError.hidden = false;
    } else {
        actError.hidden = true;
    }
    //Here, if the credit card is selected, I require cc information
    if (cc.hidden === false ) {
        //Here I make a conditional validation for the credit card
        if (ccInput.value === '') {
            //If the credit card field has not been entered a message will ask the user to enter a number
            ccEmptyError.hidden = false;
            ccInput.setAttribute('style', 'border: 5px solid red');
            e.preventDefault()
        } else if (ccRegex.test(ccInput.value) === false) {
            //if the credit card is not entered correctly an error indicator is made visible
            ccError.hidden = false;
            ccEmptyError.hidden = true;
            ccInput.setAttribute('style', 'border: 5px solid red');
            e.preventDefault();
            console.log('Credit card number has been blocked.')
        } else if (ccRegex.test(ccInput.value) === true) {
            //if the input error is resolved, the error indicators are removed
            ccError.hidden = true;
            ccEmptyError.hidden = true;
            ccInput.setAttribute('style', 'border: 2px solid rgb(111, 157, 220)')
        }
        if (zipRegex.test(zipInput.value) === false) {
            //If the zip code is entered incorrectly an error message is made visible
            zipError.hidden = false;
            zipInput.setAttribute('style', 'border: 5px solid red');
            e.preventDefault();
            console.log('Zip has been blocked.')
        } else if (zipRegex.test(zipInput.value) === true) {
            //if the input error is resolved, the error indicators are removed
            zipError.hidden = true;
            zipInput.setAttribute('style', 'border: 2px solid rgb(111, 157, 220)')
        }
        if (cvvRegex.test(cvvInput.value) === false) {
            //if the cvv is not entered correctly an error message is displayed
            cvvError.hidden = false;
            cvvInput.setAttribute('style', 'border: 5px solid red');
            e.preventDefault();
            console.log('CVV has been blocked.')
        } else if (cvvRegex.test(cvvInput.value) === true) {
            //if the input error is resolved, the error indicators are removed
            cvvError.hidden = true;
            cvvInput.setAttribute('style', 'border: 2px solid rgb(111, 157, 220)')
        }
    }
});
//Here I make a real time error message testing for input in email input field
const realError = document.createElement('span')
    realError.textContent = 'Please enter your email address.'
    mail.before(realError);
    realError.setAttribute.cssText = 'color: rgb(223, 198, 115); font-size: 1.5 em;'
    realError.hidden = true;
mail.addEventListener('input', function (e) {
    if (mailRegex.test(mail.value) === false) {
    console.log('That was wrong')
    realError.hidden = false;
    } else if (mailRegex.test(mail.value)) {
        console.log('That was correct!')
        realError.hidden = true;
    }
})