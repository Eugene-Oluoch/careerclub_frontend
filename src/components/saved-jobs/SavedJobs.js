//Css 
import './css/SavedJob.css'


//Components
import Job from '../mini-components/job/Job'

function SavedJobs() {
  return (
    <section className="saved-jobs">
        <article className="saved-jobs-title">
            <h1>My Saved Jobs</h1>
        </article>
        <article className="saved-jobs-container">
            <article className="saved-jobs-list">
                <Job />
                <Job />
                <Job />
                <Job />
                <Job />
            </article>
        </article>
    </section>
  )
}

export default SavedJobs