import React, { useEffect, useState } from "react";
import staticData from "./StaticData.json";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [searchData, setSearchData] = useState([]);
  const [input, setInput] = useState("");
  const [searchState, setSearchState] = useState(false);

  const [searched, setSearched] = useState(false);

  // const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${title}&type=video&part=snippet`;

  function handleInput(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSearched(true);
    // setTitle(input);
    // setInput("");

    setSearchState(true);
    // setInput("");

    search();
  }

  function search() {
    // const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${input}&type=video&part=snippet`;

    // axios
    //   .get(BASE_URL)
    //   .then((response) => {
    //     console.log(response.data);
    //     setSearchData(response.data);
    //   })

    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  return (
    <>
      <div className="d-flex justify-content-center pt-5">
        <form
          onSubmit={handleSubmit}
          className="w-75 d-flex justify-content-center"
        >
          <input
            className="py-1 form-outline w-50"
            type="text"
            value={input}
            onChange={handleInput}
            placeholder="Search"
          />
          <button className="btn btn-danger ms-3 py-1 px-3" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="container my-5">
        {/* <div className="row text-center m-4">
          {searchState ? (
            searchData.items.map((element) => {
              return (
                <Link
                  to={`/videos/${element.id.videoId}`}
                  className="col-sm-6 p-2"
                >
                  <img
                    src={element.snippet.thumbnails.medium.url}
                    className="img-thumbnail"
                    alt=""
                  />
                  <h5 className="text-wrap m-5">{element.snippet.title}</h5>
                </Link>
              );
            })
          ) : (
            <p>Oh No! Search for a video 😎</p>
          )}
        </div> */}
      </div>
    </>
  );
}
