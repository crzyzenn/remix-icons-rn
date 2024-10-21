import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStackshareFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zm-4.208 2.621a2.223 2.223 0 00-2.133 1.6h-1.998l-2.46 4.185H8.763a2.22 2.22 0 100 1.242h1.471l2.417 4.133h2.018a2.221 2.221 0 100-1.243h-1.317l-2.056-3.536 2.053-3.538h1.31a2.223 2.223 0 102.133-2.843zm.011 9.427a1.169 1.169 0 11-1.144 1.395s-.031-.227 0-.454c.106-.535.578-.94 1.144-.94zm-10.152-4.21a1.17 1.17 0 011.168 1.168 1.168 1.168 0 01-2.335 0c0-.644.523-1.167 1.167-1.167zm10.15-4.209a1.169 1.169 0 010 2.335 1.17 1.17 0 01-1.144-.941c-.026-.206 0-.446 0-.446a1.168 1.168 0 011.144-.948z" />
    </Svg>
  );
}

export default SvgStackshareFill;
