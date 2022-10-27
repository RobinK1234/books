const form = document.querySelector('#add-book')
const  bookList = document.querySelector('#book-list')
const deleteTasks = document.querySelector('#delete-tasks')



form.addEventListener('submit', addBook)
bookList.addEventListener('click', deleteTask)
deleteTasks.addEventListener('click', deleteAllTasks)

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
for(let i = 0; i < bookData.length; i++) {
    let td = document.createElement('td');
    let text = document.createTextNode(bookData[i]);
    td.appendChild(text);
    tr.appendChild(td);
}

td = document.createElement('td');
const link = document.createElement('a');
link.setAttribute('href', '#');
link.appendChild(document.createTextNode('X'));
td.appendChild(link);
tr.appendChild(td);
bookList.appendChild(tr);

/*

JSON.stringify


bookInput.value = '';
authorInput.value = '';
isbnInput.value = '';
*/

    //add task value to localStorage
addBookToLS(bookData)
}

function deleteTask(event) {
    if(event.target.textContent === 'X'){
        if(confirm('Are you sure to delete this task?')){
            event.target.parentElement.parentElement.remove()
        }
    }
}

function deleteAllTasks(event) {
    while (bookList.firstChild){
        bookList.removeChild(bookList.firstChild)
    }
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
