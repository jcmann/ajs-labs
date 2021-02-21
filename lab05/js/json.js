const init = () => {

    // Collection of JSON objects containing student information 
    const students = [
        {
            "name" : "Rigby",
            "id" : 1,
            "email" : "rigby@madisoncollege.edu"
        }, 
        {
            "name" : "Tank",
            "id" : 2,
            "email" : "tank@madisoncollege.edu"
        }, 
        {
            "name" : "Mozzy",
            "id" : 3,
            "email" : "mozzy@madisoncollege.edu"
        }, 
        {
            "name" : "Nori",
            "id" : 4,
            "email" : "nori@madisoncollege.edu"
        }, 
        {
            "name" : "Pippin",
            "id" : 5,
            "email" : "pippin@madisoncollege.edu"
        }
    ]; 

    // Loop through and display just the ID and email. 
    students.forEach(current => {
        let p = document.createElement('p'); 
        p.innerHTML = `<p>ID: ${current.id}. Email: ${current.email}</p>`; 
        document.querySelector('body').append(p); 
    }); 
}

// Immediately calls init when page is loaded. 
window.addEventListener('load', init); 