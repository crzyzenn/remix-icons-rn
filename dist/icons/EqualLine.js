import * as React from "react"
import Svg, { Path } from "react-native-svg"

function EqualLine(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <Path d="M19 8H5v2h14V8zm0 6H5v2h14v-2z" />
    </Svg>
  )
}

export default EqualLine
