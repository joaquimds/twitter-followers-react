import './App.scss'

import React from 'react'

import TwitterLogin from '../twitter-login/TwitterLogin'
import Dashboard from '../dashboard/Dashboard'
import Footer from '../footer/Footer'

import { fetchUserData } from '../../services/apiService'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { loading: true, error: '', userData: null, isClicked: false }
  }

  async componentDidMount () {
    this.setState({ error: '' })
    try {
      const userData = await fetchUserData()
      this.setState({ userData })
    } catch (e) {
      this.setState({ error: e.message })
    }
    this.setState({ loading: false })
  }

  handleMouseClick () {
    this.setState({ isClicked: !this.state.isClicked })
  }

  renderMain () {
    const { loading, userData, isClicked, error } = this.state
    if (loading) {
      return <p>Loading...</p>
    }
    if (userData) {
      return <Dashboard userData={userData} />
    }

    return (
      <div className='intro'>
        {error ? <p className='error'>{error}</p> : ''}
        <p>Find out what you should tweet to your followers.</p>
        <TwitterLogin />
        <div onClick={() => this.handleMouseClick()}>
          <p className='intro__why'>So why do I need to login?</p>
          {isClicked ? <p className='intro__hover'>Logging in with your account lets us access the Know Your Followers is developed and maintained by Campaign Lab.</p> : ''}
        </div>
      </div>
    )
  }

  render () {
    return (
      <div className='app'>
        <div className='app__column app__title'>
          <h1>Know</h1>
          <h1>Your</h1>
          <h1>Followers</h1>
        </div>
        <div className='app__column'>
          <main className='app__main'>
            {this.renderMain()}
          </main>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App
