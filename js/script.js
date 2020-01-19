/*
Here is my javascript file for my 3rd project, I will be aiming for exceeds expectations
    To do: 
        // 1: set focus to name input field: Done!
        // 2: Create another text input field (directly into the HTML)Done!
        //     set id to 'other-title'
        //     placeholder text of 'Your Job Role'
        //     Hide with JS unless 'other' is selected
        3: T-shirt
            theme must be selected for color options to appear
                color field reads 'Please select a T-shirt theme'
            Color menu should only display colors that match selected theme
                Js Puns: 'Cornflower Blue, Dark Slate Grey, Gold'
                I <3 JS: 'Tomato, Steel Blue, Dim Grey'
            When a new theme is selected, color field and menu are updated
                Check project warm up for practice with select and options elements
        4: Register for Activities
            Disallow signing up for conflicting activities
                disable checkbox and indicate that the activity is in conflict with a selected event
                use 'checked' attr
            Display running total of costs below all checkboxes
            Maybe 'check' out project warm up for checkboxes

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
        1: Hide the 'Color' label and select menu until design is selected
        2: Conditional error message
        3: Real time error messages
*/
//Here I will define any variables I need
const name = document.getElementById('name');
const jobRole = document.getElementById('title');
const otherTitle = document.getElementById('other-title');
//Here I use .focus() on the name input field, making it active from the beginning
name.focus();
//Here I hide the other job title input field
otherTitle.hidden = true;
//Here I will create functions that will be used later in the project

//Here I will create event listners
    //Here I add an event listener for selecting the other option and showing and hiding the otherTitle field
    jobRole.addEventListener("click", () => {
        if (jobRole.value !== "other") {
            //Here I hide the other job title input field
            otherTitle.hidden = true;
        } else if (jobRole.value === "other") {
            //here the other job input field is revealed if the 'other' option is selected
            otherTitle.hidden = false;
        };
        });