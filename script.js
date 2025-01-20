/*  const myLibrary = [{'BookName': 'Harry Potter', 'author':'j.k Rowling', 'pages':'1,250'},{'BookName': 'Song of ice and fire', 'author':'j.r.r Martin', 'pages':'2,550'}];
 */ 
/* const myLibrary = []; */
const myLibrary = [{'BookName': 'Harry Potter', 'author':'j.k Rowling', 'pages':'1,250','read':true},
    {'BookName': 'Song of ice and fire', 'author':'j.r.r Martin', 'pages':'2,550','read':true},
    {'BookName': 'mosese', 'author':'j.r.r Martin', 'pages':'2,550','read':false},
    {'BookName': 'yesman', 'author':'j.r.r Martin', 'pages':'2,550','read':true}];
 

function Book(BookName, author, pages,read) {
    this.BookName = BookName;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

function addBookToLibrary(BookName, author, pages, read) {
   
    let newBook = new Book(BookName, author,pages,read)
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


function addBookCard(actionType){myLibrary.forEach((book,index) => {
    const bookElement = document.createElement('div');
    const removeButton = document.createElement('button');
    const readButton = document.createElement('button');
    bookElement.className = `book-card-${index}`;
    bookElement.id = `book-card-${index}`;
    if (book.read)
    {
         bookRead = 'already read';
         bookElement.style.backgroundColor = '#4caf50';
         readButton.style.display = 'none';
    }
    else
    {
         bookRead = "didn't read";
         bookElement.style.backgroundColor = '#aa2e25';
         
    }
    removeButton.textContent = 'Remove Book';
    readButton.textContent = 'Sign as read';
    removeButton.dataset.index = index;
    readButton.dataset.index = index;
    bookElement.textContent = `The title is ${book.BookName} by ${book.author}, have ${book.pages} pages the index is ${book.BookName} and you ${bookRead} that book`;
    removeButton.className = `remove-book`;
    removeButton.className = `read-book`;
    if (actionType == 1 )
    {
        booksContainer.appendChild(bookElement);
        bookElement.appendChild(removeButton);
        bookElement.appendChild(readButton);
        console.log(myLibrary);
        removeButton.addEventListener('click', (event) => {
            const clickedElement = event.target;
            const itemToRemove = clickedElement.dataset.index;
            const bookCardToRemove = document.getElementById(`book-card-${index}`);
            delete myLibrary[parseInt(itemToRemove)];
            if (bookCardToRemove){
                bookCardToRemove.remove();
              } else {
                  console.log("Element not found")
              }
        }) 
        readButton.addEventListener('click',(event)=>{
            const clickedElement = event.target;
            const readOrNot = clickedElement.dataset.index;
            if (book.read == false)
            {
                myLibrary[index].read = true;
                bookElement.style.backgroundColor = '#4caf50';
                readButton.style.display = 'none';
            }
        })
    }
    else if (actionType == 2)
    {
        console.log(myLibrary);
        const newEl = document.getElementById('books-container');
        newEl.appendChild(bookElement);
        bookElement.appendChild(removeButton);
        bookElement.appendChild(readButton);

        removeButton.addEventListener('click', (event) => {
            const clickedElement = event.target;
            const itemToRemove = clickedElement.dataset.index;
            const bookCardToRemove = document.getElementById(`book-card-${index}`);
            delete myLibrary[parseInt(itemToRemove)];
            if (bookCardToRemove){
                bookCardToRemove.remove();
              } else {
                  console.log("Element not found")
              }
        }) 

          readButton.addEventListener('click',(event)=>{
            const clickedElement = event.target;
            const readOrNot = clickedElement.dataset.index;
            if (book.read == false)
            {
                myLibrary[index].read = true;
                bookElement.style.backgroundColor = '#4caf50';
                readButton.style.display = 'none';
            }
        })
    }
});} 


const showButton = document.getElementById("show-button");
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
    const CleanBookpRead = document.getElementById("read").checked = '';

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
    const newBookRead = document.getElementById('read').checked ? true : false;;
    
    addBookToLibrary(newBookTitle,newBookAuthor,newBookpPages,newBookRead);
    formContainer.style.display ='none' ;
    AddButton.style.display = 'block';
    cleanForm();
    createNewBookCardElement();
    emptyLibrary.style.display = 'none';
    libraryContainer.style.display = 'grid';
    addBookCard(2);
  
});



