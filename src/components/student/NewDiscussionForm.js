import React from 'react'
import * as AiIcons from 'react-icons/ai';

function NewDiscussionForm() {
    function closeFormData(){
        document.getElementById("form-data").style.display="none";
    }
  return (
    <div className='form-data' id='form-data'>
        <form className='entry-form'>
            
            <div className='entry-data'>
                <button className='btn btn-sm btn-outline-danger button-right' onClick={closeFormData}><AiIcons.AiOutlineClose /></button>
                <div class="mb-3 mt-5">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <button type="Submit" className="form-control btn-secondary">Submit</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default NewDiscussionForm
