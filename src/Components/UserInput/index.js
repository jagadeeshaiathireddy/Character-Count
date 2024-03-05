import {UserInputItem, UserEnteredDetails} from './styledComponents'

const UserInput = props => {
  const {userInputDetails} = props
  const {userEnteredText, userTextLength} = userInputDetails

  return (
    <UserInputItem>
      <UserEnteredDetails>
        {userEnteredText} : {userTextLength}
      </UserEnteredDetails>
    </UserInputItem>
  )
}

export default UserInput
