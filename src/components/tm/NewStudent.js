import React, {useEffect, useState} from 'react'
import * as AiIcons from 'react-icons/ai';

function NewStudent() {
    function closeFormData(){
        document.getElementById("student-form-data").style.display="none";
    }

     // fetching cohorts for new students

  const [studentscohort, setStudentsCohort] = useState([])
  useEffect(() => {
    fetch("https://enigmatic-woodland-61895.herokuapp.com/cohorts")
      .then((r) => r.json())
      .then((response) => {
        setStudentsCohort(response);
      });
  }, []);


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
                <div className="mb-3 mt-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Phone</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Image</label>
                    <input type="file" className="form-control-file" />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Module</label>
                    <select
                        className="form-control"
                        name="cohort_id"
                        value={''}
                    >
                        {studentscohort.map((cohort) => (
                        <option key={cohort.id} value={cohort.id}>
                            {cohort.name}
                        </option>
                        ))}
                    </select>
                </div>
                <div className="mb-3">
                    <button type="Submit" className="form-control btn-secondary">Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default NewStudent
