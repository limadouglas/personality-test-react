import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fonts } from '../utils/_var'

const Wrapper = styled.div`
  .row {
    margin: 0;
    .col {
      padding:0;
      h1 {
        padding:0;
        margin-bottom:10px;
        color:#000;
        font-size: 0.8rem;
        font-family: ${fonts.$mainFont};
        text-align: center;
      }
    }
  }
`

const Question = props => {
  return (
    <Wrapper>
      <div className="row">
        <div className="col">
          <h1>{props.content}</h1>
        </div>
      </div>
    </Wrapper>
  )
}

Question.PropTypes = {
  content: PropTypes.string.isRequired
}

export default Question
