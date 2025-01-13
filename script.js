const myLibrary = [{'BookName': 'Harry Potter', 'author':'j.k Rowling', 'pages':'1,250'},{'BookName': 'Song of ice and fire', 'author':'j.r.r Martin', 'pages':'2,550'}];


function Book(BookName, author, pages) {
    this.BookName = BookName;
    this.author = author;
    this.pages = pages;
    
}

function addBookToLibrary(BookName, author, pages) {
   
    let newBook = new Book(BookName, author,pages)
    myLibrary.push(newBook)
  }


// ---------------Show the books in the array---------------
const showButton = document.getElementById("show-button");
const updateButton = document.getElementById("update-button");
const mainContent = document.getElementById("main-content");
const libraryContainer = document.getElementById('library-container');
const emptyLibrary = document.getElementById('emptyMessage');
showButton.addEventListener('click', function(){
    libraryContainer.style.display = 'grid';
    emptyLibrary.style.display = 'none';
    updateButton.style.display = 'inline-block';
  function addBookCard(){myLibrary.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book-card'
        bookElement.textContent = `The title is ${book.BookName} by ${book.author}, have ${book.pages} pages`;
        libraryContainer.appendChild(bookElement);
    });} 
   addBookCard()
})
// ---------------Refresh the book lists---------------

updateButton.addEventListener('click', function()
{   
    const bookElement1 = document.getElementsByClassName("book-card");
    if(bookElement1)
    {
        updateButton.innerHTML = 'success';
       
        console.log(bookElement1)
        bookElement1.innerHTML = 'hi';
       
        function addBookCard(){myLibrary.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book-card'
            bookElement.textContent = `The title is ${book.BookName} by ${book.author}, have ${book.pages} pages`;
            libraryContainer.appendChild(bookElement);
        });}
      
    } 
   
    
})



// ---------------open the new book form---------------
const AddButton = document.getElementById("add-button"); 
const formContainer = document.getElementById("form-container");
AddButton.addEventListener('click', function()
{
   
    if (formContainer.style.display ==='none')
    {
        formContainer.style.display ='flex';
        AddButton.style.display = 'none';

    }else if (formContainer.style.display ==='flex')
    {
        formContainer.style.display ='none';
        AddButton.style.display = 'flex';
    }
    
    
})

// ---------------Adding new book---------------
const confirmButton = document.getElementById("confirm");
confirmButton.addEventListener('click',function()
{

    const newBookTitle = document.getElementById("title").value;
    const newBookAuthor = document.getElementById("author").value;
    const newBookpPages = document.getElementById("pages").value;
    addBookToLibrary(newBookTitle,newBookAuthor,newBookpPages);
  //addBookCard();
    formContainer.style.display ='none' ;
    AddButton.style.display = 'block';
    
});