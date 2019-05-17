import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { Container, QuestionTitle, AnswerContainer } from './styles'

class Answers extends Component {
  render () {
    const questions = [...this.props.questions]

    return (
      <Container>
        <h1>{this.props.formTitle}</h1>
        <p>{this.props.formDescription}</p>
        {questions.map(question => (
          <Fragment>
            <QuestionTitle>{question.question}</QuestionTitle>
            {question.answers &&
              question.answers.map(answer => {
                let label = ''
                if (Array.isArray(answer)) {
                  answer.map(
                    a =>
                      (label = label === '' ? a.label : `${label}, ${a.label}`)
                  )
                } else {
                  if (answer) label = !answer.label ? answer : answer.label
                  else label = 'Não respondida'
                }
                return <AnswerContainer>{label}</AnswerContainer>
              })}
            {question.answers.length === 0 && (
              <AnswerContainer>Não respondida</AnswerContainer>
            )}
          </Fragment>
        ))}
        {/* <QuestionTitle>Pergunta</QuestionTitle>
        <AnswerContainer>Teste</AnswerContainer>
        <QuestionTitle>Pergunta</QuestionTitle>
        <AnswerContainer>Teste</AnswerContainer> */}
      </Container>
    )
  }
}

const mapStateToProps = ({ formTitle, formDescription, questions }) => questions

export default connect(mapStateToProps)(Answers)
