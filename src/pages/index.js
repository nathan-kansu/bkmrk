import React, { useEffect, useState } from "react"

import Layout from "../components/layout"
import Card from "../components/Card"
import Grid from "../components/Grid"
import SEO from "../components/seo"

const IndexPage = () => {
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    window.chrome.runtime.sendMessage(
      process.env.CHROME_EXTENSION_ID,
      {},
      ({ data }) => {
        const bookmarks = data
          .filter(bookmark => bookmark.children === undefined)
          .sort((a, b) => b.dateAdded - a.dateAdded)

        setBookmarks(bookmarks)
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
  // .filter(bookmark => bookmark.children === undefined)
  // .slice(0, 5)

  return (
    <Layout>
      <SEO title="Home" />
      <Grid>
        {currentBookmarks.map(bookmark => (
          <Card key={bookmark.id} {...bookmark} />
        ))}
      </Grid>
    </Layout>
  )
}

export default IndexPage
