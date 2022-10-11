/** @jsx jsx */
import { jsx } from "theme-ui"
import { Themed } from "@theme-ui/mdx"
import { lighten } from "@theme-ui/color"
import { Link } from "gatsby"

const PostFooter = ({ previous, next }) => (
  <div sx={{ mb: 3 }}>
    <Themed.hr sx={{ bg: lighten("textGray", 0.4) }} />
    {(previous || next) && (
      <div
        sx={{
          display: "flex",
          flexDirection: ["column", "row", null, null, null],
          justifyContent: ["flex-start", "space-between", null, null, null],
          width: "100%",
        }}
      >
        <div
          sx={{
            width: ["70%", "40%", null, null, null],
            mb: [3, 0, null, null, null],
          }}
        >
          {previous && (
            <div>
              <Themed.h5>&larr; Previous Post</Themed.h5>
              <Link
                to={`/writing/${previous.slug}`}
                rel="prev"
                sx={(t) => ({ ...t.styles.a, fontSize: 2 })}
              >
                {previous.title}
              </Link>
            </div>
          )}
        </div>
        <div
          sx={{
            alignSelf: ["flex-end", "flex-start", null, null, null],
            width: ["70%", "40%", null, null, null],
          }}
        >
          {next && (
            <div
              sx={{
                textAlign: "right",
              }}
            >
              <Themed.h5>Next Post &rarr;</Themed.h5>
              <Link
                to={`/writing/${next.slug}`}
                rel="next"
                sx={(t) => ({ ...t.styles.a, fontSize: 2 })}
              >
                {next.title}
              </Link>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
)

export default PostFooter
