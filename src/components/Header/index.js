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
            active={this.props.activeTab === 0}
            onClick={() => this.props.setAnswering(0)}
          >
            PERGUNTAS
          </TabButton>
          <TabButton
            active={this.props.activeTab === 1}
            onClick={() => this.props.setAnswering(1)}
          >
            RESPONDER
          </TabButton>
          <TabButton
            active={this.props.activeTab === 2}
            onClick={() => this.props.setAnswering(2)}
          >
            RESPOSTAS
          </TabButton>
        </Tab>
      </Container>
    )
  }
}

const mapStateToProps = ({ questions }) => ({
  activeTab: questions.activeTab,
  formTitle: questions.formTitle
})

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setAnswering: QuestionActions.setAnswering }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
