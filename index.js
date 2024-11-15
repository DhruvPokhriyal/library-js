const myLibrary = [];

function book(bookName, author, pages) {
    this.bookName = bookName;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(bookData) {
    const page = document.querySelector(".page");
    const addBook = document.querySelector(".add-book");
    const record = document.createElement("div");
    record.classList.add("book");
    const content = document.createElement("div");
    content.classList.add("content");
    record.appendChild(content);
    const bname = document.createElement("div");
    bname.classList.add("bname");
    const bauth = document.createElement("div");
    bauth.classList.add("bauth");
    const bpages = document.createElement("div");
    bpages.classList.add("bpages");
    content.appendChild(bname);
    content.appendChild(bauth);
    content.appendChild(bpages);
    bname.textContent = bookData.bookName;
    bauth.textContent = bookData.author;
    bpages.textContent = bookData.pages;
    page.insertBefore(record, addBook);
}

let book1 = new book("Harry Potter", "J.K. Rowlings", 255);
addBookToLibrary(book1);
