import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBehanceLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M7.5 11a2 2 0 100-4H3v4h4.5zm1 2H3v4h5.5a2 2 0 100-4zm2.063-1.428A4 4 0 018.5 19H1V5h6.5a4 4 0 013.063 6.572zM15.5 6H21v1.5h-5.5V6zm7.5 8.5h-7.5v.25A2.75 2.75 0 0020.7 16h2.134a4.752 4.752 0 01-9.334-1.25v-1.5a4.75 4.75 0 119.5 0v1.25zm-2.104-2a2.751 2.751 0 00-5.292 0h5.292z" />
    </Svg>
  );
}

export default SvgBehanceLine;
