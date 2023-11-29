import { useEffect, useRef, useState } from "react";

const Text = ({ text }) => {
    
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    const textRef = useRef();

    useEffect(() => {
        // Check if the text overflows the container
        setIsTruncated(textRef.current.scrollHeight > textRef.current.clientHeight);
    }, [text]);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="text">
            <div className={`truncate-text ${isExpanded ? 'expanded' : ''}`} ref={textRef}>
                {text}
            </div>
            {isTruncated &&
                <p className="readMore" onClick={toggleExpand}>
                    {isExpanded ? "Read Less" : "Read More"}
                </p>
            }
        </div>
    );
};

export default Text;
