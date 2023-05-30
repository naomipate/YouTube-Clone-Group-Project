import { useParams } from "react-router-dom";
import staticVideo from "./StaticVideo.json";

// import { AspectRatio } from "react-aspect-ratio";

export default function Videos() {
  const { id } = useParams();
  console.log(id);

  // const VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?type=video&part=player&part=snippet&id=${id}&key=${process.env.REACT_APP_API_KEY}`;
  // console.log(staticData);

  let videoResult = staticVideo.items[0].player.embedHtml;

  return (
    <div className="text-center pt-5 d-flex flex-column">
        <div className="" dangerouslySetInnerHTML={{ __html: videoResult }}></div>
      <h5 className="pt-3">{staticVideo.items[0].snippet.title}</h5>
    </div>
  );
}
