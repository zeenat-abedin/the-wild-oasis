import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'

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
  cursor: pointer;
  margin: 20px;
`

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`

const StyledApp = styled.div`
  background: orangered;
  padding: 2rem;
`

function App() {
  return (
    <>   
    <GlobalStyles/>
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button onClick={()=>alert('check in')}>Check in</Button>
      <Button onClick={() => alert('check out')}>Check out</Button>
      <Input type='text' placeholder='Number of guests'/>
      </StyledApp>
    </>
  )
}

export default App
