import * as React from "react";
import type { HeadFC } from "gatsby";

const HomePage = () => {
  return (
    <main>
      <h1>Home</h1>
    </main>
  );
};

export default HomePage;

export const Head: HeadFC = () => <title>Hello and Welcome</title>;
