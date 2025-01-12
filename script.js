const myLibrary = [{'BookName': 'Harry Potter', 'author':'j.k Rowling'},{'BookName': 'Song of ice and fire', 'author':'j.r.r Martin'}];


function Book(BookName, author) {
    this.BookName = BookName;
    this.author = author;
}

function addBookToLibrary(BookName, author) {
   
    let newBook = new Book(BookName, author)
    myLibrary.push(newBook)
  }


  addBookToLibrary('The Bible', 'God')
function showBooks()
{
    myLibrary.forEach(book => {
        console.log(`The title is ${book.BookName} by ${book.author}`)
    });
}
 
showBooks()

const showButton = document.getElementById("show-button");
showButton.addEventListener('click', function(){
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

const AddButton = document.getElementById("add-button");
const testDiv = document.getElementById("divTest");
AddButton.addEventListener('click', function()
{
   testDiv.style.display ='block'
    
})
