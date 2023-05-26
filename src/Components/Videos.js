import { useParams } from "react-router-dom";
import staticData from "./StaticData.json"
export default function Videos() {
console.log(staticData)
  const { id } = useParams();
  let result = staticData.items.filter((element)=>element.id.videoId === id)
  console.log(result)
//   let obj = {...result[0].id}
//   console.log(obj.videoId)
  return <div>this is video</div>;
}
