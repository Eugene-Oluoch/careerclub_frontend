//Css
import './css/Companies.css'

//Components
import Company from '../mini-components/company/Company'
import FilterCompany from '../mini-components/filter-company/FilterCompany'

function Companies() {
    return (
    <>
    <FilterCompany />
    <main className="companies">
        <section className="companies-container">
            <article className="companies-main">
                <div className="companies-main-side-filter">
                    <article className="companies-main-side-filter-category">
                        <h1>Industry</h1>
                        <div className="companies-main-side-filter-category-checks">
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
                </div>
                <div className="companies-main-jobs">
                    <div className="companies-main-jobs-title">
                        <p><span>Home </span>/ Companies</p>
                        <h1>Company <span>Profiles</span></h1>
                    </div>
                    <div className="companies-main-jobs-list">
                        <Company />
                        <Company />
                        <Company />
                        <Company />
                        <Company />
                        <Company />
                        <Company />
                        <Company />
                        <Company />
                        <Company />
                        <Company />
                    </div>
                </div>
            </article>
        </section>
    </main>
    </>
    )
}

export default Companies