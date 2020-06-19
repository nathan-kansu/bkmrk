import React from "react"
import styled from "styled-components"
import Container from "./Container"

const MainStyled = styled.main`
  margin: 0 auto;
`

const Main = ({ children }) => (
  <MainStyled>
    <Container>{children}</Container>
  </MainStyled>
)

export default Main
