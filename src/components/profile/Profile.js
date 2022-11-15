//States
import { useState } from 'react'

//Css
import './css/Profile.css'

//Images
import image from './images/default.jpg'

//Icons
import { AiOutlineMail } from '@react-icons/all-files/ai/AiOutlineMail'
import { BiWorld } from '@react-icons/all-files/bi/BiWorld'
import { BiPhoneCall } from '@react-icons/all-files/bi/BiPhoneCall'
import { FiUser } from '@react-icons/all-files/fi/FiUser'
import { MdWork } from '@react-icons/all-files/md/MdWork'
import { BiBookReader } from '@react-icons/all-files/bi/BiBookReader'
import { AiFillEdit } from '@react-icons/all-files/ai/AiFillEdit'
import { AiFillDelete } from '@react-icons/all-files/ai/AiFillDelete'

//Redux
import { useSelector } from 'react-redux'

function Profile() {

    //User Fetching
    let user = useSelector(state=>state.user)

    //States
    let [profile,setProfile] = useState(false)
    let [bio,setBio] = useState(false)
    let [work,setWork] = useState(false)
    let [education,setEducation] = useState(false)

    //States funstions
    let handleProfile = ()=>{
        profile?setProfile(false):setProfile(true)
    }

    let handleBio = ()=>{
        bio?setBio(false):setBio(true)
    }

    let handleWork = ()=>{
        work?setWork(false):setWork(true)
    }

    let handleEducation = ()=>{
        education?setEducation(false):setEducation(true)
    }

    return (
        <section className="profile">
            <article className="profile-container">
                <div className="profile-main">
                    <article>
                        <div className="profile-main-image">
                            <img src={image} alt="user" />
                        </div>
                        <div className="profile-main-details">
                            <h1>{user.username}</h1>
                            <div className="profile-main-details-tags">
                                <div>
                                    <AiOutlineMail />
                                    <p>{user.email}</p>
                                </div>
                                <div>
                                    <BiWorld />
                                    <p>{user.profession===""?"unknown":user.profession}</p>
                                </div>
                                <div>
                                    <BiPhoneCall />
                                    <p>{user.phone_number===""?"unknown":user.phone_number}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <div className="profile-edit">
                        <button onClick={handleProfile}>edit</button>
                    </div>
                    {
                        profile?
                    <div className="profile-profile-form">
                        <div className="profile-profile-form-overlay" onClick={handleProfile}></div>
                        <form>
                            <h1>Profile</h1>
                            <input type="text" name="profession" id="profession" placeholder='Enter your profession' />
                            <input type="text" name="phone_number" id="phone_number" placeholder='Enter your phone number' />
                            <button type="submit">Save</button>
                        </form>
                    </div>
                    :""}
                </div>
                <div className="profile-bio">
                    <div className="profile-bio-title">
                        <div>
                            <aside>
                                <FiUser />
                            </aside>
                            <h1>Bio</h1>
                        </div>
                        <button onClick={handleBio}>edit</button>
                    </div>
                    <div className="profile-bio-bio">
                        <p>Don't gain the world and lose your soul. Wisdom is better than silver and gold.</p>
                    </div>
                    {
                        bio?
                    
                    <div className="profile-bio-form">
                        <div className="profile-bio-form-overlay" onClick={handleBio}></div>
                        <form>
                            <h1>Bio</h1>
                            <textarea name="bio" id="bio" cols="30" rows="10" placeholder='Enter your bio'></textarea>
                            <button type="submit">Save</button>
                        </form>
                    </div>
                    :
                    ""
                    }
                </div>
                <div className="profile-work">
                    <div className="profile-work-title">
                        <div>
                            <aside>
                                <MdWork />
                            </aside>
                            <h1>Work Experience</h1>
                        </div>
                        <button onClick={handleWork}>Add</button>
                    </div>
                    <div className="profile-work-list">
                        <article>
                            <div>
                                <button><AiFillEdit />Edit</button>
                                <button><AiFillDelete />Delete</button>
                            </div>
                            <h1>Software Developer</h1>
                            <h2>SafaricomPLC</h2>
                            <p>Sep 2022 - Dec 2022</p>
                        </article>
                    </div>
                    {
                        work?
                    <div className="profile-work-form">
                        <div className="profile-work-form-overlay" onClick={handleWork}></div>
                        <form>
                            <h1>Work Experience</h1>
                            <div>
                                <label htmlFor="employer">Name of Employer <span>*</span></label>
                                <input type="text" name="employer" id="employer" placeholder='Company' />
                            </div>
                            <div>
                                <label htmlFor="job-title">Job title <span>*</span></label>
                                <input type="text" name="job-title" id="job-title" placeholder='Job title' />
                            </div>
                            <div>
                                <label htmlFor="start-of-employment">Start of employment <span>*</span></label>
                                <select name="start-month" id="start-of-employmenr">
                                    <option value="select">Select Month</option>
                                    <option value="jan">January</option>
                                </select>
                                <select name="start-year" id="start-year">
                                    <option value="select">Select Month</option>
                                    <option value="2000">2000</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="end-of-employment">End of employment <span>*</span></label>
                                <select name="end-month" id="end-of-employment">
                                    <option value="select">Select Month</option>
                                    <option value="jan">Jan</option>
                                </select>
                                <select name="end-year" id="end-yeat">
                                    <option value="select">Select Year</option>
                                    <option value="2000">2000</option>
                                </select>
                            </div>
                            <button type="submit">Add</button>
                        </form>
                    </div>
                    :
                    ""
                    }
                </div>
                <div className="profile-education">
                    <div className="profile-education-title">
                        <div>
                            <aside>
                                <BiBookReader />
                            </aside>
                            <h1>Education</h1>
                        </div>
                        <button onClick={handleEducation}>Add</button>
                    </div>
                    <div className="profile-education-list">
                        <article>
                            <div>
                                <button><AiFillEdit />Edit</button>
                                <button><AiFillDelete />Delete</button>
                            </div>
                            <h1>Wolsey Hall Oxford</h1>
                            <h2>High School</h2>
                            <p>Feb 2021 - Nov 2022</p>
                        </article>
                    </div>
                    {
                        education?
                    <div className="profile-education-form">
                        <div className="profile-education-form-overlay" onClick={handleEducation}></div>
                        <form>
                            <h1>Education</h1>
                            <div>
                                <label htmlFor="school-name">School Name <span>*</span></label>
                                <input type="text" name="school-name" id="school-name" placeholder='School' />
                            </div>
                            <div>
                                <label htmlFor="degree">Degree name <span>*</span></label>
                                <input type="text" name="degree" id="degree" placeholder='Degree name' />
                            </div>
                            <div className='profile-education-form-level'>
                                <label htmlFor="level">Education level <span>*</span></label>
                                <select name="level" id="level">
                                    <option value="select">Select Education level</option>
                                    <option value="primary">Primary school</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="start-of-education">Start of education <span>*</span></label>
                                <select name="start-month" id="start-of-education">
                                    <option value="select">Select Month</option>
                                    <option value="jan">January</option>
                                </select>
                                <select name="start-year" id="start-year">
                                    <option value="select">Select Month</option>
                                    <option value="2000">2000</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="end-of-education">End of education <span>*</span></label>
                                <select name="end-month" id="end-of-education">
                                    <option value="select">Select Month</option>
                                    <option value="jan">Jan</option>
                                </select>
                                <select name="end-year" id="end-yeat">
                                    <option value="select">Select Year</option>
                                    <option value="2000">2000</option>
                                </select>
                            </div>
                            <button type="submit">Add</button>
                        </form>
                    </div>
                    :""
                    }
                </div>
            </article>
        </section>
    )
}

export default Profile