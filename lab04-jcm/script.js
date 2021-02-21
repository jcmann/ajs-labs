/**
 * Jen Mann
 * Lab 04
 * Advanced JS - Spring 2021
 */

const inline = (event) => {
    console.log(event.target.value); 
}

const dotNotation = (event) => {
    console.log(event.target.value); 
}

const w3c = (event) => {
    console.log(event.target.value); 
}

/**
 * Sets up non-inline event handlers, immediately invoked 
 */
(init = () => {

    // Quality buttons
    let qualities = document.querySelector('#qualities').childNodes; 

    // Loop through all buttons in quality div, and assign dotNotation
    // handler to the element's onclick property
    qualities.forEach(current => {
        current.onclick = dotNotation; 
    }); 

    // Heights buttons and w3c named handler
    let heights = document.querySelector('#heights').childNodes; 
    heights.forEach(current => {
        current.addEventListener('click', w3c)
    });

})();

