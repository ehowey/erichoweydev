import * as React from "react";
import type { HeadFC } from "gatsby";

const WritingPage = () => {
  return (
    <main>
      <h1>Writing</h1>
    </main>
  );
};

export default WritingPage;

export const Head: HeadFC = () => <title>Writing</title>;
