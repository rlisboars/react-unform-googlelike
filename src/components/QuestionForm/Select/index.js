import React, { useRef, useEffect } from 'react'
import ReactSelect from 'react-select'

import { useField } from '@rocketseat/unform'

export default function Select ({ name, label, options, multiple, ...rest }) {
  const ref = useRef(null)
  const { fieldName, registerField } = useField(name)

  function parseSelectValue (selectValue) {
    if (!multiple) {
      return selectValue ? selectValue.id : ''
    }
    return selectValue ? selectValue.map(option => option.id) : []
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'state.value',
      parseValue: parseSelectValue,
      clearValue: selectRef => {
        selectRef.selec.clearValue()
      }
    })
  })

  return (
    <ReactSelect
      name={fieldName}
      aria-label={fieldName}
      options={options}
      isMulti={multiple}
      ref={ref}
      // getOptionValue={option => option.id}
      // getOptionLabel={option => option.title}
      {...rest}
    />
  )
}
