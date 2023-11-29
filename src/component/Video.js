import { useRef, useState } from 'react';

// date-fns, Linkify, react-string-replace, react-player
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Linkify from 'react-linkify';
import reactStringReplace from 'react-string-replace';
import ReactPlayer from 'react-player'
import { convertTimestampToSeconds, convertLargeNumToAbbrev, convertISODateToReadable } from '../utility/format'

const Video = ({ video }) => {
    const [openDescription, setOpenDescription] = useState(false)
    const playerRef = useRef()

    const viewsAbbrev = convertLargeNumToAbbrev(video.views)
    const dateAbbrev = formatDistanceToNow(new Date(video.publishedAt), { addSuffix: true })
    const dateReadable = convertISODateToReadable(video.publishedAt)

    const addTimeStamps = (text) => {
        return reactStringReplace(text, /(\d+:\d+:?\d+)/g, (match, i) => (
            <span key={i} style={{ color: 'royalblue', cursor: 'pointer' }}
                onClick={() => { playerRef.current.seekTo(convertTimestampToSeconds(match), 'seconds') }}>
                {match}
            </span>
        ));
    }
    const descriptionFull = video.description.split('\n').map((paragraph, index) => (
        <span key={index}>{addTimeStamps(paragraph)}<br /></span>
    ))

    const descriptionShort = video.description.split('\n').slice(0, 3).map((paragraph, index) => (
        <span key={index}>{addTimeStamps(paragraph)}<br /></span>
    ))

    return (
        <div className="video">
            <div className="embed">
                <ReactPlayer url={`https://www.youtube.com/watch?v=${video.vid}`} muted={true} controls={true} width="100%" height="100%" playing={true} ref={playerRef} />
            </div>

            <div className="row row-1">{video.title}</div>
            <div className="row row-2">
                <div className="channel">
                    <div className="avatarCircle">
                        <img  referrerPolicy="no-referrer" src={video.avatar}
                            alt="avatar" width="50px" height="50px" />
                    </div>
                    <span className="author">{video.author}</span>
                </div>
                {video.isCato && <span className="isCato">Commenting off on YouTube ? Join the chatter here!</span>}
            </div>
            <div className={`row row-3 ${openDescription ? 'opened' : 'closed'}`} onClick={() => { if (!openDescription) setOpenDescription(true) }} >
                <p className="viewsAndTime" onClick={() => setOpenDescription(!openDescription)}>{!openDescription ? viewsAbbrev : video.views.toLocaleString('en-US')} views &nbsp;  {!openDescription ? dateAbbrev : dateReadable}</p>
                <div className="description"><Linkify>{openDescription ? descriptionFull : descriptionShort}</Linkify></div>

                {openDescription ? <p className="showLess" onClick={() => setOpenDescription(false)}><br /><br /><hr />show less</p> : null}
            </div>
        </div>
    )
}

export default Video

