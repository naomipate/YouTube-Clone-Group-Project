import { useParams } from "react-router-dom";
import staticVideo from "./StaticVideo.json";

export default function Videos() {
  const { id } = useParams();
  console.log(id);

  // const VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?type=video&part=player&part=snippet&id=${id}&key=${process.env.REACT_APP_API_KEY}`;
  // console.log(staticData);

  let videoResult = staticVideo.items[0].player.embedHtml;

  return (
    <div>
      {/* <div dangerouslySetInnerHTML={{ __html: videoResult }}></div> */}
      <h4>{staticVideo.items[0].snippet.title}</h4>
    </div>
  );
}
