import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgFlagLine = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M12.382 3a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5v6H3V3zm-.618 2H5v9h8.236l1 2H19V7h-6.236z" />
  </Svg>
);
export default SvgFlagLine;
