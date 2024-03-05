import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LeftPanel = styled.div`
  background-color: #ffc533;
  width: 50%;
  padding: 15px;
  height: 100vh;
`

export const RightPanel = styled.div`
  background-color: #272c47;
  height: 100vh;
  width: 50%;
  padding: 15px;
`

export const InfoCardContainer = styled.div`
  background-color: #ffbf1f;
  padding: 20px;
`

export const Info = styled.h1`
  color: #334155;
  font-size: 32px;
  font-weight: 700;
  font-family: 'Roboto';
  line-height: 50px;
`

export const UserInputsList = styled.ul`
  margin-top: 40px;
`

export const EmptyImage = styled.img`
  height: 350px;
  width: 90%;
  padding: 50px;
  margin-top: 10px;
`

export const CounterHeading = styled.h1`
  color: #ffbf1f;
  font-size: 32px;
  font-weight: 700;
  font-family: 'Roboto';
  line-height: 50px;
  text-align: center;
  margin-bottom: 50px;
  margin-top: 40px;
`

export const AddInputContainer = styled.form`
  display: flex;
`

export const Input = styled.input`
  background-color: #ffff;
  color: #475569;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 3px;
  height: 38px;
  padding-left: 15px;
  width: 80%;
`

export const AddInputButton = styled.button`
  background-color: #ffc533;
  color: #1e293b;
  font-size: 16px;
  border: none;
  cursor: pointer;
  margin-left: 15px;
  outline: none;
  border-radius: 5px;
  width: 102px;
  padding: 10px;
  font-weight: 700;
  font-family: 'Roboto';
`
