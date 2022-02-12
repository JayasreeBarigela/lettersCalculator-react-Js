// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
    value: 0,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
      value: event.target.value.length,
    })
  }

  render() {
    const {searchInput, value} = this.state
    return (
      <div className="container">
        <div>
          <h1>Calculate the Letters you enter</h1>

          <label htmlFor="inputSearch">Enter the phrase </label>
          <input
            id="inputSearch"
            name="Enter the phrase"
            placeholder="Enter the phrase"
            type="search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />

          <p>No.of letters:{value}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
