window.addEventListener("load", () => {

    // Create an XHR that will perform our request
    let xhr = new XMLHttpRequest(); 
    xhr.open("GET", "../text.txt"); 
    xhr.responseType = "text"; 
    xhr.send(); 

    // When the xhr is loaded, create HTML from response
    xhr.onload = () => {
        let response = xhr.response; 
        createHTML(response); 
    }

    // Creates an h1 containing the text response
    const createHTML = (response) => {
        let output = document.createElement("h1"); 
        output.innerText = response; 
        document.body.appendChild(output); 
    }

})