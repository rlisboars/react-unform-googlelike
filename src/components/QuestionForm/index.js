import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Form } from '@rocketseat/unform'

import { Creators as QuestionActions } from '../../store/ducks/questions'

import {
  Container,
  QuestionTitle,
  ShortAnswerInput,
  LongAnswerInput,
  SelectStyled,
  ActionButton,
  ActionContainer
} from './styles'

export class QuestionForm extends Component {
  handleSubmit = data => {
    console.tron.log(data)
    this.props.addAnswers(data)
  }
  render() {
    return (
      <Container>
        <h1>{this.props.formTitle}</h1>
        <p>{this.props.formDescription}</p>
        <Form onSubmit={this.handleSubmit}>
          {this.props.questions.map(question => {
            switch (question.type) {
              case 'short':
                return (
                  <Fragment key={question.id}>
                    <QuestionTitle>{question.question}</QuestionTitle>
                    <ShortAnswerInput
                      name={question.id}
                      placeholder="Texto de Resposta Curta"
                    />
                  </Fragment>
                )
              case 'long':
                return (
                  <Fragment key={question.id}>
                    <QuestionTitle>{question.question}</QuestionTitle>
                    <LongAnswerInput
                      placeholder="Texto de Resposta Curta"
                      name={question.id}
                    />
                  </Fragment>
                )
              case 'radio':
                return (
                  <Fragment key={question.id}>
                    <QuestionTitle>{question.question}</QuestionTitle>
                    {/* Using as Select as unform is not prepared for radios / checkbox  */}
                    <SelectStyled
                      name={question.id}
                      options={question.options.map(op => ({
                        value: op.id,
                        label: op.option
                      }))}
                      placeholder="Escolha uma opção"
                    />
                  </Fragment>
                )
              case 'check':
                return (
                  <Fragment key={question.id}>
                    <QuestionTitle>{question.question}</QuestionTitle>
                    {/* Using as Select as unform is not prepared for radios / checkbox  */}
                    <SelectStyled
                      name={question.id}
                      options={question.options.map(op => ({
                        value: op.id,
                        label: op.option
                      }))}
                      isMulti={true}
                      placeholder="Escolha uma ou mais opções"
                    />
                  </Fragment>
                )
              case 'list':
                return (
                  <Fragment key={question.id}>
                    <QuestionTitle>{question.question}</QuestionTitle>
                    <SelectStyled
                      name={question.id}
                      options={question.options.map(op => ({
                        value: op.id,
                        label: op.option
                      }))}
                      placeholder="Escolha uma opção"
                    />
                  </Fragment>
                )
              default:
                return ''
            }
          })}
          <ActionContainer>
            <ActionButton type="button" onClick={() => this.props.changeTab(0)}>
              VOLTAR
            </ActionButton>
            <ActionButton type="submit" primary>
              ENVIAR
            </ActionButton>
          </ActionContainer>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = ({ questions }) => questions

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addAnswers: QuestionActions.addAnswers,
      changeTab: QuestionActions.changeTab
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionForm)
