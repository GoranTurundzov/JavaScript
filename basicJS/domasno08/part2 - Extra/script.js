let title = document.getElementById("title");
let author = document.getElementById("author");
let published = document.getElementById("yearP");
let btn = document.getElementById("btn");
let entered = document.getElementById("entered");
let selector = document.getElementById("selector");
let check = document.getElementById("check");
let bookCall = document.getElementById("bookCall");
let enterBook = document.getElementById("enterBook");

window.onload = loadBooks()
function loadBooks(){
    fetch("./books.json")
    .then(response => response.json())
    .then(aBook => { 
       selector.innerHTML = (`
            ${aBook.map((book) =>{
                return (`
                   <option value="${book.title}"> ${book.title} </option>
                `)
            })}
       `)
          
       
    })
}


check.addEventListener("click" , function(){
    fetch("./books.json")
    .then(response => response.json())
    .then(theBook => {
        theBook.map(book => {
            if(selector.value === book.title){
            return (bookCall.innerText = `${book.title} By ${book.author} is published in ${book.published}`)
         } }) 
    })
})


// function addBook(title , author , published){
//     if(title !== "" && author !== "" && published !== ""){
//         fetch("./books.json" ,
//         {
//             method: "POST",
//             body: JSON.stringify({
//                 title: title,
//                 author: author,
//                 published: published
//             }),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8",
//             }
//         }).then(response => response.json())
//         .then(newBookAdded => {
//             selector.innerHTML = newBookAdded.title
//         }
//        )
//     }
// }

// enterBook.addEventListener(`click` , function(){
//     addBook(title.value , author.value , published.value)
// })

// Mi veli nemam pristap za post.  HINT PLS.