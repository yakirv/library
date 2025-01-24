
const booksContainer = document.getElementById('your-books-list');
const addBookButton = document.getElementById('add-new-book');
const newBookpopUp = document.getElementById('newBookPopup');
const confirmBtn = document.getElementById('confirmBtn');
const newBookTitle = document.getElementById('new-book-name');
const newBookauthor= document.getElementById('new-book-author');
const newBookPages = document.getElementById('new-book-pages');
const newBookForm = document.getElementById('newBookForm');
const myLibraryButton = document.getElementById('my-libray-button');
const dialogCancelBtn = document.getElementById('cancelBtn');
const dialogConfirmBtn = document.getElementById('confirmBtn');

const myLibrary = [{'BookName': 'Harry Potter', 'author':'j.k Rowling', 'pages':'1,250','read':true, 'img':'/bookImages/harry-potter.png'},
    {'BookName': 'Song of ice and fire', 'author':'j.r.r Martin', 'pages':'2,550','read':false, 'img':'/bookImages/Song_of_Ice_and_Fire.jpg'}];
 
function addBookToLibrary(BookName, author, pages ,read, img, index) {
   
    let newBook = new Book(BookName, author,pages, read ,img, index)
    myLibrary.push(newBook)
  }



function Book(BookName, author, pages, read, img, index) {
    this.BookName = BookName;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.img = img;
    this.index = index;
    
}

function addBookToLibrary(BookName, author, pages, read, img, index) {
   
    let newBook = new Book(BookName, author,pages,read, img, index)
    myLibrary.push(newBook)
  }

//--------------Show the books from the array--------------
  function addBookCard(){
    const bookElements = document.querySelectorAll('.book-card');
    bookElements.forEach((e)=>
    {e.remove()});
    myLibrary.forEach((book,index) => {
    book.index= index;
    const bookElement = document.createElement('div');
    bookElement.className = `book-card`;
    bookElement.id = `book-card-${index}`;
    
    const bookImgContainer = document.createElement('div');
    bookImgContainer.className = 'book-image-container';
    bookElement.appendChild(bookImgContainer);
    
    const bookPages = document.createElement('p');
    bookPages.className='book-pages';
    bookPages.textContent = `${book.pages} pages`
    bookImgContainer.appendChild(bookPages);


    const bookImg = document.createElement('img');
    bookImg.className = 'book-image';
    bookImg.src= book.img;
    bookImgContainer.appendChild(bookImg);

    const bookCardInfo = document.createElement('div');
    bookCardInfo.className= 'book-card-content';
    bookElement.appendChild(bookCardInfo);

    const titleHeader = document.createElement('h4');
    const authorHeader = document.createElement('h4'); 
    titleHeader.textContent = 'Title:';
    authorHeader.textContent = 'Author:';
    
    
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

    
    const bookCardActions = document.createElement('div');
    bookCardActions.className = 'book-card-actions'; 
    bookElement.appendChild(bookCardActions);
    const removeButton = document.createElement('img');
    removeButton.src ='/icons/delete.png'
    removeButton.id = `remove-book-${index}`;
    removeButton.dataset.index = index;
    
    bookCardActions.appendChild(removeButton);
     
    removeButton.addEventListener('click', (event)=>
    {   
        const clickedElement = event.target;
        const itemToRemove = clickedElement.dataset.index;
        delete myLibrary[(parseInt(itemToRemove))];
        const elementToRemove = document.getElementById(`book-card-${index}`);
        elementToRemove.remove();
        
    });

    if (book.read)
    {
        const bookRead = document.createElement('button');
        bookRead.id = `book-read-${index}`;
        bookRead.dataset.index = index;
        bookRead.textContent = 'Read';
        const checkIcon = document.createElement('img');
        checkIcon.src = '/icons/check.png';
        bookRead.appendChild(checkIcon);
        bookRead.style.backgroundColor = '#A4E0CA';
        bookRead.style.marginLeft = '60px'
        bookCardActions.appendChild(bookRead);
        bookRead.addEventListener('click', (event)=>
            {
                const clickedElement = event.target;
                const itemToMdify = clickedElement.dataset.index;
                const libraryItem = myLibrary[(parseInt(itemToMdify))]
                libraryItem.read =false;
                addBookCard()
            })
    }else 
    {
        const bookNotRead = document.createElement('button');
        bookNotRead.id = `book-not-read-${index}`;
        bookNotRead.dataset.index = index;
        bookNotRead.textContent = 'Mark as read';
        bookNotRead.style.marginLeft = '30px'
        bookCardActions.appendChild(bookNotRead);
        bookNotRead.addEventListener('click', (event)=>
        {
            const clickedElement = event.target;
            const itemToMdify = clickedElement.dataset.index;
            const libraryItem = myLibrary[(parseInt(itemToMdify))]
            libraryItem.read =true;
            addBookCard()
        })
        
    }



    booksContainer.appendChild(bookElement);
})};

addBookCard()

myLibraryButton.addEventListener('click', ()=> { // my books button
    addBookCard();

});

//--------------Modal--------------
addBookButton.addEventListener("click", () => {
   
    newBookpopUp.showModal();
  });

  dialogConfirmBtn.addEventListener('click', (event)=>
{
    event.preventDefault();
    const formData = new FormData(newBookForm);
    const userBookName = formData.get('book-name');
    const userBookAuthor = formData.get('book-author');
    const userBookPages = formData.get('book-pages');
    const readQuestion = formData.get('read-question');
    const uploadFile = formData.get('file-upload').name;
    const userBookRead = readQuestion === 'on' ? true : false;
    addBookToLibrary(userBookName, userBookAuthor,userBookPages, userBookRead,'/bookImages/book-placeholder.png');
    addBookCard();
    newBookForm.reset();
    newBookpopUp.close();
   
});
dialogCancelBtn.addEventListener('click', ()=>
{
    newBookForm.reset();
});


