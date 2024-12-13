// Create a variable to store the main flag body
const MainFlagBody = document.querySelector('.dvFlag');

// call the function to create the flag
fnCreateFlag();

// function to create the flag
function fnCreateFlag(){

    // create 13 horizontal stripes and append them to the main flag body
    for(let i = 0; i < 13; i++){
        const stripe = document.createElement('div');
        stripe.classList.add('dvStripe');
        MainFlagBody.appendChild(stripe);
    }

    // create the Field of Stars (blue section)
    const FieldOfStars = document.createElement('div');
    FieldOfStars.classList.add('dvFieldOfStars');

    // create 50 stars and append them to the Field of Stars
    for(let i = 0; i < 99; i++){
        const star = document.createElement('div');
        star.classList.add('dvStar');
        FieldOfStars.appendChild(star);
    }

    // append the Field of Stars to the main flag body
    MainFlagBody.appendChild(FieldOfStars);

}
