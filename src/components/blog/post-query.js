import React from "react"
import { graphql } from "gatsby"
import Post from "./post-template"

const PostQuery = ({ data }) => {
  const { blogPost, previous, next } = data
  return (
    <Post data={{ ...data, post: blogPost }} previous={previous} next={next} />
  )
}

export const query = graphql`
  query ($id: String!, $previousId: String, $nextId: String) {
    blogPost(id: { eq: $id }) {
      id
      excerpt
      body
      slug
      title
      author
      authorLink
      categories
      keywords
      timeToRead
      date(formatString: "MMMM D, YYYY")
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
    previous: blogPost(id: { eq: $previousId }) {
      id
      slug
      title
    }
    next: blogPost(id: { eq: $nextId }) {
      id
      slug
      title
    }
  }
`

export default PostQuery
