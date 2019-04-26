import React, { Component } from 'react'

import './../style.scss'

class SelectAnswer extends Component {
    render() {
        return (
            <div className="fullScreen">
                <div className="quizForm">
                    <div className="quizTopRapper">
                        <div className="quizTop">
                            <h1>自分の答えを<br />選択！</h1>
                            <div className="loaderRapper none">
                                <h1>正解発表待ち</h1>
                                <div className="loader">Loading...</div>
                            </div>
                        </div>
                    </div>
                    <ul className="quizList">
                        <li><button>ソーダ</button></li>
                        <li><button>カルピス</button></li>
                        <li><button>R1</button></li>
                        <li><button>オレンジジュース</button></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default SelectAnswer