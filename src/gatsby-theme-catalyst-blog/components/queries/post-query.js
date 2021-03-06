import React from "react"
import { graphql } from "gatsby"
import Post from "../../../components/blog/post"

const EricPostQuery = ({ data }) => {
  const { catalystPost, previous, next } = data
  return (
    <Post
      data={{ ...data, post: catalystPost }}
      previous={previous}
      next={next}
    />
  )
}

export const query = graphql`
  query($id: String!, $previousId: String, $nextId: String) {
    catalystPost(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      author
      authorLink
      tags
      categories
      keywords
      timeToRead
      date(formatString: "MMMM DD, YYYY")
      featuredImage {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
      featuredImageCaption
      socialImage {
        childImageSharp {
          Seo: resize(width: 1024) {
            src
            width
            height
          }
        }
      }
    }
    previous: catalystPost(id: { eq: $previousId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
    next: catalystPost(id: { eq: $nextId }) {
      id
      excerpt
      slug
      title
      date(formatString: "MMMM DD, YYYY")
    }
  }
`

export default EricPostQuery
