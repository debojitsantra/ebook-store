function mj() {
  alert("Coming Soon")
}

const bookList2 = document.getElementById("bookList2");

const books2 = [
    { title: "Adbhut Songo", author: "Soumyadip Bhandari", cover: "book/img/adbh.png", onClick: "mj()" },
    // Add more books here
];
function displayBooks2(book2Array) {
    bookList2.innerHTML = "";
    book2Array.forEach(book2 => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";

        card.innerHTML = `
            <div class="card">
                <img src="${book2.cover}" class="card-img-top" alt="${book2.title}">
                <div class="card-body">
                    <h5 class="card-title">${book2.title}</h5>
                    <p class="card-text">${book2.author}</p>
                    <a onclick="${book2.onClick}" class="btn btn-primary">Coming Soon</a>
                </div>
            </div>
        `;
        
  bookList2.appendChild(card);
    });
    
}

displayBooks2(books2);
