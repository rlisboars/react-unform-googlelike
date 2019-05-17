import React, { Fragment } from 'react'

import { ShortAnswerInput } from './styles'

const ShortAnswer = () => {
  return (
    <Fragment>
      <ShortAnswerInput placeholder="Texto de Resposta Curta" disabled={true} />
    </Fragment>
  )
}

export default ShortAnswer
