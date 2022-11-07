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
        edges {
          node {
            id
          }
        }
      }
    }
  `);
  return (
    <main>
      <h1>Writing</h1>
    </main>
  );
};

export default WritingPage;

export const Head: HeadFC = () => <title>Writing</title>;
