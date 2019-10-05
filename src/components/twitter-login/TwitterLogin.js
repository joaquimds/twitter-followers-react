import React from 'react'
import { API_URL } from '../../constants'
import './TwitterLogin.scss'

class TwitterLogin extends React.Component {
  static onClickLogin () {
    window.location = `${API_URL}/sessions/connect?client=react`
  }

  constructor (props) {
    super(props)
    this.state = { showWhy: false }
  }

  onClickWhy () {
    this.setState({ showWhy: !this.state.showWhy })
  }

  render () {
    return (
      <div className='twitter-login'>
        <button className='button' type='button' onClick={() => TwitterLogin.onClickLogin()}>Login With Twitter to Know Your Followers</button>
        <p className='twitter-login__smallprint'>
          Know Your Followers doesn't store or share any data relating to your Twitter account, or post anything on Twitter.
          <button type='button' className='twitter-login__why' onClick={() => this.onClickWhy()}>
            So why do I need to login?
          </button>
        </p>
        {this.state.showWhy ? (
          <p className='twitter-login__reason'>
            Logging in with your account lets us access Twitter’s data directly through its API to analyse the people who follow you.
          </p>
        ) : ''}
      </div>
    )
  }
}

export default TwitterLogin
