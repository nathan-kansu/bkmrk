import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Card from "../components/Card"
import SEO from "../components/seo"

const IndexPage = () => {
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    window.chrome.runtime.sendMessage(
      process.env.CHROME_EXTENSION_ID,
      {},
      ({ data }) => {
        setBookmarks(data)
      }
    )
  }, [])

  if (!bookmarks.length) {
    return (
      <Layout>
        <SEO title="Home" />
        <div>Loading...</div>
      </Layout>
    )
  }

  const currentBookmarks = bookmarks
    .filter(bookmark => bookmark.children === undefined)
    .slice(0, 5)

  return (
    <Layout>
      <SEO title="Home" />
      <div>
        {currentBookmarks.map(bookmark => (
          <Card key={bookmark.id} {...bookmark} />
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage
