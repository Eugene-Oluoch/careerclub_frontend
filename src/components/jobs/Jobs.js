//Css
import './css/Jobs.css';

//Components
import Job from '../mini-components/job/Job'
import Filter from '../mini-components/filter/Filter';
import Pagenator from '../mini-components/pagenator/Pagenator';

function Jobs() {
    return (
    <>
    <Filter />
    <main className="jobs">
        <section className="jobs-container">
            <article className="jobs-main">
                <div className="jobs-main-side-filter">
                    <article className="jobs-main-side-filter-category">
                        <h1>Job Categories</h1>
                        <div className="jobs-main-side-filter-category-checks">
                            <div>
                                <input type="checkbox" name="law" id="law" />
                                <label htmlFor="law">Law</label>
                            </div>
                            <div>
                                <input type="checkbox" name="law" id="law" />
                                <label htmlFor="law">Law</label>
                            </div>
                            <div>
                                <input type="checkbox" name="law" id="law" />
                                <label htmlFor="law">Law</label>
                            </div>
                            <div>
                                <input type="checkbox" name="law" id="law" />
                                <label htmlFor="law">Law</label>
                            </div>
                            <div>
                                <input type="checkbox" name="law" id="law" />
                                <label htmlFor="law">Law</label>
                            </div>
                        </div>
                    </article>
                    <article className="jobs-main-side-filter-type">
                        <h1>Job Types</h1>
                        <div className="jobs-main-side-filter-type-checks">
                            <div>
                                <input type="checkbox" name="freelance" id="freelance" />
                                <label htmlFor="freelance">Freelance</label>
                            </div>
                            <div>
                                <input type="checkbox" name="freelance" id="freelance" />
                                <label htmlFor="freelance">Freelance</label>
                            </div>
                            <div>
                                <input type="checkbox" name="freelance" id="freelance" />
                                <label htmlFor="freelance">Freelance</label>
                            </div>
                            <div>
                                <input type="checkbox" name="freelance" id="freelance" />
                                <label htmlFor="freelance">Freelance</label>
                            </div>

                        </div>
                    </article>
                </div>
                <div className="jobs-main-jobs">
                    <div className="jobs-main-jobs-title">
                        <p><span>Home </span>/ Jobs</p>
                        <h1>Jobs currently <span>available</span></h1>
                    </div>
                    <div className="jobs-main-jobs-list">
                        <Job />
                        <Job />
                        <Job />
                        <Job />
                        <Job />
                        <Job />
                        <Job />
                        <Job />
                        <Job />
                        <Job />
                        <Job />
                    </div>
                    <Pagenator />
                </div>
            </article>
        </section>
    </main>
    </>
    )
}

export default Jobs