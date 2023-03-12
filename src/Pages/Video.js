import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RelatedVideoList from "../Componenets/list/RelatedVideoList";
import Loader from "../Componenets/ui/Loader";
import VideoPlayer from "../Componenets/description/Player"
import VideoDescription from "../Componenets/description/VideoDescription"


import { fetchVideo } from "../features/video/videoSlice";
import LikeUnlike from "../Componenets/description/LikeUnlike";

export default function Video() {
    const { video, isLoading, isError, error } = useSelector(
        (state) => state.video
    );
    const dispatch = useDispatch();
    const { videoId } = useParams();

    useEffect(() => {
        dispatch(fetchVideo(videoId));
    }, [dispatch, videoId]);

    const { _id, link, title, tags } = video || {};

    // decide what to render
    let content = null;
    if (isLoading) content = <Loader />;

    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isLoading && !isError && !video?.id) {
        content = <div className="col-span-12">No video found!</div>;
    }

    if (!isLoading && !isError && video?._id) {
        content = (
            <div class="grid grid-cols-3 gap-2 lg:gap-8">
                <div class="col-span-full w-full space-y-8 lg:col-span-2">
                    <VideoPlayer link={link} title={title} />

                    <VideoDescription video={video} />
                    <LikeUnlike video={video}/>
                </div>

                <RelatedVideoList currentVideoId={_id} tags={tags} />
            </div>
        );
    }

    return (
        <section class="pt-6 pb-20">
            <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                {content}
            </div>
        </section>
    );
}