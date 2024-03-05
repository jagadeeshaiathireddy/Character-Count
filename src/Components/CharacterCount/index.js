import {Component} from 'react'

import {v4} from 'uuid'

import UserInput from '../UserInput'

import {
  BgContainer,
  LeftPanel,
  RightPanel,
  InfoCardContainer,
  Info,
  EmptyImage,
  CounterHeading,
  AddInputContainer,
  AddInputButton,
  Input,
  UserInputsList,
} from './styledComponents'

class CharacterCount extends Component {
  state = {
    userInputTextList: [],
    userInput: '',
  }

  onChangeUserName = event => {
    this.setState({userInput: event.target.value})
  }

  onAddUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    const newUser = {
      id: v4,
      userEnteredText: userInput,
      userTextLength: userInput.length,
    }
    this.setState(prevState => ({
      userInputTextList: [...prevState.userInputTextList, newUser],
      userInput: '',
    }))
  }

  renderUserInput = () => {
    const {userInputTextList} = this.state
    return userInputTextList.length === 0 ? (
      <EmptyImage
        src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
        alt="no user inputs"
      />
    ) : (
      userInputTextList.map(eachItem => (
        <UserInput key={eachItem.id} userInputDetails={eachItem} />
      ))
    )
  }

  render() {
    const {userInput} = this.state
    return (
      <BgContainer>
        <LeftPanel>
          <InfoCardContainer>
            <Info>
              Count the characters like a <br /> Boss...
            </Info>
          </InfoCardContainer>
          <UserInputsList>{this.renderUserInput()}</UserInputsList>
        </LeftPanel>
        <RightPanel>
          <CounterHeading>Character Counter</CounterHeading>
          <AddInputContainer onSubmit={this.onAddUserInput}>
            <Input
              type="text"
              value={userInput}
              onChange={this.onChangeUserName}
              placeholder="Enter the Characters here"
            />
            <AddInputButton>Add</AddInputButton>
          </AddInputContainer>
        </RightPanel>
      </BgContainer>
    )
  }
}

export default CharacterCount
