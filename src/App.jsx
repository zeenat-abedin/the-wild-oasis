import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import Button from './ui/Button'

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow
`

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
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
