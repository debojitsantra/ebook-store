
const bookList = document.getElementById("bookList");

const books = [
    { title: "The Untold Story Of Love Vol 2", author: "Soumalya Gore", cover: "book/img/tusl2.png", downloadLink: "book/The_Untold_Story_of_Love_vol2.pdf" },
    // Add more books here
];

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
                    <a href="${book.downloadLink}" class="btn btn-primary">Download</a>
                </div>
            </div>
        `;
        
  bookList.appendChild(card);
    });
    
}

displayBooks(books);



