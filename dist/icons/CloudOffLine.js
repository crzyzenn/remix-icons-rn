import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCloudOffLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M3.515 2.1l19.092 19.092-1.415 1.415-2.014-2.015A5.985 5.985 0 0117 21H7A6 6 0 015.008 9.339a6.992 6.992 0 01.353-2.563L2.1 3.514 3.515 2.1zM7 9c0 .081.002.163.006.243l.07 1.488-1.404.494A4.002 4.002 0 007 19h10c.186 0 .369-.013.548-.037L7.03 8.445C7.01 8.627 7 8.812 7 9zm5-7a7 7 0 016.992 7.339 6.003 6.003 0 013.212 8.65l-1.493-1.493a3.999 3.999 0 00-5.207-5.206L14.01 9.795A5.992 5.992 0 0117 9a5 5 0 00-7.876-4.09l-1.43-1.43A6.97 6.97 0 0112 2z" />
    </Svg>
  );
}

export default SvgCloudOffLine;
