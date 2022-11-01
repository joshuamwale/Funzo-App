import React from 'react'
import * as AiIcons from 'react-icons/ai';

function NewDiscussionForm({title, description, handleChange, handleSubmit}) {
    function closeFormData(){
        document.getElementById("form-data").style.display="none";
    }
  return (
    <div className='form-data' id='form-data'>
        <form className='entry-form' onSubmit={handleSubmit}>
            
            <div className='entry-data'>
                <button className='btn btn-sm btn-outline-danger button-right' onClick={closeFormData}><AiIcons.AiOutlineClose /></button>
                <div className="mb-3 mt-5">
                    <label className="form-label">Title</label>
                    <input type="text" 
                        className="form-control"
                        required 
                        name="title"
                        value={title}
                        onChange={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control"
                        rows="3"
                        require
                        name="description"
                        value={description}
                        onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                    <button type="Submit" className="form-control btn-secondary">Submit</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default NewDiscussionForm
