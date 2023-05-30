import React, { useEffect, useState } from "react";
import staticData from "./StaticData.json";
import { Link } from "react-router-dom";
// import axios from "axios";

export default function Home() {
  const [data, setData] = useState(staticData);
  // const [input, setinput] = useState({
  //   userInput: ""
  // })

  const [title, setTitle] = useState("");
  const [input, setInput] = useState("");

  // const BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${title}&type=video&part=snippet`;

  // useEffect(() => {
  //   axios
  //     .get(BASE_URL)
  //     .then((response) => setData(response.json()))
  //     .then((responseData) => setData(responseData.data))
  //     .catch((error) => console.log(error));
  // }, []);

  function handleInput(event) {
    // console.log(event.target.value)
    setInput(event.target.value);
  }
  console.log(input);
  
  function handleSubmit(event) {
    event.preventDefault();
    setTitle(input);
    setInput("");

    search(title)
  }

console.log(title)

function search(title){
    if(title === ''){
        return('Please search something.')
    }
    else if(title !== '') {
    // useEffect(() => {
  //   axios
  //     .get(BASE_URL)
  //     .then((response) => setData(response.json()))
  //     .then((responseData) => setData(responseData.data))
  //     .catch((error) => return(error));
  // }, []);
    }
}

  return (
    <>
      <div className="d-flex justify-content-center pt-5">
        <form onSubmit={handleSubmit} className="w-75 d-flex justify-content-center">
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
        <div className="row text-center m-4">
          {staticData.items.map((element) => {
            return (
              <Link to={`/videos/${element.id.videoId}`} className="col-sm-6 p-2">
                <img
                  src={element.snippet.thumbnails.medium.url}
                  className="img-thumbnail"
                  alt=""
                />
                <h5 className="text-wrap m-5">{element.snippet.title}</h5>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
