import styled from "styled-components"
import React from "react"
import Heading from "./Heading"
import SubHeading from "./SubHeading"

const Container = styled.a`
  background: #111;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 20px 30px;
  text-decoration: none;

  &:last-child {
    margin-bottom: 0;
  }
`

const Card = ({ handleDelete, id, title, url }) => {
  const getUrlDomainName = url => {
    const matches = url.match(/https:\/\/([a-z.]+)/)
    return (matches && matches[1]) || "-"
  }

  return (
    <Container href={url} target="_blank">
      {/* <ImageWrapper>
        <Image alt="" src={`${getUrlDomainName(url)}/apple-touch-icon.png`} />
      </ImageWrapper> */}
      <Heading>{title}</Heading>
      <SubHeading>{getUrlDomainName(url)}</SubHeading>
    </Container>
  )
}

export default Card
