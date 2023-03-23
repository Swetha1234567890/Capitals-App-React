import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class Capitals extends Component {
  state = {
    activeOptionId: countryAndCapitalsList[0].id,
  }

  updateOptionId = event => {
    this.setState({activeOptionId: event.target.value})
  }

  getCountryName = () => {
    const {activeOptionId} = this.state
    const updateCountry = countryAndCapitalsList.find(
      each => each.id === activeOptionId,
    )
    return updateCountry.country
  }

  render() {
    const {activeOptionId} = this.state
    const country = this.getCountryName(activeOptionId)
    return (
      <div className="background">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="capitals-container">
            <select
              className="capitals"
              onChange={this.updateOptionId}
              value={activeOptionId}
            >
              {countryAndCapitalsList.map(each => (
                <option className="option" key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="question">is capital of which country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
