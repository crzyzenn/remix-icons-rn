import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSurroundSoundLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 5v14h16V5H4zM3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm4.05 4.121l1.414 1.415A4.984 4.984 0 007 12.07c0 1.38.56 2.63 1.464 3.536L7.05 17.02A6.978 6.978 0 015 12.07c0-1.933.784-3.683 2.05-4.95zm9.9 0a6.978 6.978 0 012.05 4.95 6.978 6.978 0 01-2.05 4.95l-1.414-1.414A4.984 4.984 0 0017 12.07c0-1.38-.56-2.63-1.464-3.535L16.95 7.12zM12 13.071a1 1 0 100-2 1 1 0 000 2zm0 2a3 3 0 110-6 3 3 0 010 6z" />
    </Svg>
  );
}

export default SvgSurroundSoundLine;
