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
import { GiSkills } from '@react-icons/all-files/gi/GiSkills'

function Profile() {
    return (
        <section className="profile">
            <article className="profile-container">
                <div className="profile-main">
                    <article>
                        <div className="profile-main-image">
                            <img src={image} alt="user" />
                        </div>
                        <div className="profile-main-details">
                            <h1>Eugene Oluoch</h1>
                            <div className="profile-main-details-tags">
                                <div>
                                    <AiOutlineMail />
                                    <p>eugenemarkke@gmail.com</p>
                                </div>
                                <div>
                                    <BiWorld />
                                    <p>SafaricomPLC - Software Developer</p>
                                </div>
                                <div>
                                    <BiPhoneCall />
                                    <p>+254716276313</p>
                                </div>
                            </div>
                        </div>
                    </article>
                    <div className="profile-edit">
                        <button>edit</button>
                    </div>
                </div>
                <div className="profile-bio">
                    <div className="profile-bio-title">
                        <div>
                            <aside>
                                <FiUser />
                            </aside>
                            <h1>Bio</h1>
                        </div>
                        <button>edit</button>
                    </div>
                    <div className="profile-bio-bio">
                        <p>Don't gain the world and lose your soul. Wisdom is better than silver and gold.</p>
                    </div>
                </div>
                <div className="profile-work">
                    <div className="profile-work-title">
                        <div>
                            <aside>
                                <MdWork />
                            </aside>
                            <h1>Work Experience</h1>
                        </div>
                        <button>Add</button>
                    </div>
                    <div className="profile-work-list">
                        <p>Safaricom</p>
                        <p>Microsoft</p>
                        <p>Google</p>
                    </div>
                </div>
                <div className="profile-education">
                    <div className="profile-education-title">
                        <div>
                            <aside>
                                <BiBookReader />
                            </aside>
                            <h1>Education</h1>
                        </div>
                        <button>Add</button>
                    </div>
                    <div className="profile-education-list">
                        <p>Moringa</p>
                        <p>MIT</p>
                        <p>Oxford</p>
                    </div>
                </div>
                <div className="profile-skill">
                    <div className="profile-skill-title">
                        <div>
                            <aside>
                                <GiSkills />
                            </aside>
                            <h1>Skill Set</h1>
                        </div>
                        <button>Add</button>
                    </div>
                    <div className="profile-skill-list">
                        <p>Programming</p>
                        <p>Python</p>
                        <p>Java</p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Profile