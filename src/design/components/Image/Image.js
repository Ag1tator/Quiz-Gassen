import React, { Component } from 'react'

import './../style.scss'

let radius = 0.5; //半径
let time = 1; //速さ(最小1ms),大きくするほど遅くなる
let speed = 1; //time[ms]当たりに描画するpx

class Image extends Component {
  componentDidMount = () => {
        this.draw()
    }

    draw = () => {
      const age = this.props.age
      //console.log("CH",typeof age)
      if(0 < age && age <= 8){
        speed = 45; time = 2;  //大体8Kbps
        console.log("CH0~5")
      }else if(8 < age && age <= 16){
        speed = 90; time = 2;  //大体16Kbps
        console.log("CH5~10")
      }else if(16 < age && age <= 24){
        speed = 360; time = 2;  //大体32Kbps
        console.log("CH15~20")
      }else if(24 < age && age <= 302){
        speed = 720; radius = 1;  //大体64Kbps
        console.log("CH25~30")
      }
      else{
        speed = 360; time = 2;
        console.log("CHelse")
      }
      speed = 720; radius = 1;

      const { canvas } = this
      const ctx = canvas.getContext('2d')

      this.img = new window.Image()

      this.img.addEventListener('load', () => {
        //console.log("W",this.img.width)
        //console.log("H",this.img.height)
        //const w = this.img.width
        //const h = this.img.height
        const w = 500
        const h = 500
        const imgPx = w * h
        let c = 0, a = 0
        const startTime = Date.now()
        const view = setInterval(() => {
          for (let i = 0; i < speed; i++) {
            ctx.restore()
            ctx.save()
            ctx.beginPath()
            ctx.arc(c, radius + a, radius + 1, 0, Math.PI * 2, false)
            ctx.clip()
            switch (this.props.resolutionNum) {
                case 0: ctx.drawImage(this.img, 0, 0, w, h, 0, 0, w * 0.3, h * 0.3); break
                case 1: ctx.drawImage(this.img, 0, 0, w, h, 0, 0, w * 0.5, h * 0.5); break
                case 2: ctx.drawImage(this.img, 0, 0, w, h, 0, 0, w * 0.8, h * 0.8); break
                case 3: ctx.drawImage(this.img, 0, 0, w, h); break
                default: ctx.drawImage(this.img, 0, 0, w, h)
            }
            c++
            if (c > w) {
              c = 0
              a += radius * 2
              if (a > h) {
                clearInterval(view)
                const finTime = (Date.now() - startTime) / 1000
                console.log("finish time = " + finTime + "s")
                console.log("speed = " + Math.round(imgPx / finTime) / 1024 + "Kbps")
              }
            }
          }
        },time)
      })
      this.img.src = this.props.image //ここに画像URL
    }

  render() {
    console.log(this.props.image)
    return (
      <div className="fullScreen imageRapper" onClick={() => this.props.changeSelectAnswer()}>
        <div className="imageBackground">
          <canvas ref={(e) => { this.canvas = e }} width='500' height='500' ></canvas>
        </div>
        <footer><h1>わかったら<br />画面をタップ！</h1></footer>
      </div>
    )
  }
}

export default Image
