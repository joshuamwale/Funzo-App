import React from 'react'
import {Link} from 'react-router-dom'
import LoginForm from './LoginForm'


function StudentLogin() {
    const backColor = {
        backgroundColor: '#8d878741'
    }
  return (
    <div>
      <LoginForm background={backColor} />
    </div>
  )
}

export default StudentLogin
