import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import staticVideo from "./StaticVideo.json";

// import { AspectRatio } from "react-aspect-ratio";

export default function Videos() {
  const [videoData, setVideoData] = useState(null);
  const { id } = useParams();

  const VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?type=video&part=player&part=snippet&id=${id}&key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    axios
      .get(VIDEO_URL)
      .then((response) => {
        console.log(response.data.items[0].player.embedHtml);
        setVideoData(response.data);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <div className="text-center pt-5 d-flex flex-column">
      <div
        dangerouslySetInnerHTML={{
          __html: videoData?.items[0]?.player.embedHtml,
        }}
      />
      <h5 className="pt-3">{videoData?.items[0]?.snippet.title}</h5>
    </div>
  );
}
