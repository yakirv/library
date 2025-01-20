
const booksContainer = document.getElementById('your-books-list');
const addBookButton = document.getElementById('add-new-book');
const newBookpopUp = document.getElementById('newBookPopup');
const confirmBtn = document.getElementById('confirmBtn');
const newBookTitle = document.getElementById('new-book-name');
const newBookauthor= document.getElementById('new-book-author');
const newBookPages = document.getElementById('new-book-pages');
const newBookForm = document.getElementById('newBookForm');

const myLibrary = [{'BookName': 'Harry Potter', 'author':'j.k Rowling', 'pages':'1,250','read':true, 'img':'/bookImages/ironMan.jpg'},
    {'BookName': 'Song of ice and fire', 'author':'j.r.r Martin', 'pages':'2,550','read':true, 'img':'/bookImages/ironMan.jpg'}
];
 
function addBookToLibrary(BookName, author, pages ,read, img) {
   
    let newBook = new Book(BookName, author,pages, read ,img)
    myLibrary.push(newBook)
  }

/* const myLibrary = [{'BookName': 'Harry Potter', 'author':'j.k Rowling', 'pages':'1,250','read':true, 'img':'/bookImages/ironMan.jpg'},
    {'BookName': 'Song of ice and fire', 'author':'j.r.r Martin', 'pages':'2,550','read':true},
    {'BookName': 'mosese', 'author':'j.r.r Martin', 'pages':'2,550','read':false},
    {'BookName': 'yesman', 'author':'j.r.r Martin', 'pages':'2,550','read':true}]; */
 

function Book(BookName, author, pages, read, img) {
    this.BookName = BookName;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.img = img;
    
}

function addBookToLibrary(BookName, author, pages, read, img) {
   
    let newBook = new Book(BookName, author,pages,read, img)
    myLibrary.push(newBook)
  }
  
//--------------Show the books from the array--------------
  function addBookCard(){myLibrary.forEach((book,index) => {
   
    const bookElement = document.createElement('div');
    bookElement.className = `book-card`;
    
    const bookImgContainer = document.createElement('div');
    bookImgContainer.className = 'book-image-container';
    bookElement.appendChild(bookImgContainer);

    const bookImg = document.createElement('img');
    bookImg.className = 'book-image';
    bookImg.src= book.img;
    bookImgContainer.appendChild(bookImg);

    const bookCardInfo = document.createElement('div');
    bookCardInfo.className= 'book-card-content';
    bookElement.appendChild(bookCardInfo);

    const titleHeader = document.createElement('h4');
    const authorHeader = document.createElement('h4'); 
    titleHeader.textContent = 'Title';
    authorHeader.textContent = 'Author';
    
    bookCardInfo.appendChild(titleHeader);
    bookCardInfo.appendChild(authorHeader);

    const tilteName = document.createElement('p');
    const authorName = document.createElement('p');
    tilteName.className = 'title';
    authorName.className = 'author';
    tilteName.textContent = book.BookName;
    authorName.textContent = book.author;
    bookCardInfo.appendChild(tilteName);
    bookCardInfo.appendChild(authorName);
   
    booksContainer.appendChild(bookElement);
})};

addBookCard()


addBookButton.addEventListener("click", () => {
    console.log('button clicked');
    newBookpopUp.showModal();
  });

  newBookForm.addEventListener('submit', (event)=>
{
    event.preventDefault();
    const formData = new FormData(newBookForm);
    const userBookName = formData.get('book-name');
    const userBookAuthor = formData.get('book-author');
    const userBookPages = formData.get('book-pages');
    addBookToLibrary(userBookName, userBookAuthor,userBookPages, true, '/bookImages/ironMan.jpg');
    addBookCard()
    newBookpopUp.close();
});