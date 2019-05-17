import styled from 'styled-components'

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

export const AnswerContainer = styled.div`
  background: #e9e9e9;
  color: #5b5b5b;
  margin-top: 5px;
  border-radius: 3px;
  padding: 5px;
  font-size: 13px;
`
