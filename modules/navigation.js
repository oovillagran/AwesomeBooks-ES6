const navigation = () => {
  // Get nav bar links
  const linkList = document.querySelector('#link-list');
  const linkAdd = document.querySelector('#link-add');
  const linkContact = document.querySelector('#link-contact');
  // Get page sections ID
  const bookListSection = document.querySelector('#book-list');
  const addSection = document.querySelector('#add-section');
  const contactSection = document.querySelector('#contact-info');

  // Listeners for the links events
  linkList.addEventListener('click', (event) => {
    event.preventDefault();
    bookListSection.style.display = 'flex';
    addSection.style.display = 'none';
    contactSection.style.display = 'none';
  });

  linkAdd.addEventListener('click', (event) => {
    event.preventDefault();
    bookListSection.style.display = 'none';
    addSection.style.display = 'flex';
    contactSection.style.display = 'none';
  });

  linkContact.addEventListener('click', (event) => {
    event.preventDefault();
    bookListSection.style.display = 'none';
    addSection.style.display = 'none';
    contactSection.style.display = 'flex';
  });
};

export default navigation;