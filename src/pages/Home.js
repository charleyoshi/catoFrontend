import { useNavigate } from 'react-router-dom'
import img1 from '../assets/home/img1.png'
import img2 from '../assets/home/img2.png'
import img3 from '../assets/home/img3.png'
import img4 from '../assets/home/img4.png'
import img5 from '../assets/home/img5.png'
import img6 from '../assets/home/img6.png'


import { useRef, useState } from 'react'
export default function Home() {
    const [inputURL, setInputURL] = useState('https://www.youtube.com/watch?v=0pg_Y41waaE')
    const navigate = useNavigate()
    const section3Ref = useRef()
    const [error, setError] = useState(false)

    const scrollHandler = (ref) => {
        window.scrollTo({ top: ref.current.offsetTop });
    };
    const handleGoOnClick = (e) => {
        e.preventDefault()
        let params
        try {
            params = new URLSearchParams(new URL(inputURL).search);
            const videoID = params.get('v')
            if (videoID && videoID.length === 11) {
                navigate('/watch', { state: { vid: videoID } })
            } else {
                setError(true)
            }

        } catch (error) {
            setError(true)
        }

    }

    return (
        <div className='home'>
            <section className="one dark">
                <div className="upper">
                    <span className="span-1">Comments are turned off? </span> &nbsp;&nbsp;
                    <span className="span-2"> Turn it back on! </span>
                </div>
                <div className="lower">
                    <span>Discover Limitless Capabilities</span>
                    <button onClick={() => scrollHandler(section3Ref)} className='btn-LearnMore'>Learn More</button>
                </div>

            </section>

            <section className="two">
                <div className="upper">
                    <span className="title">Quick Start</span>
                </div>
                <div className="lower">
                    <span>   To get started, paste a YouTube link where comments are turned off in the field below.
                        <br />
                        If you don't have one, feel free to use the sample link provided.
                    </span>
                    <form>
                        <input className="inputBox" placeholder='Paste a link' onChange={(e) => setInputURL(e.target.value)} value={inputURL} type="text" />
                        <button onClick={handleGoOnClick}>&nbsp;Go&nbsp;</button>
                    </form>
                    {error && <span className='errorMessage'>✴︎Incorrect format</span>}
                </div>
            </section>

            <section ref={section3Ref} className="three dark">
                <div className="upper">Get The Facts</div>
                <div className="lower">

                    <div className="box box-1">
                        <div className="imgDiv">
                            <img referrerPolicy="no-referrer" src={img1}
                                alt="thumbnail" width="100%" />
                        </div>

                        <div className='textDiv'>
                            <span className='header'>What is cato</span> <br />
                            <span className='content'> Named After 'Comments are turned off',
                                cato lets you Comment to Videos Without Restrictions</span>
                        </div>
                    </div>

                    <div className="box box-2">
                        <div className="imgDiv">
                            <img referrerPolicy="no-referrer" src={img2}
                                alt="thumbnail" width="100%" />
                        </div>

                        <div className='textDiv'>
                            <span className='header'>How to use</span> <br />
                            <span className='content'> Replace  <span className='youtube'>`youtube`</span> with
                                <span className='catoapp'> `catoapp` </span>
                                in Any Videos, or Paste Link in the Search Bar</span>
                        </div>
                    </div>
                    <div className="box box-3">
                        <div className="imgDiv">
                            <img referrerPolicy="no-referrer" src={img3}
                                alt="thumbnail" width="100%" />
                        </div>

                        <div className='textDiv'>
                            <span className='header'>Features</span> <br />
                            <span className='content'> Comment, Vote, Reply. <br />
                                All Sorts of Interactions</span>
                        </div>
                    </div>
                    <div className="box box-4">
                        <div className="imgDiv">
                            <img referrerPolicy="no-referrer" src={img4}
                                alt="thumbnail" width="100%" />
                        </div>

                        <div className='textDiv'>
                            <span className='header'>Localization</span> <br />
                            <span className='content'> Discover Relevant and Always-up-to-date Content Tailored to Your Locale
                            </span>
                        </div>
                    </div>
                    <div className="box box-5">
                        <div className="imgDiv">
                            <img referrerPolicy="no-referrer" src={img5}
                                alt="thumbnail" width="100%" />
                        </div>

                        <div className='textDiv'>
                            <span className='header'>User Privacy</span> <br />
                            <span className='content'> Anonymously or with Identification. Secured by Google Authentication</span>
                        </div>
                    </div>
                    <div className="box box-6">
                        <div className="imgDiv">
                            <img referrerPolicy="no-referrer" src={img6}
                                alt="thumbnail" width="100%" />
                        </div>

                        <div className='textDiv'>
                            <span className='header'>Courtesy</span> <br />
                            <span className='content'> Enjoy Freedom of Expression with Due Respect for Creators. Report Any Violations Detected.</span>
                        </div>
                    </div>


                </div>


            </section>
        </div>
    )
}
