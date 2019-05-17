import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { Content } from './styles'

import GlobalStyle from './globalStyle'
import Header from './components/Header'
import Question from './components/Question'
import Title from './components/Title'
import QuestionForm from './components/QuestionForm'
import Answers from './components/Answers'

class App extends Component {
  render () {
    const { questions, activeTab } = this.props
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
        <Content>
          {activeTab === 0 && (
            <Fragment>
              <Title />
              {questions.map(question => (
                <Question data={question} key={question.id} />
              ))}
            </Fragment>
          )}
          {activeTab === 1 && <QuestionForm />}
          {activeTab === 2 && <Answers />}
        </Content>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  activeTab: state.questions.activeTab,
  questions: state.questions.questions
})

export default connect(mapStateToProps)(App)
