import React, { Component } from 'react'

import './../style.scss'

class Image extends Component {
  render() {
    console.log(this.props.image)
    return (
      <div className="fullScreen imageRapper">
        <div className="imageBackground">
          <button onClick={() => this.props.changeSelectAnswer()}>
            <img alt="hogehoge" src={this.props.image} />
          </button>
        </div>
        <footer><h1>わかったら<br />画面をタップ！</h1></footer>
      </div>
    )
  }
}

export default Image
