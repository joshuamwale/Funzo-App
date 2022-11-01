import React from 'react'

function TMSignup() {
  return (
    <div>
      <form className='entry-form'>
            
            <div className='entry-data'>
            <span style={{fontWeight: 'bolder'}} className='summary-title'>Signup</span>
                <div class="mb-3 mt-1">
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
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="mb-3 mt-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" />
                </div>
                <div className="mb-3">
                    <button type="Submit" className="form-control btn-secondary">Signup</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default TMSignup
