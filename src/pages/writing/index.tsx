import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import type { HeadFC } from "gatsby";

const WritingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: {
          frontmatter: { type: { eq: "post" }, published: { eq: true } }
        }
      ) {
        nodes {
          id
          frontmatter {
            title
          }
          excerpt(pruneLength: 100)
        }
      }
    }
  `);
  const posts = data.allMdx.nodes;
  return (
    <main>
      <h1>Writing</h1>
      <ol>
        {posts.map((post) => (
          <li>{post.frontmatter.title}</li>
        ))}
      </ol>
    </main>
  );
};

export default WritingPage;

export const Head: HeadFC = () => <title>Writing</title>;
