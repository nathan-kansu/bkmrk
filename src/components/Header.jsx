import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Container from "./Container"

const StyledHeader = styled.header`
  background: black;
  margin-bottom: 20px;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
