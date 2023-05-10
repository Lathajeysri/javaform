function classname() {
    // Get all elements with the class name "my-class"
    const elements = document.getElementsByClassName("my-class");
    
    // Loop through the elements and log their text content
    for (let i = 0; i < elements.length; i++) {
      console.log(elements[i].textContent);
    }
    }

    //TAG NAme

    // Get all li elements
const listItems = document.getElementsByTagName("li");

// Loop through the elements and log their text content
for (let i = 0; i < listItems.length; i++) {
  console.log(listItems[i].textContent);
}

//query selector#my-div 
// Select the first paragraph with the class "my-class"
const myParagraph = document.querySelector(".my-class");

// Change the text content of the paragraph
myParagraph.textContent = "Hello, world!";

//another example of query selctor
// Select the div with the ID "my-div"
const myDiv = document.querySelector("#my-div");

// Change the background color of the div
myDiv.style.backgroundColor = "blue";

// Select the second paragraph
const myParagraph = document.querySelector("#my-div > p:nth-child(2)");

// Change the text content of the paragraph
myParagraph.textContent = "Hello, world!";
//queryselectorall
// Select all paragraphs with the class "my-class"
const myParagraphs = document.querySelectorAll(".my-class");

// Loop through the paragraphs and change their text content
for (let i = 0; i < myParagraphs.length; i++) {
  myParagraphs[i].textContent = "Hello, world!";
}