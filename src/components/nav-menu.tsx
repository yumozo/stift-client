import DropDown from "./ui/dropdown";
import Link from 'next/link'
import styled from 'styled-components'

const StyledNavMenu = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 2;
`

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  padding: 1rem 1.5rem;
  margin-inline-start: auto;
  margin-inline-end: auto;
  /* top: 2.5rem; */
  align-items: center;
  justify-content: space-between;

`

const Logo = styled(Link)`
  font-size: 1.5rem;
  line-height: 1.625rem;
  white-space: nowrap;
  padding-left: 0;
  font-weight: 700;
`

export default function NavMenu() {
  return (
    <StyledNavMenu>
      <NavContainer>
        <Logo href="/">
          Stift
        </Logo>

        <div className="dropdown-wrapper">
          <DropDown />
        </div>
      </NavContainer>
    </StyledNavMenu>
  );
}
