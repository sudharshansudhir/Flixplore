import React, { useState } from "react";
import { allmovies } from "../assets/data.json";

const Allmovies = () => {
  // store full list
  const [Movies] = useState(allmovies);
  // store filtered list (what user sees)
  const [Filtered, setFiltered] = useState(allmovies);
  const m_Filtered=Filtered.filter((item)=>(!item.episodes_count))
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchText, setSearchText] = useState("");

  // handle genre selection
  const handleGenreChange = (e) => {
    const genre = e.target.value;
    setSelectedGenre(genre);
    applyFilters(genre, searchText);
  };

  // handle search input
  const handleSearchChange = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);
    applyFilters(selectedGenre, text);
  };

  // main filter logic (runs both filters together)
  const applyFilters = (genre, text) => {
    let filtered = Movies;

    if (genre && genre !== "All") {
      filtered = filtered.filter((movie) =>
        movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
      );
    }

    if (text) {
      filtered = filtered.filter((movie) =>
        movie.name.toLowerCase().includes(text)
      );
    }

    setFiltered(filtered);
  };

  return (
    <div className="relative my-20">
      {/* Top Filter Bar */}
      <div className="flex fixed top-20 px-8 bg-[#222121ff] w-full justify-between items-center z-20 py-4">
        <div className="flex justify-between items-center gap-2">
          <div className="text-2xl text-[#222121ff] my-4 py-2 px-4 bg-[#f60808ff] rounded-lg font-bold">
            All Movies
          </div>

          {/* Genre Dropdown */}
          <select
            id="category"
            name="category"
            value={selectedGenre}
            onChange={handleGenreChange}
            className="py-2 px-4 rounded-md bg-[#222121ff] text-white border border-gray-700 focus:ring-2 focus:ring-red-500"
          >
            <option value="All">All Genre</option>
            <option value="Action">Action</option>
            <option value="Romance">Romance</option>
            <option value="Drama">Drama</option>
            <option value="Emotional">Emotional</option>
          </select>
        </div>

        {/* Search Input */}
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Type movie name..."
          value={searchText}
          onChange={handleSearchChange}
          className="w-80 py-2 px-4 rounded-md bg-[#222121ff] text-white border border-gray-600 focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Movie Grid */}
      <div className="flex pt-40 flex-wrap justify-center gap-6 px-6">
        {Filtered.length > 0 ? (
          m_Filtered.map((item, key) => (
            <div
              key={key}
              className="flex flex-col justify-center items-center gap-2 bg-[#1a1a1a] p-4 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              <img
                src={item.thumbnail}
                alt={item.name}
                className="w-60 h-80 object-cover rounded-md"
              />
              <h1 className="text-lg font-semibold text-white">{item.name}</h1>
            </div>
          ))
        ) : (
          <p className="text-white text-lg mt-20">No movies found 😢</p>
        )}
      </div>
    </div>
  );
};

export default Allmovies;
