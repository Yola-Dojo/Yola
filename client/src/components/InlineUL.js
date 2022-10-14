import React from 'react'

const InlineUL = (props) => {

  const {linkList} = props

  return (
    <ul className='inline'>
      {linkList}
    </ul>
  )
}

export default InlineUL