import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLinkM(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M17.657 14.828l-1.414-1.414L17.657 12A4 4 0 1012 6.343l-1.414 1.414-1.414-1.414 1.414-1.414a6 6 0 018.485 8.485l-1.414 1.414zm-2.829 2.829l-1.414 1.414a6 6 0 11-8.485-8.485l1.414-1.414 1.414 1.414L6.343 12A4 4 0 1012 17.657l1.414-1.414 1.414 1.414zm0-9.9l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z" />
    </Svg>
  );
}

export default SvgLinkM;
