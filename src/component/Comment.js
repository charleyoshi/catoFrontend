import axios from 'axios'
import { useState, useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import cat from '../assets/cat.gif'

import CommentForm from './CommentForm'
import CommentPiece from './CommentPiece'

import { useSelector, useDispatch } from 'react-redux'
import { setComments, setReplies } from '../reducers/commentSlice'


export default function Comment(props) {
    const comments = useSelector((state) => state.comment.comments)
    const replies = useSelector((state) => state.comment.replies)
    const dispatch = useDispatch()

    const [openSortBox, setOpenSortBox] = useState(true)
    const [selectedSort, setSelectedSort] = useState('best')
    const { user } = useAuthContext()

    useEffect(() => {

        // use Redux: central state management 
        const fetchComments = async (vid) => {

            axios.get(`${REACT_APP_SERVER_URL}/api/video/${vid}/comments`, {params : {sortBy: selectedSort}})
                .then((response) => {
                    const { comments, replies } = response.data
                    dispatch(setComments(comments))
                    dispatch(setReplies(replies))
                })
                .catch(async (error) => {
                    console.log('could not fetch comments', error) //todo
                })
        }

        fetchComments(props.vid)
    }, [selectedSort, dispatch, props.vid])


    const handleOnClickSortBox = () => {
        setOpenSortBox(!openSortBox)
    }


    return (
        <div className='comment'>

            <div className="row row-1">
                <span className="title">{comments.length + replies.length} {comments.length + replies.length === 1 ? "Comment" : "Comments"} </span>

                <div className="sortByDiv" onClick={handleOnClickSortBox}>
                    <span className="material-symbols-rounded">sort</span>
                    <span className='sortByText'>Sort By</span>

                    <div hidden={openSortBox} className="sortBox">

                        <p onClick={() => setSelectedSort('best')} className={`${selectedSort === 'best' && 'selected'}`}>
                            <span className="material-symbols-rounded">kid_star</span>
                            <span className="text">Best</span>
                        </p>

                        <p onClick={() => setSelectedSort('new')} className={`${selectedSort === 'new' && 'selected'}`}>
                            <span className="material-symbols-rounded">eco</span>
                            <span className="text">New</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="row row-2">
                <div className="userCircle">
                    <img referrerPolicy="no-referrer" src={user ? user.imageURL : cat} alt="userCircle" width={40} height={40} />
                </div>
                <br /><br />
                <CommentForm />
            </div>

            <div className="row row-3">
                {comments && comments.map(c => <CommentPiece comment={c} key={c._id} replies={replies.filter(r => r.parentID === c._id)} />)}

            </div>
        </div>
    )
}

