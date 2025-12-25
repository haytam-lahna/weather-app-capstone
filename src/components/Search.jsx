import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 rounded text-black"
      />
      <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
