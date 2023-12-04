import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom";
import axios from 'axios'
import Sidebar from "../component/Sidebar";
import Video from "../component/Video";
import Comment from "../component/Comment";

import { useDispatch } from "react-redux";
import { setVideoID } from "../reducers/commentSlice";
import NotFound from "./NotFound";
import { useLocation } from 'react-router-dom';


// components


const Watch = () => {
    const [video, setVideo] = useState()
    const [notFound, setNotFound] = useState(false)
    const [notFoundMessage, setNotFoundMessage] = useState()

    const dispatch = useDispatch()

    const [searchParams,] = useSearchParams()

    const location = useLocation();

    useEffect(() => {

        const fetchVideo = async (vid) => {

            axios.get(`${process.env.REACT_APP_SERVER_URL}/api/videos/${vid}`)
                .then((response) => {
                    const video = response.data
                    setVideo(video)
                    dispatch(setVideoID(video.vid))
                })
                .catch(async (error) => {
                    if (error.response.status !== 404) {
                        const commonErrors = { 500: 'Internal Server Error', 403: 'Forbidden', 400: 'Bad Request', 401: 'Unauthorized' }
                        setNotFoundMessage(commonErrors[error.response.status] || 'Some error occurred.')
                        setNotFound(true)
                    } else {
                        // POST video
                        try {
                            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/videos`, { id: vid })
                            const video = response.data
                            setVideo(video)
                            dispatch(setVideoID(video.vid))
                        } catch (error) {
                            //404 if no no such video in youtube
                            console.log('error: ', error)
                            setNotFoundMessage('No such video.')
                            setNotFound(true)
                        }
                    }
                })
        }

        var videoID

        // Access the passed state from location
        const { state } = location;

        // If link is shorts that looks like [https://www.youtube.com/shorts/LUztwR3xGIw]
        if (state && state.vid) {
            videoID = state.vid
            const params = new URLSearchParams(window.location.search);
            params.set('v', videoID);
            const newUrl = `${window.location.pathname}?${params.toString()}`;
            window.history.replaceState({}, '', newUrl);
        } else {
            // If link is normal video that looks like [https://www.youtube.com/watch?v=LUztwR3xGIw]
            videoID = searchParams.get("v")
        }

        if (!videoID) {
            setNotFoundMessage('URL might not be correct. Check your link again.')
            setNotFound(true)

        } else {
            fetchVideo(videoID)
        }
    }, [dispatch, location, searchParams])


    return (
        <>
            {notFound ?
                <NotFound error={notFoundMessage} />
                :
                <div className="watch">
                    <div className="main">
                        {video &&
                            <>
                                <Video video={video} />
                                <Comment vid={video.vid} video={video} />
                            </>
                        }
                    </div>
                    {video &&
                        <Sidebar video={video} />}
                </div>

            }
        </>
    )
}


export default Watch