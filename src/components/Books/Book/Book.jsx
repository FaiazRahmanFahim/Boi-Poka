import React from "react";
import { Star } from "lucide-react";

const Book = ({ book }) => {
  console.log(book);

  return (
    <div className="p-5 shadow-sm rounded-xl space-y-3">
      <div className="bg-[#13131310] py-10 flex items-center justify-center rounded-xl">
        <img
          className="w-32 h-48 contain-content"
          src={book.image}
          alt="Book Cover"
        />
      </div>
      <div className="flex gap-2">
        <h2 className="badge bg-[#13131310] text-green-400 font-bold border-none">
          {book.tags[0]}
        </h2>
        <h2 className="badge bg-[#13131310] text-green-400 font-bold border-none">
          {book.tags[1]}
        </h2>
      </div>
      <h2 className="font-bold text-xl">{book.bookName}</h2>
      <h3 className="text-sm font-semibold">
        By: <span className="text-gray-500">{book.author}</span>
      </h3>
      <hr className="border-t-2 border-dashed border-gray-300" />
      <div className="flex justify-between items-center text-base font-semibold">
        <h2>{book.category}</h2>
        <div className="flex items-center gap-1">
          <h2>{book.rating}</h2>
          <h2>
            <Star size={18} />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Book;
