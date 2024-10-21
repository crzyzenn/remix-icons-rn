import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGameLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2a9.98 9.98 0 017.743 3.671L13.414 12l6.329 6.329A9.98 9.98 0 0112 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm0 2a8 8 0 104.697 14.477l.208-.157-6.32-6.32 6.32-6.321-.208-.156a7.964 7.964 0 00-4.394-1.517L12 4zm0 1a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
    </Svg>
  );
}

export default SvgGameLine;
