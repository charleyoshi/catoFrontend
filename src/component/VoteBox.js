import axios from "axios"
import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"
import { useDispatch } from "react-redux"


export default function VoteBox(props) {
    const [upvotes, setUpvotes] = useState(0)
    const [downvotes, setDownvotes] = useState(0)
    const dispatch = useDispatch()

    const { user } = useAuthContext()
    const [userVoted, setUserVoted] = useState(null) // 'upvote' or 'downvote' or null
    const [enabled, setEnabled] = useState(true)

    const [error, setError] = useState()


    useEffect(() => {
        if (user) { setEnabled(true) }

        const fetchVotes = async (cid) => {

            axios.get(`${process.env.REACT_APP_SERVER_URL}/api/comment/${cid}/votes`)
                .then((response) => {
                    const { votes } = response.data
                    // console.log('v: ', votes)
                    // console.log('c: ', props.comment)
                    // length add to state
                    // [{type, cid}, {type, cid}, {type, cid}]
                    // upvotes 8 downvotes 10
                    // commentiD
                    var voted = null
                    if (user) {
                        voted = votes.find(v => v.userID === user.userID)
                    }

                    // Not allowed to vote if already voted or is guest.
                    if (voted || !user) { disableVote(voted ? voted.voteType : null) }
                    const upvoteCount =  votes.filter(vote => vote.voteType === 'upvote').length
                    const downvoteCount = votes.filter(vote => vote.voteType === 'downvote').length
                    setUpvotes(upvoteCount)
                    setDownvotes(downvoteCount)
                    setError(null)
                })
                .catch(async (error) => {
                    console.log('could not fetch votes: ', error) //todo
                    setError('Voting service is temporarily unavailable due to maintenance. Please try again later.')
                })
        }

        fetchVotes(props.comment._id)
    }, [user, dispatch, props.comment._id])


    const disableVote = (voteType) => {
        setEnabled(false)
        setUserVoted(voteType)
    }


    const handleVote = (voteType) => {
        if (!user || userVoted) { return }

        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/comment/${props.comment._id}/votes`, {
            voteType: voteType, userID: user && user.userID
        })
            .then(function (response) {
                if (voteType === 'upvote') { setUpvotes(upvotes + 1) }
                else { setDownvotes(downvotes + 1) }
                setError(null)
            })
            .catch(function (error) {
                setError('Voting service is temporarily unavailable due to maintenance. Please try again later.')
            });

        disableVote(voteType)
    }


    return (
        <div className={`votebox box ${!user ? 'guest' : enabled ? 'enabled' : userVoted === 'upvote' ? 'upvoted' : 'downvoted'}`} title=''>

            <svg className="upvote" onClick={() => handleVote('upvote')} fill='grey' xmlns="http://www.w3.org/2000/svg" width="12" height="100%" viewBox='0 0 18 18' ><path d="M 7.6 0 L 0 9 h 4.6 v 8.6 h 6.24 V 9 h 4.4 z" /></svg>
            <span className="upvote count upvoteCount">{upvotes}</span>

            &nbsp;&nbsp;

            <svg className="downvote" onClick={() => handleVote('downvote')} fill="grey" xmlns="http://www.w3.org/2000/svg" width="12" height="100%" viewBox='0 0 18 18' > <path d="M 8 18 l 8 -9 H 11 v -9 H 5 V 9 h -5 z" /></svg>
            <span className="downvote count downvoteCount">{downvotes}</span>
        </div>
    )
}
