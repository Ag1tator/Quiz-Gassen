import React, { Component } from 'react'

export default class UserData extends Component {

  render() {
    const userData = this.props.user
    return (
      <div>
        <div>{userData.displayName}</div>
        <img src={userData.photoURL} alt="user"></img>
      </div>
    )
  }
}