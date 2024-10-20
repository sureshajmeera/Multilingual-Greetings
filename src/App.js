import {Component} from 'react'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {initialImage: languageGreetingsList[0].id}

  onClickLanguageButton = event => {
    this.setState({initialImage: event.target.id})
  }

  render() {
    const {initialImage} = this.state
    const getItem = languageGreetingsList.filter(each => {
      if (each.id === initialImage) {
        return each
      }
      return null
    })

    return (
      <div>
        <h1>Multilingual Greetings</h1>
        <ul>
          {languageGreetingsList.map(each => (
            <li key={each.id}>
              <button
                key={each.id}
                type="button"
                id={each.id}
                onClick={this.onClickLanguageButton}
              >
                {each.buttonText}
              </button>
            </li>
          ))}
        </ul>
        {getItem.map(each => (
          <li key={each.id}>
            <img
              key={each.id}
              src={each.imageUrl}
              alt={each.imageAltText}
              className="image"
            />
          </li>
        ))}
      </div>
    )
  }
}

export default App
