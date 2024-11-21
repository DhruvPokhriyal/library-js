const myLibrary = [];
const loaded = [];

function book(bookName, author, pages) {
    this.bookName = bookName;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    for (bookData of myLibrary) {
        if (!loaded.includes(bookData)) {
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
            loaded.push(bookData);
            // Separate this part into a different function and then invoke that function
            record.addEventListener("mousedown", () => {
                record.classList.add("add-book-clicked");
            });
            record.addEventListener("mouseup", () => {
                record.classList.remove("add-book-clicked");
            });
            record.addEventListener("mouseleave", () => {
                record.classList.remove("add-book-clicked");
            });
            // Separate this part as well into a different function and then invoke that function
            record.addEventListener("click", () => {
                record.classList.toggle("read");
            });
        }
    }
}

let book1 = new book("Harry Potter", "J.K. Rowlings", 255);
myLibrary.push(book1);
addBookToLibrary();

let containers = Array.from(document.querySelectorAll(".book,.add-book"));
for (let container of containers) {
    container.addEventListener("mousedown", () => {
        container.classList.add("add-book-clicked");
    });
    container.addEventListener("mouseup", () => {
        container.classList.remove("add-book-clicked");
    });
    container.addEventListener("mouseleave", () => {
        container.classList.remove("add-book-clicked");
    });
}

let books = Array.from(document.querySelectorAll(".book"));
for (let book of books) {
    book.addEventListener("click", () => {
        book.classList.toggle("read");
    });
}

let modal = document.querySelector(".modal");

let formClose = document.querySelector(".form-close");
formClose.addEventListener("click", () => {
    // Add clear form function here
    modal.close();
});

let addBook = document.querySelector(".add-book");
addBook.addEventListener("click", () => {
    modal.showModal();
});

const addBookForm = document.querySelector(".add-book-form");
addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newBookName = addBookForm.querySelector("#book-name").value;
    let authorName = addBookForm.querySelector("#author-name").value;
    let noOfPages = addBookForm.querySelector("#pages").value;
    if (newBookName == "" || authorName == "" || noOfPages == "") {
        alert("Fields cannot be left empty");
    } else {
        let newBook = new book(newBookName, authorName, noOfPages);
        myLibrary.push(newBook);
        addBookToLibrary();
    }
    addBookForm.reset();
    modal.close();
});
