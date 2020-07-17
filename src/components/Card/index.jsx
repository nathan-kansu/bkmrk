import styled from "styled-components"
import React, { useState } from "react"
import Heading from "./Heading"
import SubHeading from "./SubHeading"

import closeIconUrl from "../../images/close.svg"

const Container = styled.a`
  background: #111;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding: 20px 25px;
  position: relative;
  text-decoration: none;

  &:last-child {
    margin-bottom: 0;
  }
`

const CloseBtn = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 20px;
  margin-bottom: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
  visibility: invisible;

  .is-hovering & {
    opacity: 1;
    visibility: visible;
  }
`

const Card = ({ handleDelete, id, title, url }) => {
  const [isHovering, setIsHovering] = useState(false)

  const getUrlDomainName = url => {
    const matches = url.match(/https:\/\/(www.)?([a-z-?.]+)\//)
    return (matches && matches[2]) || ""
  }

  const handleClose = id => event => {
    event.preventDefault()
    handleDelete(id)
  }

  return (
    <Container
      href={url}
      className={isHovering ? "is-hovering" : ""}
      target="_blank"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Heading>{title}</Heading>
      <SubHeading>{getUrlDomainName(url)}</SubHeading>
      <CloseBtn onClick={handleClose(id)}>
        <img src={closeIconUrl} alt="" />
      </CloseBtn>
    </Container>
  )
}

export default Card
