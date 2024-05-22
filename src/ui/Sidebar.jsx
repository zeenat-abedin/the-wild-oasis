import styled from "styled-components"

const StyledSidebar = styled.aside`
  background-color: aliceblue;
  padding: 3.2rem 2.4rem;
  border-bottom: 1px solid var(--color-grey-100)
`

function Sidebar() {
  return (
    <StyledSidebar>
      SIDEBAR
    </StyledSidebar>
  )
}

export default Sidebar
