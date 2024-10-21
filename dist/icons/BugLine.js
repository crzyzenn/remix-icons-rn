import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBugLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 19.9a5.002 5.002 0 004-4.9v-3a4.98 4.98 0 00-.415-2h-9.17A4.98 4.98 0 007 12v3a5.002 5.002 0 004 4.9V14h2v5.9zm-7.464-2.21A6.979 6.979 0 015 15H2v-2h3v-1c0-.643.087-1.265.249-1.856L3.036 8.866l1-1.732L6.056 8.3a7.01 7.01 0 01.199-.3h11.49c.069.098.135.199.199.3l2.02-1.166 1 1.732-2.213 1.278c.162.59.249 1.213.249 1.856v1h3v2h-3a6.96 6.96 0 01-.536 2.69l2.5 1.444-1 1.732-2.526-1.458A6.986 6.986 0 0112 22a6.986 6.986 0 01-5.438-2.592l-2.526 1.458-1-1.732 2.5-1.443zM8 6a4 4 0 118 0H8z" />
    </Svg>
  );
}

export default SvgBugLine;