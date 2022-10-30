import React, {useState} from 'react'
import * as AiIcons from 'react-icons/ai';

function ModuleForm({name, description, handleEdit}) {

    function closeFormData(){
        document.getElementById("form-data").style.display="none";
    }
  return (
    <div className='form-data' id='form-data'>
        <form className='entry-form' onSubmit={handleEdit}>
            
            <div className='entry-data'>
                <button className='btn btn-sm btn-outline-danger button-right' onClick={closeFormData}><AiIcons.AiOutlineClose /></button>
                <div class="mb-3 mt-5">
                    <label className="form-label">Module Name</label>
                    <input type="text" 
                        className="form-control" 
                        name='module_name'
                        value={name}
                        />
                </div>
                <div className="mb-3">
                    <label className="form-label">Module Description</label>
                    <textarea className="form-control"
                        name='module_name'
                        value={description}
                        rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <button type="Submit" className="form-control btn-secondary">Submit</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default ModuleForm
