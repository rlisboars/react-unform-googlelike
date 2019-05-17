import styled from 'styled-components'
import Select from './Select'

import { Input } from '@rocketseat/unform'

export const Container = styled.div`
  width: 770px;
  background: #fff;
  display: flex;
  flex-direction: column;
  padding: 42px 36px 32px 36px;
  margin-bottom: 20px;
  h1 {
    font-size: 35px;
    font-weight: normal;
  }
  p {
    margin-top: 32px;
    font-size: 13px;
  }
`

export const QuestionTitle = styled.h2`
  font-size: 20px;
  font-weight: normal;
  margin-top: 36px;
`

export const ShortAnswerInput = styled(Input)`
  font-size: 12px;
  border: none;
  padding-top: 26px;
  padding-bottom: 5px;
  width: 358px;
  border-bottom: 1px solid #e5e5e5;
  &::placeholder {
    color: #aaaaaa;
  }
`

export const LongAnswerInput = styled(Input)`
  font-size: 12px;
  border: none;
  margin-top: 26px;
  margin-right: 36px;
  line-height: 12px;
  width: 100%;
  resize: none;
  border-bottom: 1px solid #e5e5e5;
  &::placeholder {
    color: #aaaaaa;
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  span {
    width: 630px;
    padding-bottom: 3px;
    font-size: 14px;
    border: 0;
    margin-right: 12px;
  }
  label {
    width: 630px;
    padding-bottom: 3px;
    font-size: 14px;
    border: 0;
    margin-left: 12px;
    margin-right: 12px;
  }
`

export const OptionButton = styled.button`
  border: 0;
  font-size: 22px;
  color: #cacaca;
  margin-right: 12px;
  vertical-align: center;
`
export const SelectStyled = styled(Select)`
  margin-top: 20px;
`

export const ActionContainer = styled.div`
  margin-top: 20px;
`
export const ActionButton = styled.button`
  border: none;
  width: 88px;
  height: 36px;
  color: #222;
  background: #eee;
  margin-right: 15px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  ${({ primary }) =>
    primary &&
    `
    color: #FFF;
    background: #1A73E8
  `}
`
