const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}


/*
// Destructuring

const books = getBooks();

const book = getBook(3);

// const title = book.title;
// const author = book.author;

// console.log(title, author);

const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = getBook(2);  // when using object

// console.log(title, author, pages, publicationDate, genres, hasMovieAdaptation);

// console.log(genres); 

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// console.log(primaryGenre, secondaryGenre);


// const [primaryGenre, secondaryGenre] = genres; // when using array


// console.log(primaryGenre, secondaryGenre);


// Rest Operator

const [primaryGenre, secondaryGenre, ...otherGenres] = genres; 

// const [primaryGenre, ...otherGenres,secondaryGenre] = genres; // error

console.log(primaryGenre, secondaryGenre, otherGenres);

// Spread Operator

const newGenres = [...genres, "dystopia"] // when using array


const newGenres2 = ["dystopia", ...genres]

// console.log(newGenres);

// console.log(newGenres2);

const updatedBook = {
  ...book,
  // Add new properties
  moviePublicationDate: "2001-12-19",
  // overwrite existing properties
  pages:1218 // when using object
} 

// console.log(updatedBook);


// Template Literals

const summary  = `The book ${title} was written by ${author} in the year ${publicationDate.split("-")[0]}`

console.log(summary);

// Ternary Operator
// const {title, author, pages, publicationDate, genres, hasMovieAdaptation} = getBook(2);

const pagesRange = pages > 1000 ? 'over a thousand' : 'under a thousand';

// pagesRange

console.log(`The book has ${pagesRange} pages.`);

s = `The book has ${hasMovieAdaptation ? "been" : "not been"} adapteded as a movie`
s

// Arrow Functions

function getYear(str) { // when using function
  return str.split("-")[0];
}

const getYearArrow = (str) => {return str.split("-")[0]}; // when using arrow function

// console.log(getYear(publicationDate));
// console.log(getYearArrow(publicationDate));

// Logical Operators

// const book = getBook(2);
// short circuiting

// console.log(true && 'Some string'); // 'some string'
// console.log(false && 'Some string'); // false


// console.log(hasMovieAdaptation && 'This book has a movie'); // false 


// console.log("jonas" && 'Some string'); // 'some string' (here is a truthy value)

// // falsy values: false, 0, "", null, undefined, NaN
// console.log(0 && 'Some string'); // 0
// console.log(false && 'Some string'); // false
// console.log(null && 'Some string'); // null
// console.log(undefined && 'Some string'); // undefined
// console.log(NaN && 'Some string'); // NaN
// console.log('' && 'Some string'); // ''

// console.log(true || 'Some string'); // true
// console.log(false || 'Some string'); // 'Some string'
// console.log('jonas' || 'Some string'); // 'jonas'

// console.log(0 || 'Some string'); // 'Some string'
// console.log(false || 'Some string'); // 'Some string'
// console.log(null || 'Some string'); // 'Some string'
// console.log(undefined || 'Some string'); // 'Some string'
// console.log(NaN || 'Some string'); // 'Some string'
// console.log('' || 'Some string'); // 'Some string'

// const spanishTranslation = book.translations.spanish || "No translation available";
// console.log(spanishTranslation); // 'No translation available'

// console.log(book.reviews.librarything.reviewsCount); // 0

// const countwrong = book.reviews.librarything.reviewsCount || "no reviews";
// console.log(countwrong); // 'no reviews'

// nullish coalescing operator
// const count = book.reviews.librarything.reviewsCount ?? "no reviews";
// console.log(count); // 0


// function getTotalReviewCount(book) {
//   const goodreads = book.reviews.goodreads.reviewsCount;
//   const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//   console.log(goodreads, librarything); // [49701, 0]
//   return goodreads + librarything;
// }

// console.log(getTotalReviewCount(book)); // 49701

*/

// Array mapping
/*
const books = getBooks();
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads.reviewsCount;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  console.log(goodreads, librarything); 
  return goodreads + librarything;
}

//##############################################################

squares =[1,2,3,4,5].map((num) => num ** 2);
console.log(squares); // [1, 4, 9, 16, 25]

const titles = books.map((book) => book.title);
console.log(titles);


// const essentialData = books.map((book) => {
//   return {
//     title: book.title,
//     author: book.author
//   }
// });
// console.log(essentialData);

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewCount: getTotalReviewCount(book)
}));
console.log(essentialData);

// Array filtering

const longBooks = books.filter((book) => book.pages > 500);
console.log(longBooks);

const longBookswithmovieadaptation = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
console.log(longBookswithmovieadaptation);

const adventureBooks = books.filter((book) => 
  book.genres.includes("adventure")).map((book) => book.title); 
console.log(adventureBooks);

// Array reduce

const totalPages = books.reduce((acc, book) => acc + book.pages, 0);
console.log(totalPages);

// Array sort

const x = [3,7,2,5,1,4];
const sorted = x.sort((a,b) => a - b);
console.log(sorted); // [1, 2, 3, 4, 5, 7]

const y = [3,7,2,5,1,4];
const sorted1 = y.slice().sort((a,b) => b - a);
console.log(sorted1); // [7, 5, 3, 4, 2, 1]

console.log(x,y); // [1, 2, 3, 4, 5, 7] [3, 7, 2, 5, 1, 4]

const sortedBypages = books.slice().sort((a,b) => b.pages - a.pages);
console.log(sortedBypages);

// working with immutable arrays

// 1) Add book object to array

const newBook = {
  id: 6,
  title: "The Hobbit",
  publicationDate: "1937-09-21",
  author: "J. R. R. Tolkien",
  genres: ["fantasy", "high-fantasy", "adventure"],
  hasMovieAdaptation: true,
  pages: 310,
  translations: {
    spanish: "El Hobbit",
    chinese: "哥布林",
    french: "Le Hobbit",
  },
  reviews: {
    goodreads: {
      rating: 4.52,
      ratingsCount: 630994,
      reviewsCount: 13417, 
    },
    librarything: {
      rating: 4.53,
      ratingsCount: 47166,
      reviewsCount: 0,
    },
  },
};

const booksAfterAdding = [...books, newBook];
console.log(booksAfterAdding);

// 2) Remove book object from array

const booksAfterRemoving = booksAfterAdding.filter((book) => book.id !== 3);
console.log(booksAfterRemoving);

// 3) Update book object in array

const booksAfterUpdating = booksAfterRemoving.map((book) =>
  book.id === 1 ? {...book, pages: 1} : book
);
console.log(booksAfterUpdating);
*/

// Asynchronous JavaScript - Promises

fetch('https://jsonplaceholder.typicode.com/todos')
  .then((res) => {res.json()
  .then((data) => console.log(data));
})

// Asynchronous JavaScript - Async/Await      
async function getTodos(){
  const res = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await res.json();
  console.log(data);

  return data;
}

const todos = getTodos();
console.log(todos);