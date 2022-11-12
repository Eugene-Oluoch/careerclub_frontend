//Css
import './css/Filter.css'

//Icons
import { RiBallPenLine } from '@react-icons/all-files/ri/RiBallPenLine'
import { GrLocation } from '@react-icons/all-files/gr/GrLocation'
import { BsSearch } from '@react-icons/all-files/bs/BsSearch'


function Filter() {
    return (
        <section className="filter-main">
            <article className="filter-container">
                <article className="filter">
                    <div className="filter-number">
                        <p>Showing <span>30</span> jobs</p>
                    </div>
                    <div className="filter-form">
                        <form className="filter-form-form">
                            <div className='filter-form-form-inputs'>
                                <div>
                                    <RiBallPenLine />
                                    <input type="text" name="title" id="title" placeholder='Title' />
                                </div>
                                <div>
                                    <GrLocation />
                                    <input type="text" name="location" id="location" placeholder='Location' />
                                </div>
                            </div>
                            <div className="filer-form-form-button">
                                <button type="submit"><BsSearch /></button>
                            </div>
                        </form>
                    </div>
                </article>
            </article>
        </section>
    )
}

export default Filter