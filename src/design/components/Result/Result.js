import React, { Component } from 'react'

import './../style.scss'

class Result extends Component {
    render() {
        const top3 = this.props.result.rank.slice(0, 3) //def:3
        const others = this.props.result.rank.slice(4)
        const list = []
        for(var i in others){
          list.push(<li>{others[i].displayName}</li>)
        }
        //console.log('CH',list)
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
                        <img className={top3[0] === void 0 ? "hidden": "borderGold"} src={top3[0] === void 0 ? "none": top3[0].imageSrc} alt="1st"></img>
                        <div>{top3[0].displayName}</div>
                        <div><span className="number">1</span>st</div>
                    </li>
                    <li>
                        <img className={top3[1] === void 0 ? "hidden": "borderSilver"} src={top3[1] === void 0 ? "none": top3[1].imageSrc} alt="2st"></img>
                        <div>{top3[1].displayName}</div>
                        <div><span className="number">2</span>st</div>
                    </li>
                    <li>
                        <img className={top3[2] === void 0 ? "hidden": "borderBronze"} src={top3[2] === void 0 ? "none" : top3[2].imageSrc} alt="3st"></img>
                        <div>{top3[2] === void 0 ? "" : top3[2].displayName}</div>
                        <div><span className="number">3</span>st</div>
                    </li>
                </ul>
                <ol className="otherRanking" start="4">
                    {list}
                </ol>
            </div>
        )
    }
}

export default Result
