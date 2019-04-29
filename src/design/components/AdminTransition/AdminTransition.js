import React, { Component } from 'react'

import './../style.scss'

class AdminTransition extends Component {
  render() {
    console.log(this.props.image)
    return (
        <div className="rapper">
            <header className="adminHeader">
                <nav>
                    <ul>
                            <li>
                                <button>Room一覧</button>
                            </li>
                            <li>
                                <button>Room作成</button>
                            </li>
                            <li>
                                <button>Quiz作成</button>
                            </li>
                            <li>
                                <button>画面</button>
                            </li>
                    </ul>
                </nav>
            </header>
            <div className="container">
                <h1>Room1</h1>
                <div className="buttonRapper">
                    <button className="primaryButton">一問目を出題する</button>
                </div>
            </div>
        </div>
    )
  }
}

export default AdminTransition
