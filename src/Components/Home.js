import React from "react";

export default function Home() {
  fetch(
    `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
  );
}
