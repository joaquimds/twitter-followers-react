import './App.scss'

import React, { useState, useEffect } from 'react'

import TwitterLogin from '../twitter-login/TwitterLogin'
import Dashboard from '../dashboard/Dashboard'
import Footer from '../footer/Footer'

import { fetchUserData } from '../../services/apiService'

function App () {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setError('')
      try {
        const userData = await fetchUserData()
        setUserData(userData)
      } catch (e) {
        setError(e.message)
      }
      setLoading(false)
    }
    fetchData()
  }, [])

  const main = () => {
    if (loading) {
      return <p>Loading...</p>
    }
    if (userData) {
      return <Dashboard userData={userData} />
    }
    return (
      <div>
        {error ? <p className='error'>{error}</p> : ''}
        <p>Find out what you should tweet to your followers.</p>
        <TwitterLogin />
      </div>
    )
  }

  return (
    <div className='app'>
      <div className='app__column app__title'>
        <h1>Know</h1>
        <h1>Your</h1>
        <h1>Followers</h1>
      </div>
      <div className='app__column'>
        <main className='app__main'>
          {main()}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
