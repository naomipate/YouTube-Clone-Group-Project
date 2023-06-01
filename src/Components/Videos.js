import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// import { AspectRatio } from "react-aspect-ratio";

export default function Videos() {
  const [videoData, setVideoData] = useState(null);
  const { id } = useParams();

  const [commentArray, setCommentArray] = useState([]);
  const [userComment, setUserComment] = useState({
    userName: "",
    comment: "",
  });

  const VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?type=video&part=player&part=snippet&id=${id}&key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    axios
      .get(VIDEO_URL)
      .then((response) => {
        setVideoData(response.data);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  function handleCommentSubmit(event) {
    event.preventDefault();

    setCommentArray([...commentArray, userComment]);
    setUserComment({
      userName: "",
      comment: "",
    });
  }

  function handleTextChange(event) {
    setUserComment({
      ...userComment,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <div className="text-center pt-5 d-flex flex-column">
      <div
        dangerouslySetInnerHTML={{
          __html: videoData?.items[0]?.player.embedHtml,
        }}
      />
      <h5 className="pt-3">{videoData?.items[0]?.snippet.title}</h5>
      <div>
        <form onSubmit={handleCommentSubmit} className="p-3">
          <div>
            <label htmlFor="userName">Name</label>
            <br />
            <input
              className="py-1 form-outline w-50"
              type="text"
              placeholder="Name..."
              name="userName"
              value={userComment.userName}
              onChange={handleTextChange}
            />
          </div>

          <br />

          <div>
            <label htmlFor="comment">Comment</label>
            <br />
            <input
              className="py-1 form-outline w-50"
              type="text"
              placeholder="..."
              name="comment"
              value={userComment.comment}
              onChange={handleTextChange}
            />
          </div>

          <br />
          <button type="submit" className="btn btn-danger">
            Submit
          </button>

          <div className="pt-3">
            {commentArray.map((element, index) => {
              return (
                <div key={index}>
                  <p className="bg-light rounded fs-4 border p-2">
                    <span className="text-danger">{element.userName}</span> says <span>{`"${element.comment}"`}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </div>
  );
}
