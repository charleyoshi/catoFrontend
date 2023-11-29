export default function ShowRepliesButton(props) {
    return (
        <div className={`showRepliesButton box ${props.isExpanded && 'expanded'}`}
            title={`${props.isExpanded ? 'Hide replies' : 'See all replies'}`}
            onClick={props.toggleShowReplies}>

            <svg fill='grey' xmlns="http://www.w3.org/2000/svg" width="12" height="100%" viewBox='0 0 48 48' ><path d="M 24 0.2 c -13.2336 0 -24 9.6896 -24 21.6 c 0 4.164 1.3176 8.1968 3.8144 11.6832 c -0.4728 5.2296 -1.74 9.112 -3.58 10.9512 c -0.2432 0.2432 -0.304 0.6152 -0.1504 0.9224 C 0.2208 45.6312 0.5 45.8 0.8 45.8 c 0.0368 0 0.0744 -0.0024 0.112 -0.008 c 0.324 -0.0456 7.8504 -1.1296 13.2936 -4.2704 C 17.2976 42.7688 20.5904 43.4 24 43.4 c 13.2336 0 24 -9.6896 24 -21.6 S 37.2336 0.2 24 0.2 z" /></svg>
            <span className="count replyCount">{props.numOfReplies}</span>
        </div>
    )
}
