import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import { Content } from './styles'

import GlobalStyle from './globalStyle'
import Header from './components/Header'
import Question from './components/Question'
import Title from './components/Title'
import QuestionForm from './components/QuestionForm'

class App extends Component {
  render () {
    const { questions, isAnswering } = this.props
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
        <Content>
          {!isAnswering && (
            <Fragment>
              <Title />
              {questions.map(question => (
                <Question data={question} key={question.id} />
              ))}
            </Fragment>
          )}
          {isAnswering && <QuestionForm />}
        </Content>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  isAnswering: state.questions.isAnswering,
  questions: state.questions.questions
})

export default connect(mapStateToProps)(App)
