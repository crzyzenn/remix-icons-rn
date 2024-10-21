import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRoadsterLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M19 20H5v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-7.5l-1.243-.31A1 1 0 010 12.22v-.72a.5.5 0 01.5-.5H2l2.48-5.788A2 2 0 016.32 4h11.36a2 2 0 011.838 1.212L22 11h1.5a.5.5 0 01.5.5v.72a1 1 0 01-.757.97L22 13.5V21a1 1 0 01-1 1h-1a1 1 0 01-1-1v-1zm1-2v-5H4v5h16zM5.477 11h13.046a1 1 0 00.928-1.371L18 6H6L4.549 9.629A1 1 0 005.477 11zM5 14c2.317 0 3.879.755 4.686 2.264a.5.5 0 01-.441.736H6a1 1 0 01-1-1v-2zm14 0v2a1 1 0 01-1 1h-3.245a.5.5 0 01-.44-.736C15.12 14.754 16.682 14 19 14z" />
    </Svg>
  );
}

export default SvgRoadsterLine;
