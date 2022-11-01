import React, {useState, useEffect} from 'react'

function StudentSignup() {

    const [studentscohort, setStudentsCohort] = useState([])
  useEffect(() => {
    fetch("/cohorts")
      .then((r) => r.json())
      .then((response) => {
        setStudentsCohort(response);
      });
  }, []);

  return (
    <div>
      <form className='entry-form'>
            
            <div className='entry-data'>
            <span style={{fontWeight: 'bolder'}} className='summary-title'>Signup</span>
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
                <div className="mb-3 mt-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <button type="Submit" className="form-control btn-secondary">Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default StudentSignup
