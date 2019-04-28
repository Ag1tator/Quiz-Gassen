import React, { Component } from 'react'

import './../style.scss'

class AdminRoom extends Component {
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
                <h1>作成したRoom一覧</h1>
                <ul>
                    <li>
                        <button>Room</button>
                    </li>
                    <li>
                        <button>Room</button>
                    </li>
                    <li>
                        <button>Room</button>
                    </li>
                    <li>
                        <button>Room</button>
                    </li>
                </ul>
            </div>
        </div>
    )
  }
}

export default AdminRoom
