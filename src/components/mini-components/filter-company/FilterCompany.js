//Css
import './css/FilterCompany.css'

//Icons
import { RiBallPenLine } from '@react-icons/all-files/ri/RiBallPenLine'
import { BsSearch } from '@react-icons/all-files/bs/BsSearch'



function FilterCompany() {
    return (
        <section className="filter-company-main">
            <article className="filter-company-container">
                <article className="filter-company">
                    <div className="filter-company-number">
                        <p><span>30</span> companies found</p>
                    </div>
                    <div className="filter-company-form">
                        <form className="filter-company-form-form">
                            <div className='filter-company-form-form-inputs'>
                                <div>
                                    <RiBallPenLine />
                                    <input type="text" name="title" id="title" placeholder='Title' />
                                </div>
                            </div>
                            <div className="filer-company-form-form-button">
                                <button type="submit"><BsSearch /></button>
                            </div>
                        </form>
                    </div>
                </article>
            </article>
        </section>
    )
}

export default FilterCompany