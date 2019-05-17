import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import uuidv4 from 'uuid/v4'

import { Creators as QuestionActions } from '../../../store/ducks/questions'

import { Option, OptionButton, NewOption } from './styles'

class MultipleAnswer extends Component {
  state = {
    otherAdded: false,
    optionCounter: 2
  }

  addOption = () => {
    const { otherAdded, optionCounter } = this.state
    const { options } = this.props.data
    this.setState({ optionCounter: this.state.optionCounter + 1 })
    if (otherAdded) {
      let newOptions = options.slice()
      newOptions.splice(options.length - 1, 0, {
        id: uuidv4(),
        option: `Opção ${optionCounter}`
      })
      this.props.changeQuestion({
        ...this.props.data,
        options: [...newOptions]
      })
    } else {
      this.props.changeQuestion({
        ...this.props.data,
        options: [
          ...options,
          { id: uuidv4(), option: `Opção ${optionCounter}` }
        ]
      })
    }
  }

  addOthers = () => {
    const { options } = this.props.data
    this.setState({ otherAdded: true })
    this.props.changeQuestion({
      ...this.props.data,
      options: [...options, { id: uuidv4(), option: 'Outros...', other: true }]
    })
  }

  removeOption = id => {
    const { options } = this.props.data
    const optionIndex = options.findIndex(option => option.id === id)
    const newOptions = options.slice()
    if (!options[optionIndex].other)
      this.setState({ optionCounter: this.state.optionCounter - 1 })
    else this.setState({ otherAdded: false })
    newOptions.splice(optionIndex, 1)
    this.props.changeQuestion({
      ...this.props.data,
      options: [...newOptions]
    })
  }

  onChangeOptionInput = (optionId, value) => {
    const newOptions = [...this.props.data.options]
    const optionIndex = newOptions.findIndex(o => o.id === optionId)
    newOptions.splice(optionIndex, 1, {
      ...newOptions[optionIndex],
      option: value
    })
    this.props.changeQuestion({
      ...this.props.data,
      options: newOptions
    })
  }

  render() {
    const { otherAdded } = this.state
    const { options, active } = this.props.data
    return (
      <Fragment>
        {options.map((option, idx) => (
          <Option key={option.id}>
            {this.props.list && <span>{idx + 1}.</span>}
            <OptionButton>
              {this.props.radio && <i className="far fa-circle" />}
              {this.props.check && <i className="far fa-square" />}
            </OptionButton>
            <input
              type="text"
              defaultValue={option.option}
              disabled={option.other}
              onChange={evt =>
                this.onChangeOptionInput(option.id, evt.target.value)
              }
              onFocus={evt => evt.target.select()}
            />
            {active && (
              <button onClick={() => this.removeOption(option.id)}>
                <i className="fas fa-times" />
              </button>
            )}
          </Option>
        ))}
        {active && (
          <NewOption>
            <OptionButton>
              {this.props.radio && <i className="far fa-circle" />}
              {this.props.check && <i className="far fa-square" />}
            </OptionButton>
            <button onClick={this.addOption}>Adicionar opção</button>
            {!otherAdded && !this.props.list && (
              <div>
                ou
                <button onClick={this.addOthers} className="addOther">
                  ADICIONAR "OUTRO"
                </button>
              </div>
            )}
          </NewOption>
        )}
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changeQuestion: QuestionActions.changeQuestion
    },
    dispatch
  )

export default connect(
  null,
  mapDispatchToProps
)(MultipleAnswer)
