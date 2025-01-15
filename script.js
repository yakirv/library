/* const myLibrary = [{'BookName': 'Harry Potter', 'author':'j.k Rowling', 'pages':'1,250'},{'BookName': 'Song of ice and fire', 'author':'j.r.r Martin', 'pages':'2,550'}];
 */ 
const myLibrary = [];


function Book(BookName, author, pages) {
    this.BookName = BookName;
    this.author = author;
    this.pages = pages;
    
}

function addBookToLibrary(BookName, author, pages) {
   
    let newBook = new Book(BookName, author,pages)
    myLibrary.push(newBook)
  }
function createNewBookCardElement()
{
    const libraryContainer = document.getElementById('library-container');
    const bookElement = document.getElementById("books-container");
    libraryContainer.removeChild(bookElement);
    const newEl = document.createElement('div');
    newEl.id = 'books-container';
    libraryContainer.appendChild(newEl);
};
function addBookCard(actionType){myLibrary.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.className = 'book-card'
    bookElement.textContent = `The title is ${book.BookName} by ${book.author}, have ${book.pages} pages`;
    if (actionType == 1 )
    {
        booksContainer.appendChild(bookElement);
    }
    else if (actionType == 2)
    {
        const newEl = document.getElementById('books-container');
        newEl.appendChild(bookElement);
    }
});} 


const showButton = document.getElementById("show-button");
const mainContent = document.getElementById("main-content");
const libraryContainer = document.getElementById('library-container');
const booksContainer = document.getElementById('books-container');
const emptyLibrary = document.getElementById('emptyMessage');

// ---------------Show the books in the array---------------
showButton.addEventListener('click', function(){
    if(myLibrary.length === 0)
    {
        emptyLibrary.innerText = 'Still Empty';
    }else
    {
        libraryContainer.style.display = 'grid';
        emptyLibrary.style.display = 'none';
    }
    
   

   addBookCard(1)
})

function cleanForm()
{
    const CleanBookTitle = document.getElementById("title").value = '' ;
    const CleanBookAuthor = document.getElementById("author").value = '';
    const CleanBookpPages = document.getElementById("pages").value = '';
}


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
    formContainer.style.display ='none' ;
    AddButton.style.display = 'block';
   
    cleanForm();
    createNewBookCardElement();
    emptyLibrary.style.display = 'none';
    libraryContainer.style.display = 'grid';
    addBookCard(2);
  
});