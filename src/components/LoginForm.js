import React from 'react'

function LoginForm({background}) {
  return (
    <div>
      <form style={background} className='auth-form'>
            <div className='auth-data'>
                <span style={{fontWeight: 'bolder'}} className='center'>User login</span>
                <div class="mb-3 mt-3">
                    <label className="form-label">Email</label>
                    <input type="text" className="form-control" />
                </div>
                <div class="mb-3 mt-3">
                    <label className="form-label">Password</label>
                    <input type="text" className="form-control" />
                </div>
                <div class="mb-3">
                    <button type="Submit" className="form-control btn-secondary">Login</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginForm
