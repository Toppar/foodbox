import React from 'react';
import './index.css';

class HomePage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        clickCounter: 0,
        isSignedIn: false
      }

      this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
      let currentClickCount = this.state.clickCounter

      this.setState({
        ...this.state,
        clickCounter: currentClickCount += 2
      })
    }

    render() {
      return (
        <div className="home-page">
          <div className="click-counter">
            Current Click Count: {this.state.clickCounter}
          </div>
          <button className="click-button" onClick={this.handleClick}>Click Me</button>
          <div className="home-footer">
            My Footer
          </div>
        </div>

      )
    }
}

export default HomePage