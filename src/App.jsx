import styled from 'styled-components'

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow
`
const Button = styled.button`
  background-color: purple;
  color: white;
  border: none;
  border-radius: 7px;
  padding: 1.2rem 1.6rem;
  font-size: 1.2rem;
  font-weight: 500;
`

function App() {
  return (
    <div>
      <H1>The Wild Oasis</H1>
      <Button>Check in</Button>
    </div>
  )
}

export default App
