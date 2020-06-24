import styled from "styled-components"
import React, { useState } from "react"
import Image from "./Image"
import Heading from "./Heading"

const Container = styled.a`
  align-items: center;
  display: grid;
  grid-template-columns: 48px 1fr;
  grid-column-gap: 18px;
  grid-row-gap: 30px;
  /* margin-bottom: 10px; */
  /* flex-direction: column; */
  /* text-decoration: none;
  justify-content: center;

  /* min-height: 50vh; */

  &:last-child {
    margin-bottom: 0;
  }
`

// const Inner = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   padding: 15px;
// `

const Card = ({ handleDelete, id, title: metaTitle, url }) => {
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
  //   const showCard = image && title && description

  //   if (!showCard) {
  //     return <div>loading</div>
  //   }

  const getUrlDomainName = url => {
    const matches = url.match(/https:\/\/([a-z.]+)/)
    return (matches && matches[0]) || "nooooo"
  }

  return (
    <Container href={url} target="_blank">
      <Image alt="" src={`${getUrlDomainName(url)}/apple-touch-icon.png`} />
      <Heading>{title}</Heading>
    </Container>
  )
}

export default Card
