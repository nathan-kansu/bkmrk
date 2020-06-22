import styled from "styled-components"
import React, { useEffect, useState } from "react"
import axios from "axios"
import Image from "./Image"
import Heading from "./Heading"
import Description from "./Description"

const Container = styled.a`
  background: #111;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: center;
  margin-bottom: 10px;
  /* min-height: 50vh; */

  &:last-child {
    margin-bottom: 0;
  }
`

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
`

const Card = ({ title: metaTitle, url }) => {
  const [metadata, setMetadata] = useState({
    description: "",
    image: "http://www.fillmurray.com/g/300/300",
    title: metaTitle,
  })

  //   useEffect(() => {
  //     axios
  //       .get(process.env.SCRAPER_URI, {
  //         params: {
  //           url,
  //         },
  //         headers: {
  //           "x-api-key": process.env.SCRAPER_API_KEY,
  //         },
  //       })
  //       .then(({ data }) => {
  //         //const { ogDescription, ogImage, ogTitle } = data

  //         setMetadata({
  //           description: data?.ogDescription || metadata.description,
  //           image: data?.ogImage || metadata.image,
  //           title: data?.ogTitle || metadata.title,
  //         })
  //       })
  //       .catch(err => {
  //         console.log(err)
  //       })
  //   }, [metadata, url])

  const { image, title, description } = metadata
  const showCard = image && title && description

  //   if (!showCard) {
  //     return <div>loading</div>
  //   }

  return (
    <Container href={url} target="_blank">
      <Image alt="" src={image.url} />
      <Inner>
        <Heading>{title}</Heading>
        {/* <Description>
          <p>{description}</p>
        </Description> */}
      </Inner>
    </Container>
  )
}

export default Card
