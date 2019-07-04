import axios from 'axios';

export const getData = async(q, count) => {
    const response = await axios.get(`/api/tweets?count=${count}&q=${q}`).then(res => res.data.statuses);
    return response;
}