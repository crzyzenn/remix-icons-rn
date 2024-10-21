import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgContactsBook2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M20 22H6a3 3 0 01-3-3V5a3 3 0 013-3h14a1 1 0 011 1v18a1 1 0 01-1 1zm-1-2v-2H6a1 1 0 000 2h13zM5 16.17c.313-.11.65-.17 1-.17h13V4H6a1 1 0 00-1 1v11.17zM12 10a2 2 0 110-4 2 2 0 010 4zm-3 4a3 3 0 016 0H9z" />
    </Svg>
  );
}

export default SvgContactsBook2Line;
