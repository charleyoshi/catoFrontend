import { useEffect, useState } from 'react'
import axios from 'axios'
import SidebarVideo from './SidebarVideo'
import { shuffleArray } from '../utility/shuffle'

const Sidebar = (props) => {
    const [recommendations, setRecommendations] = useState()

    useEffect(() => {

        const fetchRecommendations = async () => {
            const locales = navigator.languages.map(l => l.toLowerCase())

            // Make API request for recommendation videos based on locales
            axios.get(`${REACT_APP_SERVER_URL}/api/videos`, { params: { locale: locales, amount: 20 } })
                .then((response) => {
                    if (response.data) {
                        if (response.data.videos) {
                            var videos = response.data.videos.filter(v => v.vid !== props.video.vid)
                            videos = shuffleArray(videos)
                            setRecommendations(videos)
                        }
                    }
                })
                .catch(function (error) {
                    console.log(error); //todo: handle error
                })
        }

        fetchRecommendations()

        
    }, [props.video])



    return (
        <div className="sidebar">
            {/* <div className="header">Videos with comments turned off</div> */}

            {recommendations && recommendations.map(r =>
                <SidebarVideo video={r} key={r._id} />
            )}


        </div>
    )
}

export default Sidebar



