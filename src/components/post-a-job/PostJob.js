//State
import { useRef } from 'react'
//Css
import './css/PostJob.css'

//Icons
// import { CgClose } from '@react-icons/all-files/cg/CgClose'

//Modules
import { Editor } from '@tinymce/tinymce-react';
import { useFormik } from 'formik'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function PostJob() {

    //Ref initialisation
    const editorRef = useRef(null);
    // const log = () => {
    //   if (editorRef.current) {
    //     console.log(editorRef.current.getContent());
    //   }
    // };

    //Formik initialization
    let formik = useFormik({
        initialValues:{

        }
    })

    let tags = [{title:'docker'},{title:'python'},{title:'js'}]

    return (
        <section className="post-a-job">
            <article className="post-a-job-title">
                <h1>Post a Job</h1>
            </article>
            <article className="post-a-job-container">
                <form className="post-a-job-form">
                    <div className='post-a-job-form-div'>
                        <label htmlFor="job-title">Job Title <span>*</span></label>
                        <input type="text" name="job-title" id="job-title" placeholder='Job Title' />
                    </div>
                    <article>
                        <label htmlFor="job-qualification">Job Qualification <span>*</span></label>
                        <Autocomplete
                            multiple
                            id="tags-standard"
                            options={tags}
                            getOptionLabel={(option) => option.title}
                            renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Multiple values"
                                placeholder="Favorites"
                            />
                            )}
                        />
                    </article>
                    <div>
                        <label htmlFor="job-description">Job Description <span>*</span></label>
                        <Editor
                        initialValue=""
                        init={{
                        height: 300,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        />
                    </div>
                    <div className='post-a-job-form-div'>
                        <label htmlFor="job-type">Job Type <span>*</span></label>
                        <select name="job-type" id="job-type">
                            <option value="select">Select Type</option>
                            <option value="fulltime">Full Time</option>
                        </select>
                    </div>
                    <div className='post-a-job-form-div'>
                        <label htmlFor="job-location">Job Location <span>*</span></label>
                        <select name="job-location" id="job-location">
                            <option value="select">Select Location</option>
                            <option value="nairobi">Nairobi</option>
                        </select>
                    </div>
                    <div className='post-a-job-form-div'>
                        <label htmlFor="job-industry">Job Industry <span>*</span></label>
                        <select name="job-industry" id="job-industry">
                            <option value="select">Select Industry</option>
                            <option value="law">Law</option>
                        </select>
                    </div>
                    <aside>
                        <button type="submit">Post</button>
                    </aside>
                </form>
            </article>
        </section>
    )
}

export default PostJob