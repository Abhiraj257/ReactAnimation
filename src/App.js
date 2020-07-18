import React, { Component } from 'react'
import gsap from 'gsap'

import './App.css'

class App extends Component {
  // let circleRef = useRef(null)
  // let circleRedRef = useRef(null)
  // let circleBlueRef = useRef(null)
  // let appRef = useRef(null)

  // let [state, setState] = useState(false)
  componentDidMount() {
    gsap.to(this.appRef, { css: { visibility: 'visible' }, duration: 0 })
    gsap.from(this.circleRef, { x: '7rem', opacity: 0, duration: 0.8 })
    gsap.from(this.circleRedRef, {
      x: '7rem',
      opacity: 0,
      duration: 0.8,
      delay: 0.2
    })
    gsap.from(this.circleBlueRef, {
      x: '7rem',
      opacity: 0,
      duration: 0.8,
      delay: 0.4
    })
  }
  state = { val: false }
  shrink = () => {
    // cirRed = false
    gsap.to(this.circleRedRef, { height: 75, width: 75, duration: 0.8 })
    this.setState({ val: false })
    // console.log(state)
  }
  expand = () => {
    // cirRed = true
    // console.log(cirRed)
    gsap.to(this.circleRedRef, { height: 200, width: 200, duration: 0.8 })
    this.setState({ val: true })
    // console.log(state)
  }
  render() {
    return (
      <div className='App' ref={el => (this.appRef = el)}>
        <header className='App-header'>
          <div className='circle-container'>
            <div ref={el => (this.circleRef = el)} className='circle '></div>
            <div
              ref={el => (this.circleRedRef = el)}
              onClick={this.state.val ? this.shrink : this.expand}
              className='circle red'></div>
            <div
              ref={el => (this.circleBlueRef = el)}
              className='circle blue'></div>
          </div>
        </header>
      </div>
    )
  }
}

export default App
