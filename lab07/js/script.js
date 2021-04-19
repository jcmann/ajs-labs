window.onload = () => {
    // Select all of the courses in the list
    const courseNodes = [...document.querySelectorAll("li")]; 
    // map all of the courses for their textContent
    let coursesTextOnly = courseNodes.map(current => current.textContent);

    // Add 2 additional courses using the spread operator 
    coursesTextOnly = [...coursesTextOnly, "Java", "Advanced Java"]; 

    // Output final array 
    console.table(coursesTextOnly);
}