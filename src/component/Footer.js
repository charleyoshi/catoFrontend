import { useNavigate } from "react-router-dom"

export default function Footer() {
    const navigate = useNavigate()

    const handleOnClick = (ref) => {
        navigate('/legal', { state: { ref: ref } })
    }

    return (
        <div className="footer">

            <div>© 2023 Charley Yoshi</div>
            <ul>
                <li onClick={() => handleOnClick('terms')}>Terms of Service</li>
                <li onClick={() => handleOnClick('contact')}>Contact</li>
                <li onClick={() => handleOnClick('privacy')}>Privacy Policy</li>
            </ul>

        </div>
    )
}
