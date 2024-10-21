import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ArchiveStackLine(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <Path d="M4 5h16V3H4v2zm16 4H4V7h16v2zM3 11h7v2h4v-2h7v9a1 1 0 01-1 1H4a1 1 0 01-1-1v-9zm13 2v2H8v-2H5v6h14v-6h-3z" />
    </Svg>
  )
}

export default ArchiveStackLine
