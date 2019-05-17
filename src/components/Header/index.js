import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Creators as QuestionActions } from '../../store/ducks/questions'

import {
  Container,
  HeaderContainer,
  TitleInput,
  Tab,
  TabButton
} from './styles'

class Header extends Component {
  render () {
    return (
      <Container>
        <HeaderContainer>
          <TitleInput
            type="text"
            value={this.props.formTitle}
            disabled={true}
          />
        </HeaderContainer>
        <Tab>
          <TabButton
            active={!this.props.isAnswering}
            onClick={() => this.props.setAnswering(false)}
          >
            PERGUNTAS
          </TabButton>
          <TabButton
            active={this.props.isAnswering}
            onClick={() => this.props.setAnswering(true)}
          >
            RESPONDER
          </TabButton>
        </Tab>
      </Container>
    )
  }
}

const mapStateToProps = ({ questions }) => ({
  isAnswering: questions.isAnswering,
  formTitle: questions.formTitle
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setAnswering: QuestionActions.setAnswering }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
