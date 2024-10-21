import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCoupon2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M14 3v18H3a1 1 0 01-1-1v-5.5a2.5 2.5 0 100-5V4a1 1 0 011-1h11zm2 0h5a1 1 0 011 1v5.5a2.5 2.5 0 100 5V20a1 1 0 01-1 1h-5V3z" />
    </Svg>
  );
}

export default SvgCoupon2Fill;
