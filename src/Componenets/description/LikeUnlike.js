import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";

export default function LikeUnlike({video}) {
  console.log(video)
    return (
        <div class="flex gap-10 w-48">
            <div class="flex gap-1">
                <div class="shrink-0">
                    <img class="w-5 block" src={likeImage} alt="Like" />
                </div>
                <div class="text-sm leading-[1.7142857] text-slate-600">
                    {video?.likes} 
                </div>
            </div>
            <div class="flex gap-1">
                <div class="shrink-0">
                    <img class="w-5 block" src={unlikeImage} alt="Unlike" />
                </div>
                <div class="text-sm leading-[1.7142857] text-slate-600">
                    {video?.unlikes}
                </div>
            </div>
        </div>
    );
}
