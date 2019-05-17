import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as QuestionActions } from '../../store/ducks/questions'

import { Container, TitleInput, DescriptionTextArea } from './styles'

class Title extends Component {
  render () {
    return (
      <Container>
        <TitleInput
          value={this.props.formTitle}
          onFocus={evt =>
            evt.target.value === 'Formulário sem Título'
              ? evt.target.select()
              : ''
          }
          onChange={evt => this.props.changeTitle(evt.target.value)}
        />
        <DescriptionTextArea
          placeholder="Descrição do formulário"
          rows="10"
          value={this.props.formDescription}
          onChange={evt => this.props.changeDescription(evt.target.value)}
        />
      </Container>
    )
  }
}

const mapStateToProps = ({ questions }) => ({
  formTitle: questions.formTitle,
  formDescription: questions.formDescription
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeTitle: QuestionActions.changeTitle,
      changeDescription: QuestionActions.changeDescription
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title)
