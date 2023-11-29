import axios from "axios";
import { useEffect, useState } from "react"

export default function Report(props) {
    const [selectedReasons, setSelectedReasons] = useState([]);

    useEffect(() => {
        document.body.classList.add('modal-open')
    }, [])

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedReasons([...selectedReasons, value]);
        } else {
            setSelectedReasons(selectedReasons.filter(reason => reason !== value));
        }
    };

    const submitForm = () => {
        // console.log(selectedReasons, props.commentID)
        axios.post(`/api/report`, {
            commentID: props.commentID, reasons: selectedReasons
        })
            .then(function (response) {
                alert('Report has been successfully sent.')
            })
            .catch(function (error) {
                alert('Something went wrong. Please try again later.')
            }).finally(() => {
                props.close()
            })
    }
    return (
        <div className="reportForm">
            <span className="title">Report Reason</span>

            <div className="reasons">

                <label className="container">
                    <input type="checkbox" value="Unwanted commercial content or spam" onChange={handleCheckboxChange} checked={selectedReasons.includes("Unwanted commercial content or spam")} />
                    <span className="checkmark"></span>
                    Unwanted commercial content or spam
                </label>


                <label className="container">
                    <input type="checkbox" value="Child abuse" onChange={handleCheckboxChange} checked={selectedReasons.includes("Child abuse")} />
                    <span className="checkmark"></span>
                    Child abuse
                </label>

                <label className="container">
                    <input type="checkbox" value="Hate speech or graphic violence" onChange={handleCheckboxChange} checked={selectedReasons.includes("Hate speech or graphic violence")} />
                    <span className="checkmark"></span>
                    Hate speech or graphic violence
                </label>

                <label className="container">
                    <input type="checkbox" value="Promotes terrorism" onChange={handleCheckboxChange} checked={selectedReasons.includes("Promotes terrorism")} />
                    <span className="checkmark"></span>
                    Promotes terrorism
                </label>

                <label className="container">
                    <input type="checkbox" value="Harassment or bullying" onChange={handleCheckboxChange} checked={selectedReasons.includes("Harassment or bullying")} />
                    <span className="checkmark"></span>
                    Harassment or bullying
                </label>

                <label className="container">
                    <input type="checkbox" value="Suicide or self injury" onChange={handleCheckboxChange} checked={selectedReasons.includes("Suicide or self injury")} />
                    <span className="checkmark"></span>
                    Suicide or self injury
                </label>

                <label className="container">
                    <input type="checkbox" value="Misinformation" onChange={handleCheckboxChange} checked={selectedReasons.includes("Misinformation")} />
                    <span className="checkmark"></span>
                    Misinformation
                </label>

            </div>
            <div className="row-btns">
                <button onClick={() => props.close()} className='btn-Cancel enabled'>Cancel</button>
                <button onClick={submitForm} className={`btn-Comment ${selectedReasons.length !== 0 && 'enabled'}`} disabled={selectedReasons.length === 0}>Submit</button>
            </div>
        </div>

    )
}
