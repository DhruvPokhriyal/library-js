const myLibrary = [];
const loaded = [];

class Book {
    constructor(bookName, author, pages) {
        this.bookName = bookName;
        this.author = author;
        this.pages = pages;
    }
}

function toggleEffect(record) {
    record.addEventListener("mousedown", () => {
        record.classList.add("add-book-clicked");
    });
    record.addEventListener("mouseup", () => {
        record.classList.remove("add-book-clicked");
    });
    record.addEventListener("mouseleave", () => {
        record.classList.remove("add-book-clicked");
    });
    record.addEventListener("click", () => {
        record.classList.toggle("read");
    });
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
            toggleEffect(record);
        }
    }
}

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
const newBookField = document.querySelector("#book-name");
const authorField = document.querySelector("#author-name");
const pagesField = document.querySelector("#pages");

let formClose = document.querySelector(".form-close");
formClose.addEventListener("click", () => {
    // Add clear form function here
    document.querySelector(".add-book-form").reset();
    newBookField.closest("div").querySelector("span").textContent = "";
    authorField.closest("div").querySelector("span").textContent = "";
    pagesField.closest("div").querySelector("span").textContent = "";
    modal.close();
});

let addBook = document.querySelector(".add-book");
addBook.addEventListener("click", () => {
    modal.showModal();
});

newBookField.addEventListener("input", () => {
    const errorBox = newBookField.closest("div").querySelector("span");
    if (newBookField.validity.valueMissing) {
        errorBox.textContent = "Book name cannot be left empty";
    } else {
        errorBox.textContent = "";
    }
});

authorField.addEventListener("input", () => {
    const errorBox = authorField.closest("div").querySelector("span");
    if (authorField.validity.valueMissing) {
        errorBox.textContent = "Author name cannot be left empty";
    } else {
        errorBox.textContent = "";
    }
});

pagesField.addEventListener("input", () => {
    const errorBox = pagesField.closest("div").querySelector("span");

    if (pagesField.validity.rangeUnderflow) {
        errorBox.textContent = "No of pages cannot be less than 1";
    } else if (pagesField.validity.valueMissing) {
        errorBox.textContent = "No of pages cannot be left empty";
    } else {
        errorBox.textContent = "";
    }
});

const addBookForm = document.querySelector(".add-book-form");
addBookForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newBookName = newBookField.value;
    let authorName = authorField.value;
    let noOfPages = pagesField.value;
    if (newBookName == "" || authorName == "" || noOfPages == "") {
        (function () {
            const errorBox = newBookField.closest("div").querySelector("span");
            if (newBookField.validity.valueMissing) {
                errorBox.textContent = "Book name cannot be left empty";
            } else {
                errorBox.textContent = "";
            }
        })();
        (function () {
            const errorBox = authorField.closest("div").querySelector("span");
            if (authorField.validity.valueMissing) {
                errorBox.textContent = "Author name cannot be left empty";
            } else {
                errorBox.textContent = "";
            }
        })();
        (function () {
            const errorBox = pagesField.closest("div").querySelector("span");

            if (pagesField.validity.rangeUnderflow) {
                errorBox.textContent = "No of pages cannot be less than 1";
            } else if (pagesField.validity.valueMissing) {
                errorBox.textContent = "No of pages cannot be left empty";
            } else {
                errorBox.textContent = "";
            }
        })();
        return;
    } else {
        let newBook = new Book(newBookName, authorName, noOfPages);
        myLibrary.push(newBook);
        addBookToLibrary();
    }
    addBookForm.reset();
    modal.close();
});
