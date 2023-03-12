import axios from "../../utils/axios";

export const getVideo = async (_id) => {
    const response = await axios.get(`/videos/${_id}`);

    return response.data;
};