/*
    Name: Jen Mann
    Spring '21 Tu/Th 10:30am 
    jcmann@madisoncollege.edu
*/

/* Global Variables */ 
const LAB_TITLE = "Programming for Designers - Lab 2"; 

/*
    Prints the value of the global variable LAB_TITLE to console
*/
const printLabTitle = () => {
    console.log(LAB_TITLE); 
}

/*
    The init method declares several variables and functions, 
    as outlined for lab 2, and immediately executes them using
    a named immediately invoked arrow function 

    If iife's aren't allowed, I know the only difference would be to use 
    const init instead of just init, and it'd be const init = () => {code}, then 
    a separate call to init () at the very end of the doc. 
*/ 
(init = () => {

    // Declare init variables
    let id = 10; 
    let name = "Jen"; 
    let bornInMadison = false; 

    // Output init variables
    console.log("ID: " + id); 
    console.log("Name: " + name); 
    console.log("Born in Madison? " + bornInMadison); 

    // Call printLabTitle method
    console.log("Lab Title: "); 
    printLabTitle();
    
})(); 

