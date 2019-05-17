import styled from 'styled-components'
import Select from 'react-select'

export const Container = styled.div`
  width: 770px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  ${({ active }) =>
    active &&
    `
    border-left: 3px solid #5D8EE5
    -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.30);
    -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.30);
    box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.30);
    z-index: 1
  `}
  ${({ active }) =>
    !active &&
    `
    padding-bottom: 10px; 
  `}
`

export const QuestionTextArea = styled.textarea`
  font-size: 18px;
  border: none;
  resize: none;
  width: 394px;
  height: 30px;
  border-bottom: 1px solid #e5e5e5;
  &::placeholder {
    color: #aaaaaa;
  }
`

export const SelectStyled = styled(Select)`
  width: 256px;
  margin-right: 24px;
`
export const QuestionHeader = styled.div`
  height: 40px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const QuestionContent = styled.div`
  min-height: 90px;
`

export const Actions = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 24px;
  border-top: 1px solid #e5e5e5;
`

export const ActionButton = styled.button`
  font-size: 18px;
  height: 30px;
  width: 30px;
  border: none;
  background: none;
  color: #828282;
  cursor: pointer;
  &:disabled {
    color: #e6e6e6;
  }
`
