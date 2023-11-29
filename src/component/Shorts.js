import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function Shorts() {
    const { id } = useParams()
    const navigate = useNavigate()

    // If link is youtube shorts that looks like [https://www.youtube.com/shorts/LUztwR3xGIw]
    // Pass the id and navigate to /watch
    useEffect(() => {
        navigate('/watch', { state: { vid: id } })
    }, [id, navigate])

    return (
        <></>
    )
}

export default Shorts