import './Dashboard.scss'

import React from 'react'

import { ACTIVIST_THRESHOLD } from '../../constants'
import { MESSAGE_FOR_ACTIVISTS, MESSAGE_FOR_SUPPORTERS, TWEET_FOR_ACTIVISTS, TWEET_FOR_SUPPORTERS, TWEET_HASHTAG } from '../../copy'

const Dashboard = ({ userData }) => {
  const percentage = Math.round(userData.matched / userData.total * 100)
  const followers = 'follower' + (userData.total === 1 ? '' : 's')
  const message = percentage > 50 ? MESSAGE_FOR_ACTIVISTS : MESSAGE_FOR_SUPPORTERS
  const tweet = (percentage > ACTIVIST_THRESHOLD ? TWEET_FOR_ACTIVISTS : TWEET_FOR_SUPPORTERS) + ' ' + TWEET_HASHTAG
  return (
    <div className='dashboard'>
      <p>You have {userData.total} {followers}, {percentage}% of whom are Labour supporters.</p>
      <p>{message.trim()}</p>
      <a
        className='button'
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet.trim())}`}
        target='_blank'
        rel='noreferrer noopener'
      >Tweet our message
      </a>
    </div>
  )
}

export default Dashboard
