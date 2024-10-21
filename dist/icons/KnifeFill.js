import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgKnifeFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22.373 19.44a1.5 1.5 0 01-2.121 2.12l-4.596-4.596L12.12 20.5l-7.778-7.778a8 8 0 01-.174-11.135l.174-.179L22.373 19.44z" />
    </Svg>
  );
}

export default SvgKnifeFill;