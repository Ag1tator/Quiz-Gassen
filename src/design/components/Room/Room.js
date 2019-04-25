import React, { Component } from 'react'

import './../style.scss'

class Room extends Component {
    render() {
        return (
            <div className="fullScreen">
                <header>
                    <div className="titleContainer">
                        クイズ部屋一覧
                    </div>
                </header>
                <ul className="roomList">
                    <li><button>Hackthon</button></li>
                    <li><button>Hackthon</button></li>
                    <li><button>Hackthon</button></li>
                    <li><button>Hackthon</button></li>
                    <li><button>Hackthon</button></li>
                </ul>
            </div>
        )
    }
}

export default Room