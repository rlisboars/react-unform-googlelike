import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Creators as QuestionActions } from '../../store/ducks/questions'

import {
  Container,
  QuestionHeader,
  QuestionTextArea,
  QuestionContent,
  SelectStyled,
  Actions,
  ActionButton
} from './styles'
import Title from '../Title'
import ShortAnswer from './ShortAnswer'
import LongAnswer from './LongAnswer'
import MultipleAnswer from './MultipleAnswer'

class Question extends Component {
  setActive = () => {
    if (!this.props.data.active) this.props.setActive(this.props.data.id)
  }

  changeType = type => {
    this.props.changeQuestion({
      ...this.props.data,
      type: type
    })
  }

  changeQuestion = value => {
    this.props.changeQuestion({
      ...this.props.data,
      question: value
    })
  }

  addQuestion = () => {
    this.props.setInactive(this.props.data.id)
    this.props.addQuestion(null, this.props.data.id)
  }

  copyQuestion = () => {
    this.props.setInactive(this.props.data.id)
    this.props.copyQuestion(this.props.data.id)
  }

  render() {
    const { data } = this.props
    const { active, type, question } = data
    return (
      <Container active={active} onClick={this.setActive}>
        {type === 'title' && <Title />}
        {type !== 'title' && (
          <Fragment>
            <Fragment>
              <QuestionHeader>
                <QuestionTextArea
                  placeholder="Pergunta"
                  value={question}
                  onChange={evt => this.changeQuestion(evt.target.value)}
                />
                {active && (
                  <SelectStyled
                    options={options}
                    defaultValue={options.find(op => op.value === type)}
                    onChange={evt => this.changeType(evt.value)}
                  />
                )}
              </QuestionHeader>
              <QuestionContent>
                {type === 'short' && <ShortAnswer />}
                {type === 'long' && <LongAnswer />}
                {type === 'radio' && (
                  <MultipleAnswer radio active={active} data={data} />
                )}
                {type === 'check' && (
                  <MultipleAnswer check active={active} data={data} />
                )}
                {type === 'list' && (
                  <MultipleAnswer list active={active} data={data} />
                )}
              </QuestionContent>
            </Fragment>
            {active && (
              <Actions>
                <ActionButton onClick={this.addQuestion}>
                  <i className="fas fa-plus" />
                </ActionButton>
                <ActionButton onClick={this.copyQuestion}>
                  <i className="far fa-clone" />
                </ActionButton>
                <ActionButton
                  onClick={() => this.props.removeQuestion(data.id)}
                  disabled={this.props.questionQuantity === 1}
                >
                  <i className="fas fa-trash" />
                </ActionButton>
              </Actions>
            )}
          </Fragment>
        )}
      </Container>
    )
  }
}

const mapStateToProps = ({ questions }) => ({
  questionQuantity: questions.questions.length
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(QuestionActions, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question)

const options = [
  { value: 'short', label: 'Resposta Curta' },
  { value: 'long', label: 'Parágrafo' },
  { value: 'radio', label: 'Opção única' },
  { value: 'check', label: 'Seleção Múltipla' },
  { value: 'list', label: 'Lista Suspensa' }
]
