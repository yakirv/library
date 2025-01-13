const myLibrary = [{'BookName': 'Harry Potter', 'author':'j.k Rowling'},{'BookName': 'Song of ice and fire', 'author':'j.r.r Martin'}];


function Book(BookName, author) {
    this.BookName = BookName;
    this.author = author;
}

function addBookToLibrary(BookName, author) {
   
    let newBook = new Book(BookName, author)
    myLibrary.push(newBook)
  }


function showBooks()
{
    myLibrary.forEach(book => {
        console.log(`The title is ${book.BookName} by ${book.author}`)
    });
}
 
showBooks()

const showButton = document.getElementById("show-button");
showButton.addEventListener('click', function(){

    const oldContainer = document.getElementById('library-container');
    if(document.body.contains(oldContainer))
    {
        document.body.removeChild(oldContainer);
    }
   
    const libraryContainer = document.createElement('div');
    libraryContainer.id = 'library-container';
    document.body.appendChild(libraryContainer);
    
    myLibrary.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.className = 'book-card'
        bookElement.textContent = `The title is ${book.BookName} by ${book.author}`;
        libraryContainer.appendChild(bookElement);
    });
})
// ---------------open the new book form---------------
const AddButton = document.getElementById("add-button"); 
const formContainer = document.getElementById("form-container");
AddButton.addEventListener('click', function()
{
    if (formContainer.style.display ==='none')
    {
        formContainer.style.display ='block' 
    }else if (formContainer.style.display ==='block')
    {
        formContainer.style.display ='none'  
    }
    
})

// ---------------Adding new book---------------
const confirmButton = document.getElementById("confirm");
confirmButton.addEventListener('click',function()
{
    const newBookTitle = document.getElementById("title").value;
    const newBookAuthor = document.getElementById("author").value;
    addBookToLibrary(newBookTitle,newBookAuthor);
    
    formContainer.style.display ='none' ;
    /* const succesMessage = document.createElement('div');
    document.body.appendChild(succesMessage);
    succesMessage.textContent = 'Book added succesfully!' */
});