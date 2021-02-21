/**
 * Jen Mann
 * Lab 03
 * Advanced JS - Spring 2021
 */

/**
 * Init method to create several elements and add 
 * them to the DOM, rendering them on the page.
 */
(init = () => {

    // Create a form, div, input, button
    // And set necessary attributes
    let form = document.createElement('form');
    console.log(form);  

    let div =  document.createElement('div'); 
    div.className="form-group"; 

    let input = document.createElement('input'); 
    input.className = "form-control"; 
    input.type = "text"; 
    input.id =  "username"; 

    let button = document.createElement('button'); 
    button.type = "button";
    button.innerText = "click me";  

    // Insert elements into the DOM
    div.appendChild(input);  
    div.appendChild(button);  

    form.appendChild(div); 

    document.body.appendChild(form); 
})(); 