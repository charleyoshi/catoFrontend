import axios from 'axios'
import { useState, useRef, useEffect } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

import { useDispatch, useSelector } from 'react-redux'
import { createComment, createReply } from '../reducers/commentSlice'

const EMOJI_ICON = 'sentiment_very_satisfied'



export default function CommentForm(props) {
    // This component works in both comment and reply
    const vid = useSelector((state) => state.comment.videoID)
    const cid = props.cid

    const { user } = useAuthContext()
    const divARef = useRef()
    const divBRef = useRef()
    const textAreaRef = useRef()
    const [isFocus, setIsFocus] = useState()
    const [buttonEnabled, setButtonEnabled] = useState('')
    const [textareaValue, setTextareaValue] = useState('')
    const [showEmojiKeyboard, setShowEmojiKeyboard] = useState(false)
    const [error, setError] = useState()
    const dispatch = useDispatch()

    useEffect(() => {

        setButtonEnabled(!!textareaValue.trim().length)

        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                console.log('Close')
                setShowEmojiKeyboard(false)
            }
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };

    }, [textareaValue])

    const handleTextareaInput = (event) => {

        event.target.style.height = "auto";
        event.target.style.height = event.target.scrollHeight + 'px';
        setTextareaValue(event.target.value);
    }

    const onClickOutside = (event) => {
        // The condition checks whether the click event did not occur inside divA nor inside divB.
        // This means it occurred outside both divA and divB.
        if (divARef.current && divBRef.current &&
            !divARef.current.contains(event.target) &&
            !divBRef.current.contains(event.target)) {
            setShowEmojiKeyboard(false)
        }
    }

    const onEmojiSelect = (event) => {
        setTextareaValue(textareaValue + event.native)
    }

    const submitComment = (e) => {
        e.preventDefault()
        if (!textareaValue.trim().length) { return }

        axios.post(`${REACT_APP_SERVER_URL}/api/video/${vid}/comments`, {
            text: textareaValue, parentID: cid ?? null, userID: user ? user.userID : null
        })
            .then(function (response) {
                setTextareaValue('')

                if (cid) {
                    props.hideForm()
                    dispatch(createReply(response.data))
                } else {
                    setIsFocus(false)
                    textAreaRef.current.style = null
                    dispatch(createComment(response.data))
                }
            })
            .catch(function (error) {
                setError('The comment service is temporarily unavailable due to maintenance. Please try again later.')
            });

    }

    const handleCancelButton = (e) => {
        e.preventDefault()
        if (cid) {
            props.hideForm()
            return
        }
        setIsFocus(false)
    }

    return (
        <form>
            <span className='error'>{error}</span>
            <textarea ref={textAreaRef} onFocus={() => setIsFocus(true)} rows={1} value={textareaValue} onInput={handleTextareaInput} placeholder="Add a comment..." />
            {(isFocus || cid) &&
                <div className="row-btns">
                    <div className='left'>
                        <span ref={divARef} onClick={() => setShowEmojiKeyboard(!showEmojiKeyboard)} className="material-symbols-rounded">
                            {EMOJI_ICON}
                        </span>
                        {showEmojiKeyboard &&
                            <div className="emojiKeyboard" ref={divBRef} style={{ zIndex: 1 }} >
                                <Picker data={data} onEmojiSelect={onEmojiSelect} onClickOutside={onClickOutside} />
                            </div>
                        }
                    </div>
                    <div className="right">
                        <button onClick={handleCancelButton} className='btn-Cancel'>Cancel</button>
                        <button onClick={submitComment} className={`btn-Comment ${buttonEnabled ? 'enabled' : 'disabled'}`} disabled={!buttonEnabled} > {cid ? 'Reply' : 'Comment'}</button>
                    </div>
                </div>
            }
        </form>

    )
}

