import React, { useEffect, useState } from "react";
import staticData from "./StaticData.json";
import { Link } from "react-router-dom";
// import axios from "axios";

export default function Home() {
  const [data, setData] = useState(staticData);

  const [input, setInput] = useState({
    userInput: "abc",
  });

  // const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`;
  // const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${input}&type=video&part=snippet`;

  // useEffect(() => {
  //   axios
  //     .get(BASE_URL)
  //     .then((response) => setData(response.json()))
  //     .then((responseData) => setData(responseData.data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <>
      <div className="d-flex justify-content-center pt-3">
        <form>
          <input
            className="py-1"
            type="text"
            value={input.userInput}
            onChange={() => {}}
            placeholder="Search"
          />
          <button className="btn btn-danger ms-3 py-1 px-3">Search</button>
        </form>
      </div>
      <div className="container my-5">
        <div className="row text-center">
          {staticData.items.map((element) => {
            return (
              <Link to={`/videos/${element.id.videoId}`} className="col-6 p-2">
                <img
                  src={element.snippet.thumbnails.medium.url}
                  className="img-thumbnail"
                  alt=""
                />
                <h4>{element.snippet.title}</h4>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
