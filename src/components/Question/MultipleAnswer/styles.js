import styled from 'styled-components'

export const Option = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  span {
    font-size: 14px;
    color: #000;
  }
  input[type='text'] {
    width: 630px;
    padding-bottom: 3px;
    font-size: 14px;
    border: 0;
    margin-right: 12px;
    &:disabled {
      color: #838383;
    }
    &:hover {
      border-bottom: 1px solid #e5e5e5;
    }
  }
  button:last-child {
    border: 0;
    color: #838383;
    font-size: 22px;
  }
`

export const OptionButton = styled.button`
  border: 0;
  font-size: 22px;
  color: #cacaca;
  margin-right: 12px;
  vertical-align: center;
`
export const NewOption = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 30px;
  align-items: center;
  font-size: 13px;
  color: #838383;
  button:nth-child(2) {
    border: 0;
    color: #838383;
    font-size: 13px;
    margin-right: 5px;
    &:hover {
      border-bottom: 1px solid #e5e5e5;
    }
  }
  button.addOther {
    border: 0;
    font-size: 13px;
    font-weight: bold;
    color: #3970be;
    margin-left: 5px;
  }
  input[type='text'] {
    width: 630px;
    font-size: 14px;
    border: 0;
    border-bottom: 1px solid #e5e5e5;
    margin-left: 12px;
    margin-right: 12px;
  }
`
