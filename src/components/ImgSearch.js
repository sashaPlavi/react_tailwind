import React, { useState } from "react";

function ImgSearch({ searchText }) {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  const handleKeydown = (e) => {
    e.preventDefault(e);
    if (e.key === "enter") {
      searchText(text);
    }
  };
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form
        onSubmit={onSubmit}
        onKeyDown={handleKeydown}
        className="w-full max-w-sm"
      >
        <div className="flex item-center border-b border-b-2 border-teal-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="apperance-none bg-transparent border-none w-full text-grey-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Enter Search Term.."
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded "
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default ImgSearch;
