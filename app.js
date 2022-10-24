const form = document.querySelectorAll('form')
const  bookList = document.querySelector('#book-list')


//form.addEventListener('submit', addBook)
bookList.addEventListener('click', deleteTask)

function addBook(event) {
    // get form input value
}
    /*
    const bookInput = document.querySelectorAll(`form`)
    console.log(bookInput)
*/
    // create td with value and x link
/*
    const td = document.createElement('td')
    td.appendChild(document.createTextNode(bookInput.value))
    td.className = 'collection-item'

    const x = document.createElement('a')
    x.appendChild(document.createTextNode('X'))
    x.setAttribute('href', 'x')
    x.className = 'secondary-content'
    td.appendChild(x)

    const tr = document.querySelector('tr')
    tr.appendChild(td)
}
*/
function deleteTask(event) {
    if(event.target.textContent === 'X'){
        if(confirm('Are you sure to delete this task?')){
            event.target.parentElement.remove()
        }
    }
}
