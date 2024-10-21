import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgInboxLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3 3h18a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1zm17 11h-3.416a5.001 5.001 0 01-9.168 0H4v5h16v-5zm0-2V5H4v7h5a3 3 0 006 0h5z" />
    </Svg>
  );
}

export default SvgInboxLine;
