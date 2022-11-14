//Css
import './css/MainJob.css'

//Icons
import { MdLocationOn } from '@react-icons/all-files/md/MdLocationOn'
import { BsFillBriefcaseFill } from '@react-icons/all-files/bs/BsFillBriefcaseFill'
import { AiFillClockCircle } from '@react-icons/all-files/ai/AiFillClockCircle'

function Mainjob() {
    return (
        <section className="main-job">
            <article className="main-job-container">
                <div className="main-job-apply">
                    <button>Apply for Job</button>
                </div>
                <div className="main-job-overview">
                    <h1>Overview</h1>
                    <article>
                        <div>
                            <MdLocationOn />
                        </div>
                        <aside>
                            <h3>Location</h3>
                            <p>Nairobi</p>
                        </aside>
                    </article>
                    <article>
                        <div>
                            <BsFillBriefcaseFill />
                        </div>
                        <aside>
                            <h3>Industry</h3>
                            <p>IT</p>
                        </aside>
                    </article>
                    <article>
                        <div>
                            <AiFillClockCircle />
                        </div>
                        <aside>
                            <h3>Type</h3>
                            <p>Full Time</p>
                        </aside>
                    </article>
                </div>
                <div className="main-job-main">
                    <h1 className="main-job-main-title">Backend Developer</h1>
                    <div className="main-job-main-description">
                    We are a seeking smart, innovative, and dedicated Delphi/C# .NET Software Engineer to join our team! As the Delphi/C# .NET Software Engineer you will develop computer aided dispatch (CAD) software for law enforcement and conservation enforcement agencies. This is a great and challenging opportunity to be a part of an amazing company.

What your impact will be:

Design, develop, and implement CAD software for law enforcement and conservation enforcement agencies, using Delphi, C#, .NET, WinForms, Entity Framework Core, and SQL Server.
Demonstrate proficiency in the technology, language, and development environment needed for the project.
Take draft functional requirements and actively participate in the design of the final functional requirements.
What are we looking for:

Excellent verbal, written communication, and customer service skills.
Problem solving and analytical capabilities. Ability to troubleshoot technical problems and perform (or identify) potential resolutions.
Ability to make good judgment calls.
Ability to work effectively in a fast-paced, high volume, deadline-driven environment.
Must actively participate in development team code reviews.
Technical Requirements

Ability to develop in multiple programming languages including C# and Delphi.
Experience with object-oriented design and development principles within the .NET or JAVA framework.
Experience interacting with MS SQL Server database, T-SQL, stored procedures.
Experience in n-tier web-based architecture / service-oriented architecture and design is a plus.
Experience developing and consuming web services.
Experience with unit testing frameworks.
What will make you stand out:

BS in Computer Science or closely related field or its equivalent combination of relevant education and experience.
Ability to collaborate and participate in meetings during regular work hours in the North American Central Time zone.
Applicants selected may be subject to government security background investigations in order to work with sensitive public safety information.
What we offer:

Culture for Growth
Top Notch Employee Health & Well Being Benefit
Every Voice Matters
Global Reach
Careers with Purpose
World Class Career Development Programs
Focus On Sustainability
About us: 
SmartCOP, Inc. is a public safety software business engaged in system development, implementation, and support services for a fully integrated suite of products including Computer Aided Dispatch (CAD), Records Management System (RMS), Mobile Computing with Field Based Reporting, and Jail Management System (JMS) for first responders in the law, fire, and EMS markets.

Job Type: Full-time

Salary: From $70,000.00 per year

Benefits:

401(k)
401(k) matching
Dental insurance
Employee assistance program
Flexible spending account
Health insurance
Health savings account
Life insurance
Paid time off
Vision insurance
Schedule:

Day shift
Monday to Friday
Experience:

Delphi: 1 year (Required)
.NET: 1 year (Required)
C#: 1 year (Required)
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Mainjob