import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`;

  fetch(BASE_URL)
    .then((response) => response.json())
    .then((data) => console.log(data));

  const [input, setInput] = useState({
    userInput: "",
  });

  const [search, setSearch] = useState(false);

  function handleTextChange(event) {
    event.preventDefault();

    setInput((input.userInput = event.target.value));
    console.log(input.userInput);
  }

  function handleSearch() {
    setSearch(!search);
  }

  return (
    <div className="home-container">
      <form>
        <label>Search</label>
        <input
          type="text"
          value={input.userInput}
          onChange={(event) => handleTextChange(event)}
        />
        <button onClick={handleSearch}>Search</button>
      </form>
    </div>
  );
}
