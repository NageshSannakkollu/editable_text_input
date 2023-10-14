import {Component} from 'react'

import './App.css'

// Replace your code here
class App extends Component {
  state = {inputMessage: '', saveButtonClicked: false}

  onChangeInput = event => {
    this.setState({inputMessage: event.target.value})
  }

  onClickToggleButton = () => {
    this.setState(prevState => ({
      saveButtonClicked: !prevState.saveButtonClicked,
    }))
  }

  render() {
    const {saveButtonClicked, inputMessage} = this.state
    const buttonText = saveButtonClicked ? 'Edit' : 'Save'

    return (
      <div className="app-container">
        <div className="editable-text-container">
          <h1>Editable Text Input</h1>
          <div className="input-button-container">
            {saveButtonClicked === false ? (
              <input
                className="edit-input"
                onChange={this.onChangeInput}
                value={inputMessage}
              />
            ) : (
              <p>{inputMessage}</p>
            )}

            <button
              type="button"
              className="save-edit-button"
              onClick={this.onClickToggleButton}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
