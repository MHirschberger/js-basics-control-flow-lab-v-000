// Write your code in this file!

function scuberGreetingForFeet(distance) {
    let greeting;

    if (distance <= 400) {
        greeting = "This one is on me!";
    } else if (distance > 2500) {
        greeting = "No can do.";
    } else if (distance > 2000) {
        greeting = "I will gladly take your thirty bucks.";
    }

    return greeting;
}

function ternaryCheckCity(city) {

    const response = (city === 'NYC') ? "Ok, sounds good." : "No go.";

    return response;
}

function switchOnCharmFromTip(tip) {

    let response;

    switch(tip) {
        
        case 'generous':
            response = "Thank you so much.";
            break;

        case 'not as generous':
            response = "Thank you.";
            break;

        default:
            response = "Bye.";
            break;
    }

    return response;
}