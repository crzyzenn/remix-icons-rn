import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEqualizerLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M6.17 18a3.001 3.001 0 015.66 0H22v2H11.83a3.001 3.001 0 01-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 015.66 0H22v2h-4.17a3.001 3.001 0 01-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 015.66 0H22v2H11.83a3.001 3.001 0 01-5.66 0H2V4h4.17zM9 6a1 1 0 100-2 1 1 0 000 2zm6 7a1 1 0 100-2 1 1 0 000 2zm-6 7a1 1 0 100-2 1 1 0 000 2z" />
    </Svg>
  );
}

export default SvgEqualizerLine;
