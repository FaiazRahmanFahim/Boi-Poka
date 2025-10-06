import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { bookId } = useParams();
  const bookID = parseInt(bookId);
  //console.log(bookID);
  const bookData = useLoaderData();
  //console.log(bookData);
  const findBook = bookData.find((book) => book.bookId === bookID);
  console.log(findBook);

  return (
    <div className="flex justify-between items-center my-10 gap-10">
      <div className="flex flex-1 p-10 bg-[#13131310] justify-center items-center rounded-xl shadow">
        <img
          className="w-105 h-130 contain-content"
          src={findBook.image}
          alt=""
        />
      </div>
      <div className="flex-1 space-y-2.5">
        <h2 className="font-bold text-5xl">{findBook.bookName}</h2>
        <h3 className="text-lg font-bold">
          By: <span className="text-gray-600">{findBook.author}</span>
        </h3>
        <hr className="border-t-2 border-solid border-gray-300" />
        <h3 className="text-lg font-bold">
          Category: <span className="text-gray-600">{findBook.category}</span>
        </h3>
        <hr className="border-t-2 border-solid border-gray-300" />
        <h3 className="text-base font-bold text-justify">
          Review: <span className="text-gray-600"> {findBook.review}</span>
        </h3>
        <div className="flex items-center gap-4">
          <h3 className="text-lg font-bold">Tags:</h3>
          <h2 className="badge bg-[#13131310] text-green-400 font-bold border-none">
            #{findBook.tags[0]}
          </h2>
          <h2 className="badge bg-[#13131310] text-green-400 font-bold border-none">
            #{findBook.tags[1]}
          </h2>
        </div>
        <hr className="border-t-2 border-solid border-gray-300" />
        {/* <h3 className="font-bold">
          Number of Pages:{" "}
          <span className="text-gray-600">{findBook.totalPages}</span>
        </h3>
        <h3 className="font-bold">
          Publisher:
          <span className="text-gray-600">{findBook.publisher}</span>
        </h3>
        <h3 className="font-bold">
          Year of Publishing:
          <span className="text-gray-600">{findBook.yearOfPublishing}</span>
        </h3>
        <h3 className="font-bold">
          Rating:
          <span className="text-gray-600">{findBook.rating}</span>
        </h3> */}
        <table className="w-full text-left font-bold">
          <tbody>
            <tr>
              <td>Number of Pages:</td>
              <td className="text-gray-600">{findBook.totalPages}</td>
            </tr>
            <tr>
              <td>Publisher:</td>
              <td className="text-gray-600">{findBook.publisher}</td>
            </tr>
            <tr>
              <td>Year of Publishing:</td>
              <td className="text-gray-600">{findBook.yearOfPublishing}</td>
            </tr>
            <tr>
              <td>Rating:</td>
              <td className="text-gray-600">{findBook.rating}</td>
            </tr>
          </tbody>
        </table>

        <div className="flex gap-4">
          <button className="btn btn-outline btn-accent font-extrabold">Read</button>
          <button className="btn btn-outline btn-info font-extrabold">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
