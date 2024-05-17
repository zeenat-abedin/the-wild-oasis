import styled, { css } from "styled-components"

const test = css`text-align: center;
  ${10 > 5 && "background-color:yellow" }
`

const Heading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  background-color: yellow
  ${test}
`

export default Heading;