import React from 'react'
import LoginForm from './LoginForm'
import {Link} from 'react-router-dom'

function TMLogin() {
    const backColor = {
        backgroundColor: '#77370d3b'
    }
  return (
    <div>
      <LoginForm background={backColor}/>
    </div>
  )
}

export default TMLogin
