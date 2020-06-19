import React, { useEffect, useState } from "react"
import axios from "axios"

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
    <div>
      <img alt="" src={image.url} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Card
