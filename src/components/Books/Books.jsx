import React from "react";
import Book from "./Book/Book";

const Books = ({ booksData }) => {
  //   const booksPromise = fetch("./booksData.json").then((res) => res.json());
  //   console.log(booksPromise);
  //console.log(booksData);

  return (
    <div className="my-10">
      <h1 className="text-4xl text-center font-bold">Books</h1>
      <div className="mt-5 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {booksData.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
