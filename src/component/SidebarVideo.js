import { useNavigate } from 'react-router-dom'
import { convertLargeNumToAbbrev } from '../utility/format'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

function SidebarVideo({ video }) {
    const navigate = useNavigate()
    const viewsAbbrev = convertLargeNumToAbbrev(video.views)
    const dateAbbrev = formatDistanceToNow(new Date(video.publishedAt), { addSuffix: true })



    const handleOnClick = () => {
        
        window.scrollTo(0, 0)
        navigate('/watch', { state: { vid: video.vid } })
    }

    return (
        <div onClick={handleOnClick} className="sidebarVideo">
            <div className="thumbnail">
                <img referrerPolicy="no-referrer" src={video.thumbnail}
                    alt="thumbnail" width="100%" height="auto" />
            </div>
            <div className="text">
                <div className="title">{video.title}</div>
                <div className="author">{video.author}</div>
                <div className="viewsAndTime">{viewsAbbrev} views • {dateAbbrev}</div>
            </div>
        </div>
    )
}

export default SidebarVideo