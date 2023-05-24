import React, { useState } from "react";

export default function Home() {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
    );
    
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
