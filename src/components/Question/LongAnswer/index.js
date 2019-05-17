import React, { Fragment } from 'react'

import { LongAnswerInput } from './styles'

const LongAnswer = () => {
  return (
    <Fragment>
      <LongAnswerInput placeholder="Texto de Resposta Longa" disabled={true} />
    </Fragment>
  )
}

export default LongAnswer
