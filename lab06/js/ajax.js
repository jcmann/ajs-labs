window.addEventListener("load", () => {

    let xhr = new XMLHttpRequest(); 
    xhr.open("GET", "../text.txt"); 
    xhr.responseType = "text"; 
    xhr.send(); 

    xhr.onload = () => {
        let response = xhr.response; 
        createHTML(response); 
    }

    const createHTML = (response) => {
        console.log(response);
    }

})