/*
Here is my javascript file for my 3rd project, I will be aiming for exceeds expectations
    To do: 
        // 1: set focus to name input field: Done!
        // 2: Create another text input field (directly into the HTML)Done!
        //     set id to 'other-title'
        //     placeholder text of 'Your Job Role'
        //     Hide with JS unless 'other' is selected
        // 3: T-shirt
        //     theme must be selected for color options to appear
        //         color field reads 'Please select a T-shirt theme'
        //     Color menu should only display colors that match selected theme
        //         Js Puns: 'Cornflower Blue, Dark Slate Grey, Gold'
        //         I <3 JS: 'Tomato, Steel Blue, Dim Grey'
        //     When a new theme is selected, color field and menu are updated
        //         Check project warm up for practice with select and options elements
        // 4: Register for Activities
        //     Disallow signing up for conflicting activities
        //         disable checkbox and indicate that the activity is in conflict with a selected event
        //         use 'checked' attr
        //     Display running total of costs below all checkboxes
        //     Maybe 'check' out project warm up for checkboxes

        5: Payment info
            Display payment section based on option chosen
            Display credit card by default
                Display #credit-card div with credit card
                Hide other info, vice versa with the others selected
            'Select Payment Method' should not be selectable
        6: Form validation
            Name field can't be blank
            Email must be formated like a real email
            At least one activity must be checked
            If credit card is selected:
                CC, Zip code, CVV are required before form can be submitted
                    CC: number between 13 & 16 digits
                    ZC: 5 digit number
                    CVV: exactly 3 digits
               Only validate if CC is selected
            Form validation, error messages:
                Name field
                Email field
                Activities checkboxes
                If CC is selected:
                    CC
                    ZC
                    CVV
                Should not be visible by deafault
        7: Works w/o JS
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