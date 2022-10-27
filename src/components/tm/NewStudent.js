import React from 'react'
import * as AiIcons from 'react-icons/ai';

function NewStudent() {
    function closeFormData(){
        document.getElementById("student-form-data").style.display="none";
    }
  return (
    <div className='form-data' id='student-form-data'>
        <form className='entry-form'>
            
            <div className='entry-data'>
            <span style={{fontWeight: 'bolder'}} className='summary-title'>New Student</span>
                <button className='btn btn-sm btn-outline-danger button-right' onClick={closeFormData}><AiIcons.AiOutlineClose /></button>
                <div class="mb-3 mt-5">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div class="mb-3 mt-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" />
                </div>
                <div class="mb-3 mt-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" />
                </div>
                <div class="mb-3 mt-3">
                    <label className="form-label">Image</label>
                    <input type="file" className="form-control-file" />
                </div>
                <div class="mb-3 mt-3">
                    <label className="form-label">Module</label>
                    <select class="form-control">
                        <option selected>No module Selected</option>
                        <option value="1">React Javascript</option>
                        <option value="2">Ruby Language</option>
                        <option value="3">Ruby on Rails</option>
                    </select>
                </div>
                <div class="mb-3">
                    <button type="Submit" className="form-control btn-secondary">Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default NewStudent
