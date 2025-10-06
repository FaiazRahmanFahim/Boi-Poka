import React from "react";
import { MapPin } from "lucide-react";
import { Link } from "react-router";
import { Users } from "lucide-react";
import { NotebookText } from "lucide-react";

const ReadBook = ({ rb }) => {
  return (
    <div className="flex mx-auto justify-between items-center my-10 gap-10 border-2 border-gray-200 rounded-xl p-5 shadow-sm">
      <div className="p-10 bg-[#13131310] justify-center items-center rounded-xl shadow">
        <img className="w-32 h-44 contain-content" src={rb.image} alt="" />
      </div>
      <div className="flex-1 space-y-2.5">
        <h2 className="font-bold text-2xl">{rb.bookName}</h2>
        <h3 className="text-base font-bold">
          By: <span className="text-gray-600">{rb.author}</span>
        </h3>
        <div className="flex items-center gap-4">
          <h3 className="text-base font-bold">Tags:</h3>
          <h2 className="badge bg-[#13131310] text-green-400 font-bold border-none">
            #{rb.tags[0]}
          </h2>
          <h2 className="badge bg-[#13131310] text-green-400 font-bold border-none">
            #{rb.tags[1]}
          </h2>
          <div className="flex items-center gap-1">
            <MapPin size={18} />
            <h2 className="text-base text-gray-600 font-bold border-none">
              Year of Publishing: {rb.yearOfPublishing}
            </h2>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-1">
            <Users size={16} />
            <h2 className="text-base text-gray-500 font-bold border-none">
              Publisher: {rb.publisher}
            </h2>
          </div>
          <div className="flex items-center gap-1">
            <NotebookText size={16} />
            <h2 className="text-base text-gray-500 font-bold border-none">
              Pages: {rb.totalPages}
            </h2>
          </div>
        </div>
        <hr className="border-t-2 border-solid border-gray-300" />
        <div className="flex items-center gap-3">
          <h3 className="badge bg-blue-100 text-blue-600 font-bold border-none">
            Category: {rb.category}
          </h3>
          <h3 className="badge bg-orange-100 text-orange-600 font-bold border-none">
            Rating: {rb.rating}
          </h3>
          <Link
            to={`/BookDetails/${rb.bookId}`}
            className="badge bg-green-500 text-white border-none font-extrabold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReadBook;
