const loadAwesomeBooks = () => {
  let stock = [];

  // load books from local stoarage
  const loadBooks = () => {
    if (localStorage.getItem('stockedBooks')) {
      stock = JSON.parse(localStorage.getItem('stockedBooks'));
    }
  }

    // add a new book
  function addBook(title, author) {
    if (title !== '' && author !== '') {
      const newBook = { title, author };
      // Save the book
      stock.push(newBook);
        // Save on local storage
      localStorage.setItem('stockedBooks', JSON.stringify(stock));
        // Reset form values
      document.getElementById('add-form').reset();
      displayBooks();
    } else {
      const messages = [];
      if (title === '' && author === '') {
        messages.push('Please enter the book\'s title and author.');
      } else if (author === '' && title !== '') {
        messages.push('Please enter the book\'s author.');
      } else if (title === '' && author !== '') {
        messages.push('Please enter the book\'s title.');
      }

      if (messages.length > 0) {
        const errorElement = document.getElementById('error');
        errorElement.innerText = messages.join(', ');
      // Remove the message after 3 seconds
        setTimeout(() => {
          errorElement.remove();
        }, 3000);
      }
    }
  }

  // function remove books

  function removeBook(index) {
    // Eliminar el libro del array
    stock.splice(index, 1);
    // saved updated array in localStorage
    localStorage.setItem('stockedBooks', JSON.stringify(stock));
    window.location.reload();
    displayBooks();
  }

  // function display the books

  function displayBooks() {
    const bookList = document.getElementById('library');
    bookList.innerHTML = '';
    stock.forEach((element, index) => {
      // Create a book element
      const aBook = document.createElement('div');
      const idBook = document.createElement('span');
      const titleBook = document.createElement('h2');
      const authorBook = document.createElement('p');
      idBook.textContent = `${index}`;
      titleBook.textContent = `${element.title}`;
      authorBook.textContent = `${element.author}`;
      const removeButton = document.createElement('button');
      const line = document.createElement('hr');

      // Delete the book
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        removeBook(index);
        aBook.remove();
      });

      // Create the book view
      aBook.appendChild(idBook);
      aBook.appendChild(titleBook);
      aBook.appendChild(authorBook);
      bookList.appendChild(aBook);
      aBook.appendChild(removeButton);
      aBook.appendChild(line);
    });
  }

  // load books from local storage on page load
  window.addEventListener('load', () => {
      loadBooks();
      displayBooks();
    });

  const addButton = document.getElementById('add-button');
  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    addBook(title, author);
  });
};

export default loadAwesomeBooks;