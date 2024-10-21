import * as React from "react"
import Svg, { Path } from "react-native-svg"

function ExpandRightLine(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <Path d="M17.172 11l-4.657-4.657 1.414-1.414L21 12l-7.071 7.071-1.414-1.414L17.172 13H8v-2h9.172zM4 19V5h2v14H4z" />
    </Svg>
  )
}

export default ExpandRightLine
