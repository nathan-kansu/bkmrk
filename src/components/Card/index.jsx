import styled from "styled-components"
import React, { useEffect, useState } from "react"
import axios from "axios"
import Image from "./Image"
import Heading from "./Heading"
import Description from "./Description"

const Container = styled.div`
  display: flex;
  min-height: 50vh;
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
`

const Card = ({ url }) => {
  const [metadata, setMetadata] = useState({
    description: "",
    image: "",
    title: "",
  })

  useEffect(() => {
    axios
      .get(process.env.SCRAPER_URI, {
        params: {
          url,
        },
        headers: {
          "x-api-key": process.env.SCRAPER_API_KEY,
        },
      })
      .then(({ data }) => {
        const { ogDescription, ogImage, ogTitle } = data

        setMetadata({
          description: ogDescription,
          image: ogImage,
          title: ogTitle,
        })
      })
      .catch(() => {
        //
      })
  }, [url])

  const { image, title, description } = metadata
  const showCard = image && title && description

  if (!showCard) {
    return <div>loading</div>
  }

  return (
    <Container>
      <Image alt="" src={image.url} />
      <Inner>
        <Heading>{title}</Heading>
        <Description>
          <p>{description}</p>
        </Description>
      </Inner>
    </Container>
  )
}

export default Card
