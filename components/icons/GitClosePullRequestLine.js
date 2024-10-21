import * as React from "react"
import Svg, { Path } from "react-native-svg"

function GitClosePullRequestLine(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <Path d="M6 5a1 1 0 100 2 1 1 0 000-2zM3 6a3 3 0 114 2.83v6.34a3.001 3.001 0 11-2 0V8.83A3.001 3.001 0 013 6zm12.293-2.707a1 1 0 011.414 0L18 4.586l1.293-1.293a1 1 0 111.414 1.414L19.414 6l1.293 1.293a1 1 0 01-1.414 1.414L18 7.414l-1.293 1.293a1 1 0 11-1.414-1.414L16.586 6l-1.293-1.293a1 1 0 010-1.414zM18 10a1 1 0 011 1v4.17a3.001 3.001 0 11-2 0V11a1 1 0 011-1zM6 17a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z" />
    </Svg>
  )
}

export default GitClosePullRequestLine