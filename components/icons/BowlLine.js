import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SvgBowlLine = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path d="M8 1.5a1 1 0 0 0-2 0v1.018c.004.044.005.063-.207.275l-.02.02C5.506 3.079 5 3.583 5 4.5v1a1 1 0 0 0 2 0V4.482c-.004-.044-.005-.063.207-.275l.02-.02C7.494 3.921 8 3.417 8 2.5zm11 0a1 1 0 1 0-2 0v1.018c.004.044.005.063-.207.275l-.02.02c-.267.266-.773.77-.773 1.687v1a1 1 0 1 0 2 0V4.482c-.004-.044-.005-.063.207-.275l.02-.02c.267-.266.773-.77.773-1.687zm-6.5-1a1 1 0 0 1 1 1v1c0 .916-.506 1.42-.773 1.687l-.02.02c-.212.212-.21.231-.208.275l.001.018v1a1 1 0 1 1-2 0v-1c0-.916.506-1.42.773-1.687l.02-.02c.212-.212.21-.231.208-.275L11.5 2.5v-1a1 1 0 0 1 1-1M4 10h16a8 8 0 1 1-16 0M3 8a1 1 0 0 0-1 1v1c0 4.1 2.468 7.625 6 9.168V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-.832c3.532-1.543 6-5.067 6-9.168V9a1 1 0 0 0-1-1z" />
  </Svg>
);
export default SvgBowlLine;
