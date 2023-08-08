function mk() {
  alert("Downloading...")
}
const bookList = document.getElementById("bookList");
const searchInput = document.getElementById("searchInput");
const sortButton = document.getElementById("sortButton");

const books = [
    { title: "The Untold Story Of Love Vol 2", author: "Soumalya Gore", cover: "book/img/tusl2.png", downloadLink: "book/The_Untold_Story_of_Love_vol2.pdf" },
    { title: "The Untold Story Of Love Vol 1", author: "Soumalya Gore", cover: "book/img/tusl1.png", downloadLink: "book/The_Untold_Story Of_Love_vol1.pdf" },
    // Add more books here
];

// Function to filter and display books based on search input
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => {
        const titleMatches = book.title.toLowerCase().includes(searchTerm);
        const authorMatches = book.author.toLowerCase().includes(searchTerm);
        return titleMatches || authorMatches;
    });

    displayBooks(filteredBooks);
});

// Function to display books
function displayBooks(bookArray) {
    bookList.innerHTML = "";
    bookArray.forEach(book => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";

        card.innerHTML = `
            <div class="card">
                <img src="${book.cover}" class="card-img-top" alt="${book.title}">
                <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">${book.author}</p>
                    <a onclick="mk()" href="${book.downloadLink}" class="btn btn-primary">Download</a>
                </div>
            </div>
        `;

        bookList.appendChild(card);
    });
}

// Initial display of books
displayBooks(books);
