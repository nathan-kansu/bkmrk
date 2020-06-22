import React from "react"
import styled from "styled-components"
import Container from "./Container"

const MainStyled = styled.main`
  margin: 25px auto 0;
`

const Main = ({ children }) => (
  <MainStyled>
    <Container>{children}</Container>
  </MainStyled>
)

export default Main
