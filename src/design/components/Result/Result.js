import React, { Component } from 'react'

import './../style.scss'

class Result extends Component {
    render() {
        console.log(this.props.result)
        let top = [];
        const top3 = this.props.result.rank.slice(0, 3)
        const other = this.props.result.rank.slice(4)
        for (let i in top3) {
            console.log(top3[i].displayName, top3[i].imageSrc)
        }
        return (
            <div className="resultContainer">
                <h1>結果発表</h1>
                <h2>あなたの順位は
                    <div className="ranking bronze">
                        <span className="number">3</span>位!!
                    </div>
                </h2>
                <ul className="top3">
                    <li>
                        <img className="borderGold" src="asasigure.jpg" alt="1st"></img>
                        <div>asasigure_ice</div>
                        <div><span className="number">1</span>st</div>
                    </li>
                    <li>
                        <img className="borderSilver" src="asasigure.jpg" alt="2st"></img>
                        <div>_onsd</div>
                        <div><span className="number">2</span>st</div>
                    </li>
                    <li>
                        <img className="borderBronze" src="asasigure.jpg" alt="3st"></img>
                        <div>sasakou</div>
                        <div><span className="number">3</span>st</div>
                    </li>
                </ul>
                <ol className="otherRanking" start="4">
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                    <li>takashi sakaguchi</li>
                </ol>
            </div>
        )
    }
}

export default Result