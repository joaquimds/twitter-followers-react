import './Tweet.scss'

import React from 'react'

export default class Tweet extends React.Component {
  constructor (props) {
    super(props)
    const tweetText = `${this.props.tweetText || ''} ${this.props.tweetUrl || ''}`.trim()
    this.state = { tweetText }
  }

  onChangeTweet (e) {
    this.setState({ tweetText: e.target.value })
  }

  render () {
    return (
      <div className='tweet'>
        <p>{this.props.actionText}</p>
        <textarea className='tweet__text' onChange={(e) => this.onChangeTweet(e)} value={this.state.tweetText} />
        <a
          className='button tweet__button twitter-share-button'
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(this.state.tweetText)}`}
        >
          Spread the Word
        </a>
      </div>
    )
  }
}
