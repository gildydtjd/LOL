import React, { Component, Fragment } from 'react'
import Champion from '../contents/champion/Champion'

export default class Info extends Component {
  render() {
    return (
      <div className="info">
        <Champion />
      </div>
    )
  }
}