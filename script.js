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
const booksContainer = document.getElementById('books-container');
const emptyLibrary = document.getElementById('emptyMessage');
showButton.addEventListener('click', function(){
    libraryContainer.style.display = 'grid';
    emptyLibrary.style.display = 'none';
    updateButton.style.display = 'inline-block';
  function addBookCard(){myLibrary.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book-card'
        bookElement.textContent = `The title is ${book.BookName} by ${book.author}, have ${book.pages} pages`;
        booksContainer.appendChild(bookElement);
    });} 
   addBookCard()
})
// ---------------Refresh the book lists---------------

updateButton.addEventListener('click', function()
{  
     const libraryContainer = document.getElementById('library-container');
    const bookElement = document.getElementById("books-container");
    if(bookElement)
    {
       // updateButton.innerHTML = 'success';
        libraryContainer.removeChild(bookElement);
        console.log(bookElement)
        const newEl = document.createElement('div');
        //newEl.className ='books-container';
        newEl.id = 'books-container';
       libraryContainer.appendChild(newEl);
       
        function addBookCard(){myLibrary.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book-card'
            bookElement.textContent = `The title is ${book.BookName} by ${book.author}, have ${book.pages} pages`;
            newEl.appendChild(bookElement);
        });}
        addBookCard();
      
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
    const CleanBookTitle = document.getElementById("title").value = '' ;
    const CleanBookAuthor = document.getElementById("author").value = '';
    const CleanBookpPages = document.getElementById("pages").value = '';
});