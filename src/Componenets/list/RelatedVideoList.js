import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";

import Loader from './../ui/Loader';
import RelatedVideoListItem from './RelatedVideoListItem';

export default function RelatedVideoList({ currentVideoId, tags }) {
    const dispatch = useDispatch();
    const { relatedVideos, isLoading, isError, error } = useSelector(
        (state) => state.relatedVideos
    );

    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
    }, [dispatch, tags, currentVideoId]);

    // decide what to render
    let content = null;

    if (isLoading) content = <Loader />;
    if (!isLoading && isError) {
        content = <div className="col-span-12">{error}</div>;
    }
    if (!isLoading && !isError && relatedVideos?.length === 0) {
        content = <div className="col-span-12">No related videos found!</div>;
    }
    if (!isLoading && !isError && relatedVideos?.length > 0) {
        content = relatedVideos.map((video) => (
            <RelatedVideoListItem key={video._id} video={video} />
        ));
    }

    return (
        <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
}