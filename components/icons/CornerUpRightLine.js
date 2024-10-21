import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CornerUpRightLine(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <Path d="M5 10v9h2v-7h10.172l-3.95 3.95 1.414 1.414L21 11l-6.364-6.364-1.414 1.414 3.95 3.95H5z" />
    </Svg>
  )
}

export default CornerUpRightLine
