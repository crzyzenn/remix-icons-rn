import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTrainWifiLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12.498 3a6.464 6.464 0 00-.479 2H7a2 2 0 00-1.995 1.85L5 7v11h14v-6.019a6.463 6.463 0 002-.48V18a2 2 0 01-2 2h-1.8l1.8 1.5v.5H5v-.5L6.8 20H5a2 2 0 01-2-2V7a4 4 0 014-4h5.498zM12 13a2 2 0 110 4 2 2 0 010-4zm.174-6a6.51 6.51 0 002.862 4.001L6 11V7h6.174zM18.5 1a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.416a1.994 1.994 0 00-1.413-.584zm0-2.667a4.65 4.65 0 00-3.128 1.203l-.173.165.944.942a3.323 3.323 0 012.357-.977 3.32 3.32 0 012.201.83l.156.147.943-.943A4.652 4.652 0 0018.5 3.5z" />
    </Svg>
  );
}

export default SvgTrainWifiLine;
