import { useParams } from "react-router-dom";
import staticData from "./StaticData.json";
// import staticVideo from "./StaticVideo.json";
export default function Videos() {
  // const VIDEO_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=player&id=${id}&key=${process.env.REACT_APP_API_KEY}`;
  console.log(staticData);
  const { id } = useParams();
  let result = staticData.items.filter((element) => element.id.videoId === id);
  console.log(result);
  // let obj = {...result[0].id}
  // console.log(obj.videoId)

  // let videoResult = staticVideo.items.map(
  //   (element) => element.player.embedHtml
  // );
  return <div>this is video</div>;
}
