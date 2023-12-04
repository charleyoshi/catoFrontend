import axios from 'axios'
import { useState, useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import cat from '../assets/cat.gif'
import { formatDistanceToNowStrict } from 'date-fns'
import VoteBox from './VoteBox'
import ShowRepliesButton from './ShowRepliesButton'
import Text from './Text'
import CommentForm from './CommentForm'
import Report from './Report'


export default function CommentPiece(props) {
    const comment = props.comment
    const replies = props.replies

    const { user } = useAuthContext()
    const [commenter, setCommenter] = useState({})
    const [hideReplyForm, setHideReplyForm] = useState(true)
    const [showReplies, setShowReplies] = useState(false)
    const date = formatDistanceToNowStrict(new Date(comment.createdAt), { addSuffix: true })
    const [openOptionBox, setOpenOptionBox] = useState(false)
    const [openReportForm, setOpenReportForm] = useState(false)

    useEffect(() => {
        const fetchCommenter = async (id) => {

            axios.get(`${process.env.REACT_APP_SERVER_URL}/api/user/${id}`)
                .then((response) => {
                    if (response.data) {
                        const commenter = response.data
                        setCommenter(commenter)
                    } else {
                        // anonymous user
                        setCommenter({})
                    }


                })
                .catch(async (error) => {
                    // console.log('could not fetch commenter', error) //todo: maybe change to anonymous?
                })
        }

        fetchCommenter(comment.userID)
    }, [comment.userID])


    const handleClickReplyButton = () => {
        setHideReplyForm(false)
    }

    const hideForm = () => {
        setHideReplyForm(true)
    }

    const toggleShowReplies = () => {
        setShowReplies(!showReplies)
    }

    const handleCloseForm = () => {
        setOpenReportForm(false)
        setOpenOptionBox(false)
        document.body.classList.remove('modal-open')
    }



    return (
        <div className='piece'>

            <div className="userCircle">
                <img referrerPolicy="no-referrer" src={commenter.imageURL ?? cat} alt="userCircle" width="36px" height="36px" />
            </div>

            <div className="content">

                <div className='nameTime'>
                    <span className='name'>{(commenter.firstName && commenter.lastName) ? (commenter.firstName + " " + commenter.lastName) : commenter.firstName ?? commenter.lastName ?? 'cat'} </span>
                    <span className='time'>&nbsp; {date}</span>
                </div>

                <Text text={comment.text} />

                <div className='votes'>
                    <VoteBox comment={comment} />

                    {replies && !!replies.length &&
                        <ShowRepliesButton numOfReplies={replies.length} toggleShowReplies={toggleShowReplies} isExpanded={showReplies} />
                    }

                    {replies &&
                        <div title='Reply' onClick={handleClickReplyButton} className="replyButton">
                            <svg fill='lightgrey' xmlns="http://www.w3.org/2000/svg" width="16" height="100%" viewBox='0 0 20 20' ><path d="M 19.4 14.5 c 0 0 -1.84 -10.4 -11.2 -10.4 v -4 L 0.2 7.3 l 8 6.72 v -4.615 C 13.28 9.405 16.75 9.85 19.4 14.5 z" /></svg>
                        </div>
                    }
                </div>

                {!hideReplyForm &&
                    <div className="row row-reply">
                        <div className="userCircle">
                            <img referrerPolicy="no-referrer" src={user ? user.imageURL : cat} alt="userCircle" width="38px" height="38px" />
                        </div>
                        <CommentForm cid={comment._id} hideForm={hideForm} />
                    </div>
                }

                {showReplies &&
                    <div className="showReplies">
                        {replies && replies.map(r => <CommentPiece comment={r} key={r._id} />)}
                    </div>
                }

            </div>

            <div className="more">
                <span onClick={() => setOpenOptionBox(!openOptionBox)} className="material-symbols-rounded icon">more_vert</span>

                {openOptionBox &&
                    <div className="optionBox">
                        {!openReportForm ?
                            <p onClick={() => { setOpenReportForm(true) }}>
                                <span className="material-symbols-rounded">flag</span>
                                <span className="text">Report</span>
                            </p>
                            : 
                            <Report commentID={comment._id} close={handleCloseForm} />
                        }
                    </div>
                }
            </div>


        </div>

    )
}

