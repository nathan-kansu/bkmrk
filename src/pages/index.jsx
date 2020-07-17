import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Card from "../components/Card"
import Grid from "../components/Grid"
import SEO from "../components/seo"
import loader from "../images/loading.svg"

const Loader = styled.img`
  height: 150px;
  width: 150px;
`

const LoaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  height: 100vh;
`

const IndexPage = () => {
  const [bookmarks, setBookmarks] = useState([])

  useEffect(() => {
    window.chrome.runtime.sendMessage(
      process.env.CHROME_EXTENSION_ID,
      { action: "bookmarks:get" },
      ({ data }) => {
        const bookmarks = data
          .filter(bookmark => bookmark.children === undefined)
          .sort((a, b) => b.dateAdded - a.dateAdded)

        setBookmarks(bookmarks)
      }
    )
  }, [])

  const handleDelete = id => {
    window.chrome.runtime.sendMessage(
      process.env.CHROME_EXTENSION_ID,
      { action: "bookmarks:delete", id },
      ({ data }) => {
        const { id } = data
        setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id))
      }
    )
  }

  if (!bookmarks.length) {
    return (
      <Layout>
        <SEO title="Home" />
        <LoaderContainer>
          <Loader src={loader} />
        </LoaderContainer>
      </Layout>
    )
  }

  const currentBookmarks = bookmarks

  return (
    <Layout>
      <SEO title="Home" />
      <Grid>
        {currentBookmarks.map(bookmark => (
          <Card handleDelete={handleDelete} key={bookmark.id} {...bookmark} />
        ))}
      </Grid>
    </Layout>
  )
}

export default IndexPage
