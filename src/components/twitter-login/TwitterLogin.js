import React from 'react'
import { API_URL } from '../../constants'
import './TwitterLogin.scss'

function TwitterLogin () {
  const onClickLogin = async () => {
    window.location = `${API_URL}/sessions/connect?client=react`
  }
  return (
    <div className='twitter-login'>
      <button className='button' type='button' onClick={onClickLogin}>Login With Twitter to Know Your Followers</button>
    </div>
  )
}

export default TwitterLogin
