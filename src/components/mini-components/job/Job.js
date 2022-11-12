//States
import { useState } from 'react'

//Icons
import { RiSuitcaseLine } from '@react-icons/all-files/ri/RiSuitcaseLine'
import { GrLocation } from '@react-icons/all-files/gr/GrLocation'
import { BsClock } from '@react-icons/all-files/bs/BsClock'
import { GrAdd } from '@react-icons/all-files/gr/GrAdd'
import { AiFillStar } from '@react-icons/all-files/ai/AiFillStar'

//Css
import './css/Job.css';

function Job() {

    //States
    let [save,setSave] = useState(false)

    //State functions
    let handleSave = ()=>{
        save?setSave(false):setSave(true)
    }

    return (
    <article className="job">
        <div className="job-industry">
            <h2>Frontend Development</h2>
        </div>
        <div className="job-title">
            <h1>E-Commerce Web Designer</h1>
        </div>
        <div className="job-tags">
            <div className="job-tags-location">
                <GrLocation />
                <p>Nairobi</p>
            </div>
            <div className="job-tags-type">
                <BsClock />
                <p>Freelance</p>
            </div>
        </div>
        <div className="job-buttons">
            <button className="job-buttons-details">Job details</button>
            <button className="job-buttons-save" onClick={handleSave}>{save?<GrAdd />:<AiFillStar />}</button>
        </div>
        <div className="job-posted">
            <p>Posted 1 year ago</p>
        </div>
    </article>
    )
}

export default Job