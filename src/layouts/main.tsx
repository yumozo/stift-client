import styled from "styled-components";
import NavMenu from "../components/nav-menu"

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0 0;

`

export default function Layout(props: any) {

  return (
    <>
      <NavMenu />

      <Main>
        {props.children}
      </Main>
    </>
  );
}
