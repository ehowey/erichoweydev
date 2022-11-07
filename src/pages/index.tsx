import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import type { HeadFC } from "gatsby";

const HomePage = () => {
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
      <h1>Home</h1>
    </main>
  );
};

export default HomePage;

export const Head: HeadFC = () => <title>Hello and Welcome</title>;
