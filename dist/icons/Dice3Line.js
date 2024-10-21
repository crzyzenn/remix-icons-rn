import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Dice3Line(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <Path d="M5 5v14h14V5H5zM3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm12.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM10 8.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm2 5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    </Svg>
  )
}

export default Dice3Line
