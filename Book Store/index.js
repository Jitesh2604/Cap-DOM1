// Author constructor
function Author(name, birthYear, nationality){
    this.Name = name,
    this.Birth_Year = birthYear,
    this.Nationality = nationality
};

// Book constructor
function Books(title, author, genre, price){
    this.Title = title,
    this.Author = author,
    this.Genre = genre,
    this.Price = price
};

// Method to get book information
Books.prototype.getBookInfo = function(){
    return `<strong>Title:</strong> ${this.Title}<br>
        <strong>Genre:</strong> ${this.Genre}<br>
        <strong>Price:</strong> $${this.Price}<br><br>
        <strong>Author:</strong> ${this.Author.Name}<br>`;
};

// Create Author instances
const author2 = new Author("George Orwell", 1903, "British");
const author3 = new Author("Harper Lee", 1926, "American");
const author1 = new Author("J.K. Rowling", 1965, "British");


// Create Book instances
const book1 = new Books("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 20);
const book2 = new Books("1984", author2, "Dystopian", 15);
const book3 = new Books("To Kill a Mockingbird", author3, "Fiction", 18);

// Display book details in HTML
let bookInfoContainer = document.getElementById('cont');
bookInfoContainer.innerHTML += `<div class="box">${book1.getBookInfo()}</div>`;
bookInfoContainer.innerHTML += `<div class="box">${book2.getBookInfo()}</div>`;
bookInfoContainer.innerHTML += `<div class="box">${book3.getBookInfo()}</div>`;