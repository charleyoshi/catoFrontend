import { Link } from "react-router-dom";
import cat from '../assets/cat.gif'

const NotFound = (props) => {
    const error =  props.error ?? 'Page not found.'

    return (
        <div className="notFound">
            <img src={cat} alt="404" width={200} className="catGif" />
            <br />
            <div className="error">{error}</div>
            <br />
            <Link to="/">
                <button className="btn-Redirect">Go to Home</button>
            </Link>
        </div>
    )
}


export default NotFound