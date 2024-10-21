import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderSettingsFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12.414 5H21a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2zm-3.823 8.809l-.991.572 1 1.731.991-.572c.393.371.872.653 1.405.811v1.145h1.999V16.35a3.495 3.495 0 001.404-.811l.991.572 1-1.73-.991-.573a3.508 3.508 0 000-1.622l.99-.573-.999-1.73-.992.572a3.495 3.495 0 00-1.404-.812V8.5h-1.999v1.144a3.495 3.495 0 00-1.404.812L8.6 9.883l-1 1.732.991.572a3.508 3.508 0 000 1.622zm3.404.688a1.5 1.5 0 110-2.998 1.5 1.5 0 010 2.998z" />
    </Svg>
  );
}

export default SvgFolderSettingsFill;
