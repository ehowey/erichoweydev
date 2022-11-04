import * as React from "react"

const Header = () => {
  return (
    <header className="px-8 py-16">
      <div className="bg-blue rounded-full w-8 h-8 block" />
      <h1 className="text-[180px] font-black tracking-wide uppercase -ml-3 ">
        Eric Howey
      </h1>
      <p className="text-4xl -mt-10">
        I work at the intersection of caring, creativity and code.
      </p>
    </header>
  )
}

export default Header
