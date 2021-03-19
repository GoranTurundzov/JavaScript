let title = document.getElementById("title");
let author = document.getElementById("author");
let status = document.getElementById("status");
let btn = document.getElementById("btn");
let bookInfoDiv = document.getElementById("bookInfo");
function Book(title , author , status){
    this.title = title;
    this.author = author;
    this.status = status;
    this.statusInfo = function(){
        if(this.status === "true"){
            return `You have already read ${this.title} by ${author}`;
        }
        else if(this.status === "false"){
            return `You have not read ${this.title} by ${author}. You should read it`
        } 
        else if(this.status === "middle"){
            return `You are reading ${this.title} by ${author}. Do you like it?`
        }
    }
}

btn.addEventListener(`click` , function(){
    if(title.value !== ""  && author.value !== ""){
    let book = new Book(title.value , author.value , status.value);
    bookInfoDiv.innerText = book.statusInfo();
}})


