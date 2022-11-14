const form = document.querySelector('#add-book')
const  bookList = document.querySelector('#book-list')
const deleteTasks = document.querySelector('#delete-tasks')



form.addEventListener('submit', addBook)
bookList.addEventListener('click', deleteBook)
deleteTasks.addEventListener('click', deleteAllBooks)
document.addEventListener(`DOMContentLoaded`, getBooksFromLS)

function addBook(event) {
    // get form input value

    const bookInput = document.querySelector(`#title`)
    const authorInput = document.querySelector(`#author`)
    const isbnInput = document.querySelector(`#ISBN`)

    let book = bookInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    //add values

    const bookData = [book, author, isbn]
    const tr = document.createElement('tr');

    bookData.forEach((dataItem) => {
        const td = document.createElement('td');
        td.appendChild(document.createTextNode(dataItem));
        tr.appendChild(td);
    })
    const td = document.createElement('td');
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.appendChild(document.createTextNode('X'));
    td.appendChild(link);
    tr.appendChild(td);

    bookList.appendChild(tr);

    event.preventDefault();


    //add task value to localStorage
addBookToLS(bookData)
}

function deleteBook(event) {
    if(event.target.textContent === 'X'){
        if(confirm('Are you sure to delete this task?')){
            event.target.parentElement.parentElement.remove()
            let isbn = event.target.parentElement.previousElementSibling
            let author = isbn.previousElementSibling
            let title = author.previousElementSibling
            let book = [title.textContent, author.textContent, isbn.textContent]
            console.log(book)
            deleteBookFromLS(book)
        }
    }
}

function deleteAllBooks(event) {
    while (bookList.firstChild){
        bookList.removeChild(bookList.firstChild)
    }
    localStorage.removeItem(`books`)
}

function addBookToLS(boook) {
    let books
    if(localStorage.getItem(`books`) === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem(`books`))
        console.log(typeof books)

    }
    console.log(books)
    books.push(boook)
    console.log(books)
    localStorage.setItem(`books`, JSON.stringify(books))
}

function deleteBookFromLS(boook) {
    let books
    if(localStorage.getItem(`books`) === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem(`books`))
        console.log(typeof books)

    }
    console.log(books)
    books.forEach((bookFromLS, index) => {
        if(JSON.stringify(bookFromLS) === JSON.stringify(boook)) {
           books.splice(index, 1)
        }
        //STRINGIFY?!!?!?!?!?!??
    })
    console.log(books)
    localStorage.setItem(`books`, JSON.stringify(books))
}

function getBooksFromLS(){
    let books
    if (localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    for (let i = 0; i < books.length; i++){
        let book = books[i]
        const tr = document.createElement('tr')
        for (let i = 0; i < book.length; i++){
            let td = document.createElement('td')
            let text = document.createTextNode(book[i])
            td.appendChild(text)
            tr.appendChild(td)
        }
        td = document.createElement('td')
        const link = document.createElement('a')
        link.setAttribute('href', '#')
        link.appendChild(document.createTextNode('X'))
        td.appendChild(link)
        tr.appendChild(td)
        bookList.appendChild(tr)
    }


/*
function getBooksFromLS(event) {
    let books
    if(localStorage.getItem(`tasks`) === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem(`books`))
    }
*/



/*
        td.appendChild(document.createTextNode(bookFromLS))
        td.className = 'collection-item'

        const x = document.createElement('a')
        x.appendChild(document.createTextNode('X'))
        x.setAttribute('href', '#')
        x.className = 'secondary-content'

        td.appendChild(x)

        const tr = document.querySelector('td')
        tr.appendChild(td)
*/





}
